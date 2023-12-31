

const Ellipse = () => {
    return (
        
      <svg className="ellipse-style" width="222" height="129" viewBox="0 0 222 129" fill="none">
        <defs>
          <filter id="blur-filter">
            <feGaussianBlur in="SourceGraphic" stdDeviation="100" />
          </filter>
          <mask id="ellipse-mask" maskUnits="userSpaceOnUse">
            <circle cx="111" cy="65" r="150" fill="#CAF6E7" />
            </mask>
        </defs>
        <g mask="url(#ellipse-mask)">
          <path d="M139.089 -136.266C69.3679 -167.313 -12.3207 -135.961 -43.3673 -66.2394C-74.4139 3.48193 -43.0618 85.1705 26.6596 116.217C96.3809 147.264 178.069 115.912 209.116 46.1903C240.163 -23.5311 208.811 -105.22 139.089 -136.266Z" filter="url(#blur-filter)" />
        </g>
      </svg>
      
      
    );
  };
  
  export default Ellipse;

