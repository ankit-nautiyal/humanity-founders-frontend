import React, { useEffect, useState } from 'react';

function Avatar({ src = '/assets/profilePic.png', alt = 'User avatar', size = 'md', className = '' }) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);
  
  const sizeClasses = {
    xs: 'w-6 h-6',
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  useEffect(() => {
    // Reset error state when src changes
    setHasError(false);
    setImgSrc(src);
  }, [src]);

  const handleError = () => {
    if (!hasError) {
      console.error('Image failed to load, using fallback');
      setHasError(true);
      setImgSrc('/assets/profilePic.png'); // Use the copy in public folder
    }
  };

  const sizeClass = sizeClasses[size] || sizeClasses.md;
  
  return (
    <div className={`${sizeClass} rounded-full overflow-hidden flex-shrink-0 ${className}`}>
      <img
        src={imgSrc}
        alt={alt}
        className="w-full h-full object-cover"
        onError={handleError}
      />
    </div>
  );
}

export default Avatar; 