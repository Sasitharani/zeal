import React from 'react';
import './Parallax.css';

const Parallax = () => {
  return (
    <div>
      <div className="parallax parallax1">
        <div className="content font-semibold text-2xl text-white">
          Scroll Up and Down this page to see the parallax scrolling effect.
        </div>
      </div>
      <div className="parallax parallax2">
        <div className="content font-bold text-2xl text-white">
          This is another section with scrolling enabled.
        </div>
      </div>
      <div className="parallax parallax3">
        <div className="content font-extrabold text-2xl text-white">
          Yet another section for demonstration purposes.
        </div>
      </div>
      <div className="parallax parallax4">
        <div className="content font-extralight text-2xl text-white">
          Final section for the parallax effect.
        </div>
      </div>
    </div>
  );
};

export default Parallax;
