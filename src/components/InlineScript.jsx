import React, { useEffect, useRef } from 'react';

// Executes inline JS the way a parser-inserted <script> would,
// preserving document.currentScript semantics for legacy snippets.
export default function InlineScript({ code }) {
  const markerRef = useRef(null);

  useEffect(() => {
    const marker = markerRef.current;
    if (!marker) return;
    const script = document.createElement('script');
    script.textContent = code;
    marker.parentNode.insertBefore(script, marker);
    return () => script.remove();
  }, [code]);

  return <span ref={markerRef} hidden />;
}
