import React from 'react';
import HTMLFlipBook  from 'react-pageflip';

const Sketchbook =()=> {
  return (
    <HTMLFlipBook width={800}
        height={400}
        size="stretch"
        minWidth={800}
        maxWidth={800}
        minHeight={400}
        maxHeight={400}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={false}
        className="demo-book">
        <div className="demoPage"><img src="/sketchbook/image1.png" /></div>
        <div className="demoPage"><img src="/sketchbook/image2.png" /></div>
        <div className="demoPage"><img src="/sketchbook/image3.png" /></div>
        <div className="demoPage"><img src="/sketchbook/image4.png" /></div>
        <div className="demoPage"><img src="/sketchbook/image5.png" /></div>
        <div className="demoPage"><img src="/sketchbook/image6.png" /></div>
      </HTMLFlipBook>
  );    
};

export default Sketchbook;