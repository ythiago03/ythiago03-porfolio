import { useState, useRef  } from 'react';

import './IconButton.css';

export default function IconButton({ children, text, href, ...props }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="iconButton"
      {...props}
    >
      <a href={href} target="_blank" rel="noreferrer">
        {children}
        <div
          style={{ width: hovered ? ref.current?.offsetWidth || 0 : 0 }}
          className="iconText"
        >
          <span  ref={ref} >
            {text}
          </span>
        </div>
      </a>
    </button>
  );
}
