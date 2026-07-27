"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Hook para detectar quando um elemento entra na viewport
 * e disparar animações de entrada (Intersection Observer)
 */
export function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

/**
 * Hook para stagger de múltiplos filhos (reveal em sequência)
 */
export function useStaggerReveal(count: number, threshold = 0.1) {
  const ref = useRef<HTMLElement>(null);
  const [visibleItems, setVisibleItems] = useState<boolean[]>(
    Array(count).fill(false)
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Ativa cada item com delay sequencial
          Array.from({ length: count }).forEach((_, i) => {
            setTimeout(() => {
              setVisibleItems((prev) => {
                const next = [...prev];
                next[i] = true;
                return next;
              });
            }, i * 120);
          });
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [count, threshold]);

  return { ref, visibleItems };
}
