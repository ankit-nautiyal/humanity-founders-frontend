import React from 'react';

function Avatar({ src = '/avatars/avatar-1.png', alt = 'User avatar', size = 'md', className = '' }) {
  const sizeClasses = {
    xs: 'w-6 h-6',
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const sizeClass = sizeClasses[size] || sizeClasses.md;
  
  return (
    <div className={`${sizeClass} rounded-full overflow-hidden flex-shrink-0 ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        onError={(e) => {
          // Fallback to a default avatar if the image fails to load
          e.target.src = '/avatars/avatar-1.png';
        }}
      />
    </div>
  );
}

export default Avatar; 