// import React from 'react';

const FigmaIcon = () => (
  <svg
    width="100"
    height="100"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#F24E1E', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#FF7262', stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#A259FF', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#0ACF83', stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#1ABCFE', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#A259FF', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <g fill="url(#grad1)">
      <circle cx="12" cy="4" r="4" />
    </g>
    <g fill="url(#grad2)">
      <circle cx="12" cy="12" r="4" />
    </g>
    <g fill="url(#grad3)">
      <circle cx="12" cy="20" r="4" />
    </g>
  </svg>
);

export default FigmaIcon;
