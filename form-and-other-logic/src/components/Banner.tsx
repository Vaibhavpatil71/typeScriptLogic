import React from 'react'
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

const Banner:React.FC = () => {
  return (  
    <>
    <Carousel autoplay>
    <div>
      <h3 style={contentStyle}>You</h3>
    </div>
    <div>
      <h3 style={contentStyle}>Have </h3>
    </div>
    <div>
      <h3 style={contentStyle}>Set the</h3>
    </div>
    <div>
      <h3 style={contentStyle}>Banner</h3>
    </div>
  </Carousel>
    </>
  )
}

export default Banner