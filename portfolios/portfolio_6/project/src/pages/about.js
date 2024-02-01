import React from 'react'
import '../styles/about.css'
import user from '../imgs/imagecompressor/user.jpg'
import testimonial1 from '../imgs/imagecompressor/testimonal-min.jpg'
import testimonial2 from '../imgs/imagecompressor/testimonal2-min.jpg'
import testimonial3 from '../imgs/imagecompressor/testimonal3-min.jpg'



import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

let progressStyle = {
  progress1: {
    width: '70%'
  },
  progress2: {
    width: '70%'
  },
  progress3: {
    width: '70%'
  },
  progress4: {
    width: '80%'
  },
  progress5: {
    width: '90%'
  },
  progress6: {
    width: '60%'
  },
  progress7: {
    width: '100%'
  },
  progress8: {
    width: '70%'
  },

}


function About() {
  return (
    <div className="about theme-background-2 min-h-100  position-relative" id="contact" >
      <div className='back-layer-1'></div>
      <div className='back-layer0'></div>
      <div className='back-layer1'></div>
      <div className='back-layer2 '></div>
      <div className='back-layer3 '></div>
      <div className='back-layer4 '></div>
      <div className="container">
        <div className="row d-flex gap-lg-0 gap-5 justify-content-lg-between justify-content-center position-relative">
          <div className="col-11  col-md-8 order-md-0 order-1 col-radius p-3 " data-aos="fade" data-aos-delay='500'>
            <section className=' '>
              <div className="box mb-5">
                <div className='row gap-4 gap-md-0'>
                  <div className='col-12 col-md-6'>
                    <h2 className='title theme-text-1'>
                      About Me
                    </h2>
                    <p className="theme-text-2 sectionLittleP">I'm a designer & developer with a passion for web design. I enjoy
                      developing simple, clean and slick websites that provide real value to the end user.
                    </p>
                    <p className="theme-text-2  sectionLittleP">I'm a designer & developer with a passion for web design. I enjoy
                      developing simple, clean and slick websites that provide real value to the end user.
                    </p>
                    <button className="button1 mt-3" type="button">
                      Download CV
                    </button>
                  </div>


                  <div className='col-12 col-lg-6'>

                    <div className="mt-2 mb-2">
                      <span className="me-3 maincolor-text-1 sectionLittleP">First Name :</span> <span
                        className="theme-text-2">Nour</span>
                    </div>
                    <div className="mb-2">
                      <span className="me-3 maincolor-text-1 sectionLittleP">Last Name :</span>
                      <span className="theme-text-2">Sayed</span>
                    </div>
                    <div className="mb-2">
                      <span className="me-3 maincolor-text-1 sectionLittleP">Age :</span> <span className="theme-text-2">24</span>
                    </div>
                    <div className="mt-2 mb-2">
                      <span className="me-3 maincolor-text-1 sectionLittleP">From :</span> <span
                        className="theme-text-2">Syria , Damascus</span>
                    </div>
                    <div className="mb-2">
                      <span className="me-3 maincolor-text-1 sectionLittleP">Email :</span>
                      <span className="theme-text-2">Nour3@...</span>
                    </div>
                    <div className="mb-2">
                      <span className="me-3 maincolor-text-1 sectionLittleP">Phone :</span> <span className="theme-text-2">+963
                        933...</span>
                    </div>
                    <div className="mb-2">
                      <span className="me-3 maincolor-text-1 sectionLittleP">Residence :</span> <span className="theme-text-2">Al
                        Mazzah</span>
                    </div>
                    <div className="mt-2 mb-2">
                      <span className="me-3 maincolor-text-1 sectionLittleP">Available :</span> <span
                        className="theme-text-2">Yes</span>
                    </div>
                  </div>
                </div>
              </div>


              <div className="box mb-5">
                <div className='row gap-4 gap-lg-0'>
                  <div className='col-lg-6 col-12'>
                    <h2 className='title title theme-text-1'>
                      Services
                    </h2>
                    <ul className='p-0 services'>
                      <li className=" mb-3 theme-text-2 ">Web Development</li>
                      <li className=" mb-3 theme-text-2">Web Development</li>
                      <li className=" mb-3 theme-text-2">Web Development</li>
                      <li className=" mb-3 theme-text-2">Web Development</li>
                    </ul>
                  </div>


                  <div className='col-lg-6 col-12'>
                    <h2 className='title  theme-text-1'>
                      Skills
                    </h2>
                    <div className="progress-bar mb-3">
                      <p className=" theme-text-2 text-start mb-2">Adobe Xd</p>
                      <div className="bar-container theme-background-3 theme-border-1 w-100">
                        <div className="bar-line maincolor-background-1" style={progressStyle.progress3}></div>
                      </div>
                    </div>
                    <div className="progress-bar mb-3">
                      <p className=" theme-text-2 text-start mb-2">Adobe Illustrator</p>
                      <div className="bar-container theme-background-3 theme-border-1 w-100">
                        <div className="bar-line maincolor-background-1" style={progressStyle.progress3}></div>
                      </div>
                    </div>
                    <div className="progress-bar mb-3">
                      <p className=" theme-text-2 text-start mb-2">Prototyping</p>
                      <div className="bar-container theme-background-3 theme-border-1 w-100">
                        <div className="bar-line maincolor-background-1" style={progressStyle.progress3}></div>
                      </div>
                    </div>
                    <div className="progress-bar mb-3">
                      <p className=" theme-text-2 text-start mb-2">Prototyping</p>
                      <div className="bar-container theme-background-3 theme-border-1 w-100">
                        <div className="bar-line maincolor-background-1" style={progressStyle.progress3}></div>
                      </div>
                    </div>
                    <div className="progress-bar mb-3">
                      <p className=" theme-text-2 text-start mb-2">Prototyping</p>
                      <div className="bar-container theme-background-3 theme-border-1 w-100">
                        <div className="bar-line maincolor-background-1" style={progressStyle.progress3}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <div className="box mb-2">
                <div className='row gap-4 gap-lg-0'>
                  <div className='col-lg-6 col-12'>
                    <h2 className='title  theme-text-1'>
                      Education
                    </h2>
                    <div className='cardd mb-4'>
                      <h5 className='maincolor-text-2'>University of Dhaka</h5>
                      <h6 className='theme-text-2'>2019 - 2021</h6>
                      <p className='sectionLittleP theme-text-2'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed thisnquia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt</p>
                    </div>
                    <div className='cardd mb-4'>
                      <h5 className='maincolor-text-2'>University of Dhaka</h5>
                      <h6 className='theme-text-2'>2019 - 2021</h6>
                      <p className='sectionLittleP theme-text-2'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed thisnquia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt</p>
                    </div>
                    <div className='cardd mb-4'>
                      <h5 className='maincolor-text-2'>University of Dhaka</h5>
                      <h6 className='theme-text-2'>2019 - 2021</h6>
                      <p className='sectionLittleP theme-text-2'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed thisnquia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt</p>
                    </div>
                  </div>


                  <div className='col-lg-6 col-12'>
                    <h2 className='title  theme-text-1'>
                      Experience
                    </h2>
                    <div className='cardd mb-4'>
                      <h5 className='maincolor-text-2'>University of Dhaka</h5>
                      <h6 className='theme-text-2'>2019 - 2021</h6>
                      <p className='sectionLittleP theme-text-2'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed thisnquia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt</p>
                    </div>
                    <div className='cardd mb-4'>
                      <h5 className='maincolor-text-2'>University of Dhaka</h5>
                      <h6 className='theme-text-2'>2019 - 2021</h6>
                      <p className='sectionLittleP theme-text-2'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed thisnquia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt</p>
                    </div>
                    <div className='cardd mb-4'>
                      <h5 className='maincolor-text-2'>University of Dhaka</h5>
                      <h6 className='theme-text-2'>2019 - 2021</h6>
                      <p className='sectionLittleP theme-text-2'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed thisnquia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className='testimonial position-relative mt-3 mb-3 overflow-hidden'>
              {/* <div className='back-layer'></div> */}
              {/* <div className='moving-layer'></div> */}
              {/* <div className='back-circle d-sm-block d-none'></div> */}
              <h3 className='title theme-text-1'>Testimonial</h3>
              <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                initialSlide={1}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className='cardd p-3 flex-column d-flex'>
                    <img src={testimonial1} className='object-fit-cover w-100 rounded-circle'loading='lazy' alt='testimonal imge' />
                    <h6 className='fw-bold name theme-text-1 '>Salma SS</h6>
                    <p className='theme-text-2 '>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed thisnquia consequuntur.</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='cardd p-3 flex-column d-flex'>
                    <img src={testimonial2} className='object-fit-cover w-100 rounded-circle'loading='lazy' alt='testimonal imge' />
                    <h6 className='fw-bold name theme-text-1'>Salma SS</h6>
                    <p className='theme-text-2'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed thisnquia consequuntur.</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='cardd p-3 flex-column d-flex'>
                    <img src={testimonial3} className='object-fit-cover w-100 rounded-circle'loading='lazy' alt='testimonal imge' />
                    <h6 className='fw-bold name theme-text-1'>Salma SS</h6>
                    <p className='theme-text-2'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed thisnquia consequuntur.</p>
                  </div>
                </SwiperSlide>

              </Swiper>
            </section>



          </div>
          <div className="col-md-3 col-12 order-md-1 order-0 p-0 sticky-col d-flex justify-content-center" data-aos="fade">
            {/* <div className='backlayer-1'></div> */}
            <div className=" img-box">
              <img className="" src={user} loading='lazy' alt="user imge" />
            </div>
          </div>

        </div>
      </div>
    </div >
  )
}

export default About


