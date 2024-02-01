import React from 'react'
import '../styles/home.css'
import headerImg from '../imgs/imagecompressor/header.jpg'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <header className="home d-flex align-items-center py-5 px-3 theme-background-2 position-relative">
      <div className='back-layer1'></div>
      <div className='back-layer1-border'></div>
      <div className='back-layer2'></div>
      <div className='back-layer2-border'></div>
      <div className="container">
        <div className="row justify-content-md-around justify-content-center position-relative z-1 gap-md-0 gap-3">
          <div className="col-10 col-lg-7 col-md-6 order-md-0 order-1 " data-aos="fade" data-aos-delay='500'>
            <h3 className="fw-bold theme-text-1 ">Hi , I'M Huda a professional DESIGNER</h3>
            <p className="my-3 theme-text-1">based in Syria , Damascus</p>
            <div className="buttons">
              <Link to={'/about'} className="button1 rounded-0 text-decoration-none me-3 mt-3" href="#about" type="button">
                About ME
                <span className="first"></span>
                <span className="second"></span>
                <span className="third"></span>
                <span className="fourth"></span>
              </Link>
              <Link to={'/portfolio'} className="button1 rounded-0 text-decoration-none" href="#projects" type="button">
                Projects
                <span className="first"></span>
                <span className="second"></span>
                <span className="third"></span>
                <span className="fourth"></span>
              </Link>
            </div>
          </div>
          <div className=" col-10 col-lg-5 col-md-6 order-md-1 order-0 " data-aos="fade" data-aos-delay='500'>
            <div className="overflow-hidden img-box">
              <img className="w-100 object-fit-cover h-100" src={headerImg} alt="hero user imge" loading='lazy' />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Home
