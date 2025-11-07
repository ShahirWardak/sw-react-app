import { useEffect, useState } from 'react';

export function useIsVisible(ref: any) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}

type Section = {
  id: string;
  label: string;
  ref: React.RefObject<HTMLElement>;
};

export function useIsVisible2(sections: Section[]) {
  const [intersectingElement, setIntersectingElement] = useState<string | null>(
    null
  );

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIntersectingElement(entry.target.id);
      }
    });

    sections.forEach((val) => {
      observer.observe(val.ref.current!);
    });

    return () => {
      observer.disconnect();
    };
  }, [sections]);

  return intersectingElement;
}
