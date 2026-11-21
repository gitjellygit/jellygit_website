import React, { useEffect, useRef, useState } from 'react';
import './fx.css';

/* Rotating typewriter-style tech words with a neon gradient. */
export function TechText({ words, speed = 90, pause = 1600, className = '' }) {
  const [text, setText] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIdx % words.length];
    let t;
    if (!deleting && text === word) {
      t = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === '') {
      setDeleting(false);
      setWordIdx((i) => (i + 1) % words.length);
    } else {
      t = setTimeout(
        () => setText(word.slice(0, deleting ? text.length - 1 : text.length + 1)),
        deleting ? speed / 2 : speed
      );
    }
    return () => clearTimeout(t);
  }, [text, deleting, wordIdx, words, speed, pause]);

  return (
    <span className={`tech-text ${className}`}>
      {text}
      <span className="tech-caret" />
    </span>
  );
}

/* 3D ring carousel — ReactBits-style: image cards on a rotating cylinder,
   drag with momentum, snap to nearest card, click to open. */
export function CircularCarousel({ items }) {
  const n = items.length;
  const step = 360 / n;
  const ringRef = useRef(null);
  const angle = useRef(0);
  const velocity = useRef(0.12); // deg/frame idle spin
  const dragging = useRef(false);
  const lastX = useRef(0);
  const moved = useRef(0);
  const snap = useRef(null);
  const stageRef = useRef(null);
  const [radius, setRadius] = useState(300);

  useEffect(() => {
    const measure = () => {
      const w = stageRef.current?.clientWidth || 600;
      // radius must be large enough that adjacent cards (360/n deg apart)
      // don't overlap: chord = 2*r*sin(pi/n) should exceed card width + gap
      setRadius(Math.min(560, Math.max(300, w * 0.85)));
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  useEffect(() => {
    let raf;
    const loop = () => {
      if (!dragging.current) {
        if (snap.current != null) {
          // ease toward snap target
          const diff = snap.current - angle.current;
          if (Math.abs(diff) < 0.05) {
            angle.current = snap.current;
            snap.current = null;
          } else {
            angle.current += diff * 0.12;
          }
        } else {
          angle.current += velocity.current;
          velocity.current += (0.12 - velocity.current) * 0.02; // relax to idle speed
        }
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `rotateY(${angle.current}deg)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  const onPointerDown = (e) => {
    dragging.current = true;
    moved.current = 0;
    lastX.current = e.clientX;
    snap.current = null;
    velocity.current = 0;
  };
  const onPointerMove = (e) => {
    if (!dragging.current) return;
    const dx = e.clientX - lastX.current;
    lastX.current = e.clientX;
    moved.current += Math.abs(dx);
    angle.current += dx * 0.35;
    velocity.current = dx * 0.35;
  };
  const onPointerUp = () => {
    if (!dragging.current) return;
    dragging.current = false;
    // snap to nearest card if it was a drag (not a click)
    if (moved.current > 6) {
      const snapped = Math.round(angle.current / step) * step;
      snap.current = snapped;
      velocity.current = 0;
    } else {
      velocity.current = 0.12;
    }
  };

  return (
    <div
      className="rb-carousel"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
    >
      <div className="rb-stage" ref={stageRef}>
        <div className="rb-ring" ref={ringRef}>
          {items.map((item, i) => (
            <div
              key={item.href + i}
              className="rb-card"
              style={{
                transform: `rotateY(${i * step}deg) translateZ(${radius}px)`,
              }}
            >
              <a
                href={item.href}
                className="rb-card-link"
                onClick={(e) => {
                  if (moved.current > 6) {
                    e.preventDefault();
                    e.stopPropagation();
                  }
                }}
              >
                <div
                  className="rb-card-inner"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <div className="rb-card-shade" />
                  <div className="rb-card-body">
                    <span className="rb-card-tag">{item.tag || 'Service'}</span>
                    <span className="rb-card-title">{item.label}</span>
                    <span className="rb-card-cta">Explore <i className="fa fa-arrow-right" /></span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="rb-hint">Drag to spin · click a card to explore</div>
    </div>
  );
}

/* Fade/slide-in on scroll via IntersectionObserver. */
export function Reveal({ children, className = '', delay = 0, as: Tag = 'div' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) {
      setVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'revealed' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}

export function DarkSection({ children, className = '' }) {
  return <section className={`orbit-section ${className}`}>{children}</section>;
}

export default { TechText, CircularCarousel, Reveal, DarkSection };
