import React, { useState } from 'react';
import { cn } from '../lib/utils';

const WebsitePreview = ({ name, url, screenshot, index }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="flex justify-center items-center p-4 sm:p-6 md:p-8">
      <div
        className={cn(
          "group relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-md transition-all duration-300",
          "hover:shadow-xl hover:-translate-y-1",
          "animate-fade-in",
          "w-full max-w-sm sm:max-w-md md:max-w-lg"
        )}
        style={{ animationDelay: `${index * 150}ms` }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Browser header */}
        <div className="flex items-center bg-slate-100 px-4 py-2 border-b border-slate-200">
          <div className="flex space-x-1.5 mr-4">
            <div className="h-3 w-3 rounded-full bg-red-400"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
            <div className="h-3 w-3 rounded-full bg-green-400"></div>
          </div>
          <div className="flex-1 overflow-hidden px-3 py-1 text-xs text-slate-600 bg-white rounded-md">
            {url}
          </div>
        </div>

        {/* Website preview */}
        <div className="relative h-48 overflow-hidden">
          <div 
            className={cn(
              "h-[200%] w-full transition-transform duration-[8s] ease-linear",
              isHovering ? "animate-website-scroll" : ""
            )}
          >
            <img
              src={screenshot}
              alt={name}
              className="w-full object-cover"
            />
          </div>
          
          {/* Hover overlay with call to action */}
          <div 
            className={cn(
              "absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300",
              isHovering ? "opacity-100" : ""
            )}
          >
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-100 transform transition-transform duration-300 hover:scale-105"
            >
              Visit Website
            </a>
          </div>
        </div>

        {/* Website info */}
        <div className="p-4 text-center">
          <h3 className="font-medium text-slate-900">{name}</h3>
          <p className="mt-1 text-sm text-slate-500 truncate">{url}</p>
        </div>
      </div>
    </div>
  );
};

export default WebsitePreview;
