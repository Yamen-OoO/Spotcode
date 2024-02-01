import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

import project1 from '../imgs/imagecompressor/projects1-min.jpg'
import project2 from '../imgs/imagecompressor/projects2-min.jpg'
import project3 from '../imgs/imagecompressor/projects3-min.jpg'
import project4 from '../imgs/imagecompressor/projects4-min.jpg'
import project5 from '../imgs/imagecompressor/projects5-min.jpg'
import project6 from '../imgs/imagecompressor/projects6-min.jpg'
import testimonial1 from '../imgs/imagecompressor/testimonal-min.jpg'
import testimonial2 from '../imgs/imagecompressor/testimonal2-min.jpg'
import testimonial3 from '../imgs/imagecompressor/testimonal3-min.jpg'


import '../styles/portfolio.css'
let styleDialog = {
  maxWidth: '800px'
}





function Portfolio() {
  return (
    <>
      <section className='portfolio py-5 px-2 position-relative theme-background-2'>
        <div className='back-layer'></div>
        <div className='moving-layer'></div>
        <div className='back-circle'></div>
        <div className='container'>
          <div className='introSectionText theme-text-2 my-5 text-center'>
            <h2 className='fw-bold maincolor-text-1 mb-1'>My Projects</h2>
            <p>Bringing your vision to life with precision
              and passion</p>
            <div className='line'>
              <div className='circle'></div>
            </div>
          </div>


          <div className='rows flex-wrap flex-sm-nowrap d-flex justify-content-center gap-5 mb-5'>
            <div data-name='project name' className="position-relative project" data-bs-toggle="modal" data-bs-target="#modal1" data-aos="fade" data-aos-delay='100'>
              <img loading="lazy" src={project1} className="w-100 object-fit-cover h-100 " alt="project imge" />
            </div>

            <div data-name='project name' className="position-relative project mt-md-4 mt-0" data-bs-toggle="modal" data-bs-target="#modal2" data-aos="fade" data-aos-delay='200'>
              <img loading="lazy" src={project2} className="w-100 object-fit-cover h-100 " alt="project imge" />
            </div>

            <div data-name='project name' className="position-relative project" data-bs-toggle="modal" data-bs-target="#modal3" data-aos="fade" data-aos-delay='300'>
              <img loading="lazy" src={project3} className="w-100 object-fit-cover h-100 " alt="project imge" />
            </div>
          </div>

          <div className='rows flex-wrap flex-sm-nowrap d-flex justify-content-center gap-5'>
            <div data-name='project name' className="position-relative project" data-bs-toggle="modal" data-bs-target="#modal4" data-aos="fade" data-aos-delay='400'>
              <img loading="lazy" src={project4} className="w-100 object-fit-cover h-100 " alt="project imge" />
            </div>

            <div data-name='project name' className="position-relative project mt-md-4 mt-0" data-bs-toggle="modal" data-bs-target="#modal5" data-aos="fade" data-aos-delay='500'>
              <img loading="lazy" src={project5} className="w-100 object-fit-cover h-100 " alt="project imge" />
            </div>

            <div data-name='project name' className="position-relative project" data-bs-toggle="modal" data-bs-target="#modal6" data-aos="fade" data-aos-delay='600'>
              <img loading="lazy" src={project6} className="w-100 object-fit-cover h-100 " alt="project imge" />
            </div>
          </div>
        </div>






        <div className="modal fade p-3" id="modal1" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
          aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog w-100" style={styleDialog}>
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <img src={project1} height="300" className="w-100 object-fit-cover" alt="project imge" />
                <div className="project-description mt-3">
                  <h1 className="project-name maincolor-text-1">The Project Name </h1>
                  <h6 className="my-3 project-date ">25 August, 2023</h6>
                  <p className="theme-text-3 sectionLittleP ">Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Qui vel fugit iste enim. Nobis, illum. Cum molestiae minima
                    mollitia animi est blanditiis, corrupti asperiores, ratione possimus nisi explicabo
                    odit error ducimus eligendi. Veritatis, dicta minima possimus facere porro nam
                    debitis?</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="modal fade p-3" id="modal2" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
          aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog w-100" style={styleDialog}>
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <img src={project2} height="300" className="w-100 object-fit-cover" alt="project imge" />
                <div className="project-description mt-3">
                  <h1 className="project-name maincolor-text-1">The Project Name </h1>
                  <h6 className="my-3 project-date ">25 August, 2023</h6>
                  <p className="theme-text-3 sectionLittleP ">Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Qui vel fugit iste enim. Nobis, illum. Cum molestiae minima
                    mollitia animi est blanditiis, corrupti asperiores, ratione possimus nisi explicabo
                    odit error ducimus eligendi. Veritatis, dicta minima possimus facere porro nam
                    debitis?</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="modal fade p-3" id="modal3" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
          aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog w-100" style={styleDialog}>
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <img src={project3} height="300" className="w-100 object-fit-cover" alt="project imge" />
                <div className="project-description mt-3">
                  <h1 className="project-name maincolor-text-1">The Project Name </h1>
                  <h6 className="my-3 project-date ">25 August, 2023</h6>
                  <p className="theme-text-3 sectionLittleP ">Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Qui vel fugit iste enim. Nobis, illum. Cum molestiae minima
                    mollitia animi est blanditiis, corrupti asperiores, ratione possimus nisi explicabo
                    odit error ducimus eligendi. Veritatis, dicta minima possimus facere porro nam
                    debitis?</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="modal fade p-3" id="modal4" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
          aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog w-100" style={styleDialog}>
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <img src={project4} height="300" className="w-100 object-fit-cover" alt="project imge" />
                <div className="project-description mt-3">
                  <h1 className="project-name maincolor-text-1">The Project Name </h1>
                  <h6 className="my-3 project-date ">25 August, 2023</h6>
                  <p className="theme-text-3 sectionLittleP ">Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Qui vel fugit iste enim. Nobis, illum. Cum molestiae minima
                    mollitia animi est blanditiis, corrupti asperiores, ratione possimus nisi explicabo
                    odit error ducimus eligendi. Veritatis, dicta minima possimus facere porro nam
                    debitis?</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="modal fade p-3" id="modal5" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
          aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog w-100" style={styleDialog}>
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <img src={project5} height="300" className="w-100 object-fit-cover" alt="project imge" />
                <div className="project-description mt-3">
                  <h1 className="project-name maincolor-text-1">The Project Name </h1>
                  <h6 className="my-3 project-date ">25 August, 2023</h6>
                  <p className="theme-text-3 sectionLittleP ">Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Qui vel fugit iste enim. Nobis, illum. Cum molestiae minima
                    mollitia animi est blanditiis, corrupti asperiores, ratione possimus nisi explicabo
                    odit error ducimus eligendi. Veritatis, dicta minima possimus facere porro nam
                    debitis?</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="modal fade p-3" id="modal6" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
          aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog w-100" style={styleDialog}>
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <img src={project6} height="300" className="w-100 object-fit-cover" alt="project imge" />
                <div className="project-description mt-3">
                  <h1 className="project-name maincolor-text-1">The Project Name </h1>
                  <h6 className="my-3 project-date ">25 August, 2023</h6>
                  <p className="theme-text-3 sectionLittleP ">Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Qui vel fugit iste enim. Nobis, illum. Cum molestiae minima
                    mollitia animi est blanditiis, corrupti asperiores, ratione possimus nisi explicabo
                    odit error ducimus eligendi. Veritatis, dicta minima possimus facere porro nam
                    debitis?</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      <section className='testimonial py-5 px-2 position-relative theme-background-2 overflow-hidden'>
        <div className='back-layer'></div>
        <div className='moving-layer'></div>
        <div className='back-circle d-sm-block d-none'></div>
        <div className='container-fluid'>
          <div className='introSectionText my-5 text-center'>
            <h2 className='fw-bold maincolor-text-1 mb-1'>What Pepole Say</h2>
            <p className='theme-text-2'>Bringing your vision to life with precision
              and passion</p>
            <div className='line'>
              <div className='circle'></div>
            </div>
          </div>
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
                <img src={testimonial1} className='object-fit-cover w-100 rounded-circle' alt='testimonial imge' />
                <h6 className='fw-bold name theme-text-1 '>Huda SS</h6>
                <p className='theme-text-2'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed thisnquia consequuntur.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='cardd p-3 flex-column d-flex'>
                <img src={testimonial2} className='object-fit-cover w-100 rounded-circle' alt='testimonial imge' />
                <h6 className='fw-bold name theme-text-1'>Huda SS</h6>
                <p className='theme-text-2'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed thisnquia consequuntur.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='cardd p-3 flex-column d-flex'>
                <img src={testimonial3} className='object-fit-cover w-100 rounded-circle' alt='testimonial imge' />
                <h6 className='fw-bold name theme-text-1'>Huda SS</h6>
                <p className='theme-text-2'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed thisnquia consequuntur.</p>
              </div>
            </SwiperSlide>

          </Swiper>
        </div>
      </section>
    </>

  )
}

export default Portfolio