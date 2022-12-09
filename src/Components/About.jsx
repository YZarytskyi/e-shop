import React from 'react';
import photo1 from '../assets/images/about.jpg'
import photo2 from '../assets/images/about2.jpg'
import photo3 from '../assets/images/about3.jpg'
import photo4 from '../assets/images/about5.jpg'

const About = () => {
  return(
    <div className="container">
      <div className="row">
        <div className="col-md-7 mx-auto text-center">
          <h1 className='mt-3'>About us</h1>
          <p className="lead text-black">
            We believe in a world where you have total freedom to be you, without judgement. To experiment. To express yourself. To be brave and grab life as the extraordinary adventure it is. So we make sure everyone has an equal chance to discover all the amazing things they’re capable of – no matter who they are, where they’re from or what looks they like to boss. We exist to give you the confidence to be whoever you want to be.
          </p>
          <div className="about">
            <img src={photo1} alt='man'/>
            <img src={photo2} alt='man'/>
          </div>
          <h3 className='mt-4'>PRESTIGE Foundation</h3>
          <p className="lead text-black">
            We set up the PRESTIGE Foundation because we believe everyone deserves access to the same opportunities. It achieved full charity status in 2013 and provides infrastructure, training and support to enable disadvantaged young adults to reach their potential. Our mission is to inspire young people to break down barriers and, ultimately, to achieve amazing things. We have so many experts in fashion and tech who love to pass on their talent through the Foundation – it’s one of our favourite parts of being PRESTIGE, and we hope we can change lives.
          </p>
          <div className="about">
            <img src={photo3} alt='man'/>
            <img src={photo4} alt='man'/>
          </div>
          <h3 className='mt-4'>THE LEGAL BIT</h3>
          <p className="lead text-black">
            Limited Registered Address Greater London House, Hampstead Road, London, England, NW1 7FB <br />
            Email Address: prestige@eshop.com <br />
            Company Register: Companies House (England) <br />
            Company Registration Number: 03584121 <br />
            Authorised Representative: José Antonio Ramos Calamonte CEO <br />
            VAT number: GB 788 6225 77
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;