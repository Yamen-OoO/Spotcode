import React from 'react'

import user from '../imgs/imagecompressor/user.jpg'

import new1 from '../imgs/imagecompressor/new1-min.jpg'
import new2 from '../imgs/imagecompressor/new2-min.jpg'
import new3 from '../imgs/imagecompressor/new3-min.jpg'
import new4 from '../imgs/imagecompressor/new4-min.jpg'


import '../styles/news.css'
let styleDialog = {
  maxWidth: '800px'
}





function News() {
  return (
    <div className="news theme-background-2 min-h-100 position-relative" id="contact" >
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
              My Upadtes
            </h2>

            <div className='rows flex-md-nowrap flex-wrap d-flex gap-4 justify-content-around mb-4 mb-sm-5'>
              <div data-bs-toggle="modal" data-aos="fade" data-aos-delay='100'
                className="position-relative new  d-flex flex-column theme-background-2 pb-2"
                data-bs-target="#modal7">
                <img src={new1} className="w-100  object-fit-cover" alt="update imge" loading='lazy' />
                <div className="description-box p-3 pt-3">
                  <h5 className="theme-text-1">Lorem, ipsum dolor.</h5>
                  <p className="sectionLittleP theme-text-3">Lorem ipsum dolor sit amet consectetur adipisicing.
                  </p>
                  <button>See More</button>

                </div>
              </div>
              <div data-bs-toggle="modal" data-aos="fade" data-aos-delay='200'
                className="position-relative new  d-flex flex-column theme-background-2 pb-2"
                data-bs-target="#modal8">

                <img src={new2} className="w-100  object-fit-cover" alt="update imge" loading='lazy' />
                <div className="description-box p-3 pt-3">
                  <h5 className="theme-text-1">Lorem, ipsum dolor.</h5>
                  <p className="sectionLittleP theme-text-3">Lorem ipsum dolor sit amet consectetur adipisicing.
                  </p>
                  <button>See More</button>

                </div>
              </div>
            </div>
            <div className='rows flex-md-nowrap flex-wrap d-flex gap-4 justify-content-around mb-4 mb-sm-5'>
              <div data-bs-toggle="modal" data-aos="fade" data-aos-delay='100'
                className="position-relative new  d-flex flex-column theme-background-2 pb-2"
                data-bs-target="#modal9">
                <img src={new3} className="w-100  object-fit-cover" alt="update imge" loading='lazy' />
                <div className="description-box p-3 pt-3">
                  <h5 className="theme-text-1">Lorem, ipsum dolor.</h5>
                  <p className="sectionLittleP theme-text-3">Lorem ipsum dolor sit amet consectetur adipisicing.
                  </p>
                  <button>See More</button>

                </div>
              </div>
              <div data-bs-toggle="modal" data-aos="fade" data-aos-delay='200'
                className="position-relative new  d-flex flex-column theme-background-2 pb-2"
                data-bs-target="#modal10">

                <img src={new4} className="w-100  object-fit-cover" alt="update imge" loading='lazy' />
                <div className="description-box p-3 pt-3">
                  <h5 className="theme-text-1">Lorem, ipsum dolor.</h5>
                  <p className="sectionLittleP theme-text-3">Lorem ipsum dolor sit amet consectetur adipisicing.
                  </p>
                  <button>See More</button>

                </div>
              </div>

            </div>
            <div className="modal fade p-3" id="modal7" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
              aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div className="modal-dialog w-100" style={styleDialog}>
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <img src={new1} height="300" className="w-100 object-fit-cover" alt="update imge" loading='lazy' />
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

            <div className="modal fade p-3" id="modal8" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
              aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div className="modal-dialog w-100" style={styleDialog}>
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <img src={new2} height="300" className="w-100 object-fit-cover" alt="update imge" loading='lazy' />
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

            <div className="modal fade p-3" id="modal9" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
              aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div className="modal-dialog w-100" style={styleDialog}>
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <img src={new3} height="300" className="w-100 object-fit-cover" alt="update imge" loading='lazy' />
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

            <div className="modal fade p-3" id="modal10" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
              aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div className="modal-dialog w-100" style={styleDialog}>
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <img src={new4} height="300" className="w-100 object-fit-cover" alt="update imge" loading='lazy' />
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
          </div>
          <div className="col-md-3 col-12 order-md-1 order-0 p-0 sticky-col d-flex justify-content-center" data-aos="fade">
            <div className=" img-box">
              <img className="" src={user} alt="user imge" loading='lazy' />
            </div>
          </div>
        </div >
      </div >
    </div>
  )
}

export default News