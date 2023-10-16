import { useState, useRef  } from 'react';

import './IconButton.css';

interface Props {
  children: JSX.Element,
  text: string,
  href: string,
}

const IconButton = ({ children, text, href, ...props }: Props) => {
  const [onHover, setOnHover] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  return (
    <button
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
      className="iconButton"
      {...props}
    >
      <a href={href} target="_blank" rel="noreferrer">
        {children}
        <div
          style={{ width: onHover ? ref.current?.offsetWidth  || 0 : 0 }}
          className="iconText"
        >
          <span ref={ref} >
            {text}
          </span>
        </div>
      </a>
    </button>
  );
};
export default IconButton;
