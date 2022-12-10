import React from 'react'
import './About.css';

const About = () => {
    return (

        <div className='about'>
            <div className='headerParagraph'>
                <h1>Last Mile is complex.</h1>
                <h1>Let us help you simplify it.</h1>
                <div className='headerParagraphcontent'>
                    <p>We understand your last mile challenges, because we’ve been transforming the delivery logistics of the world's largest brands for nearly a decade. Last Mile is the most critical, complicated, and costly aspect of the delivery journey, specialist expertise is essential.</p>
                </div>
                <button className='headerParagraphcontentbutton'>Let' Talk</button>
            </div>
            <div className='deliveryImag' >
                <img src="https://fareye.com/uploads/imager/generic/images/63179/About_01_af599ee76a60a3ffac0b778428c6ae2f.webp" alt="image" />
                <h1>The FarEye Delivery Management Platform enables our customers to deliver from anywhere to everywhere</h1>
            </div>
            <div className="lastMile">
                <span>We are the first choice for Last Mile</span>
            </div>
            <div className='photoImag' >
                <img src="https://fareye.com/uploads/imager/generic/images/63181/About_02_036f98f14f8316f85a20fe0e7c746eb6.webp" alt="image" />
                <div className='photoImagcontent'>
                    <h1>Who we are</h1>
                    <span>FarEye was founded on the premise of making deliveries better for everyone throughout the delivery value chain.</span>
                    <span style={{ margintop: '10px' }}>We simplify last-mile logistics, ensuring deliveries are made on-time, every time. This leads to increased brand loyalty and satisfaction for consumers as well as reduced costs and operational efficiencies for companies across the globe.</span>
                </div>
            </div>
        </div >
    )
}

export default About
