import React from 'react'

import user from '../imgs/imagecompressor/user.jpg'

import project1 from '../imgs/imagecompressor/projects1-min.jpg'
import project2 from '../imgs/imagecompressor/projects2-min.jpg'
import project3 from '../imgs/imagecompressor/projects3-min.jpg'
import project4 from '../imgs/imagecompressor/projects4-min.jpg'
import project5 from '../imgs/imagecompressor/projects5-min.jpg'
import project6 from '../imgs/imagecompressor/projects6-min.jpg'


import '../styles/portfolio.css'
let styleDialog = {
  maxWidth: '800px'
}





function Portfolio() {
  return (
    <div className="portfolio theme-background-2 min-h-100 position-relative" id="contact" >
      <div className='back-layer-1'></div>
      <div className='back-layer0'></div>
      <div className='back-layer1'></div>
      <div className='back-layer2 '></div>
      <div className='back-layer3 '></div>
      <div className='back-layer4 '></div>
      <div className="container">

        <div className="row d-flex gap-lg-0 gap-5 justify-content-lg-between justify-content-center position-relative">

          <div className="col-11  col-md-8 order-md-0 order-1 col-radius p-3 " data-aos="fade" data-aos-delay='500'>
            <h2 className='title theme-text-1 '>
              My Projects
            </h2>

            <div className='rows flex-wrap flex-sm-nowrap d-flex justify-content-center gap-5 mb-5'>
              <div data-name='hello' className="position-relative project" data-bs-toggle="modal" data-bs-target="#modal1" data-aos="fade" data-aos-delay='100'>
                <img src={project1} className="w-100 object-fit-cover h-100 " alt="project imge" loading="lazy" />
              </div>

              <div data-name='hello' className="position-relative project " data-bs-toggle="modal" data-bs-target="#modal2" data-aos="fade" data-aos-delay='200'>
                <img src={project2} className="w-100 object-fit-cover h-100 " alt="project imge" loading="lazy" />
              </div>

            </div>

            <div className='rows flex-wrap flex-sm-nowrap d-flex justify-content-center gap-5 mb-5'>
              <div data-name='hello' className="position-relative project" data-bs-toggle="modal" data-bs-target="#modal3" data-aos="fade" data-aos-delay='300'>
                <img  src={project3} className="w-100 object-fit-cover h-100 " alt="project imge" loading="lazy" />
              </div>
              <div data-name='hello' className="position-relative project" data-bs-toggle="modal" data-bs-target="#modal4" data-aos="fade" data-aos-delay='400'>
                <img src={project4} className="w-100 object-fit-cover h-100 " alt="project imge" loading="lazy" />
              </div>


            </div>

            <div className='rows flex-wrap flex-sm-nowrap d-flex justify-content-center gap-5 mb-5'>
              <div data-name='hello' className="position-relative project  " data-bs-toggle="modal" data-bs-target="#modal5" data-aos="fade" data-aos-delay='500'>
                <img src={project5} className="w-100 object-fit-cover h-100 " alt="project imge" loading="lazy" />
              </div>

              <div data-name='hello' className="position-relative project" data-bs-toggle="modal" data-bs-target="#modal6" data-aos="fade" data-aos-delay='600'>
                <img src={project6} className="w-100 object-fit-cover h-100 " alt="project imge" loading="lazy" />
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
                  <img src={project1} height="300" className="w-100 object-fit-cover" alt="project imge" loading="lazy" />
                  <div className="project-description mt-3">
                    <h1 className="project-name maincolor-text-1">The Project Name </h1>
                    <h6 className="my-3 project-date ">25 August, 2023</h6>
                    <p className="theme-text-3 sectionLittleP className=">Lorem ipsum dolor sit amet consectetur
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
                  <img src={project1} height="300" className="w-100 object-fit-cover" alt="project imge" loading="lazy" />
                  <div className="project-description mt-3">
                    <h1 className="project-name maincolor-text-1">The Project Name </h1>
                    <h6 className="my-3 project-date ">25 August, 2023</h6>
                    <p className="theme-text-3 sectionLittleP className=">Lorem ipsum dolor sit amet consectetur
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
                  <img src={project1} height="300" className="w-100 object-fit-cover" alt="project imge" loading="lazy" />
                  <div className="project-description mt-3">
                    <h1 className="project-name maincolor-text-1">The Project Name </h1>
                    <h6 className="my-3 project-date ">25 August, 2023</h6>
                    <p className="theme-text-3 sectionLittleP className=">Lorem ipsum dolor sit amet consectetur
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
                  <img src={project1} height="300" className="w-100 object-fit-cover" alt="project imge" loading="lazy" />
                  <div className="project-description mt-3">
                    <h1 className="project-name maincolor-text-1">The Project Name </h1>
                    <h6 className="my-3 project-date ">25 August, 2023</h6>
                    <p className="theme-text-3 sectionLittleP className=">Lorem ipsum dolor sit amet consectetur
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
                  <img src={project1} height="300" className="w-100 object-fit-cover" alt="project imge" loading="lazy" />
                  <div className="project-description mt-3">
                    <h1 className="project-name maincolor-text-1">The Project Name </h1>
                    <h6 className="my-3 project-date ">25 August, 2023</h6>
                    <p className="theme-text-3 sectionLittleP className=">Lorem ipsum dolor sit amet consectetur
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
                  <img src={project1} height="300" className="w-100 object-fit-cover" alt="project imge" loading="lazy" />
                  <div className="project-description mt-3">
                    <h1 className="project-name maincolor-text-1">The Project Name </h1>
                    <h6 className="my-3 project-date ">25 August, 2023</h6>
                    <p className="theme-text-3 sectionLittleP className=">Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Qui vel fugit iste enim. Nobis, illum. Cum molestiae minima
                      mollitia animi est blanditiis, corrupti asperiores, ratione possimus nisi explicabo
                      odit error ducimus eligendi. Veritatis, dicta minima possimus facere porro nam
                      debitis?</p>
                  </div>
                </div>

              </div>
            </div>
          </div>






          <div className="col-md-3 col-12 order-md-1 order-0 p-0 sticky-col d-flex justify-content-center" data-aos="fade">
            <div className=" img-box">
              <img className="" src={user} alt="project imge" loading="lazy" />
            </div>
          </div>

        </div>
      </div>
    </div >

  )
}

export default Portfolio