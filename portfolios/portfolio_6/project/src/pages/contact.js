import React from 'react'
import user from '../imgs/imagecompressor/user.jpg'

import '../styles/contact.css'

function Contact() {
  return (
    <div className='contact theme-background-2 min-h-100  position-relative'>
            <div className='back-layer-1'></div>
      <div className='back-layer0'></div>
      <div className='back-layer1'></div>
      <div className='back-layer2 '></div>
      <div className='back-layer3 '></div>
      <div className='back-layer4 '></div>
      <div className="container">
        <div className="row d-flex gap-lg-0 gap-5 justify-content-lg-between justify-content-center position-relative">
          <div className="col-11  col-md-8 order-md-0 order-1  p-3 " data-aos="fade" data-aos-delay='500'>

            <div className='box mb-5 d-flex justify-content-between gap-3 flex-lg-row flex-column'>
              <div className='cardd theme-background-1 text-center px-5 py-3'>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className=" mb-3 bi bi-map-fill" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.598-.49L10.5.99 5.598.01a.5.5 0 0 0-.196 0l-5 1A.5.5 0 0 0 0 1.5v14a.5.5 0 0 0 .598.49l4.902-.98 4.902.98a.502.502 0 0 0 .196 0l5-1A.5.5 0 0 0 16 14.5zM5 14.09V1.11l.5-.1.5.1v12.98l-.402-.08a.498.498 0 0 0-.196 0zm5 .8V1.91l.402.08a.5.5 0 0 0 .196 0L11 1.91v12.98l-.5.1z" />
                </svg>
                <p className='m-0 theme-text-1 '>Syria , Damascus</p>
              </div>
              <div className='cardd theme-background-1 text-center px-5 py-3'>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className=" mb-3 bi bi-envelope-fill" viewBox="0 0 16 16">
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                </svg>
                <p className='m-0 theme-text-1 '>Huad.d22@....</p>
              </div>
              <div className='cardd theme-background-1 text-center px-5 py-3'>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className=" mb-3 bi bi-telephone-fill" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                </svg>
                <p className='m-0 theme-text-1 '>(+963) 9332</p>
              </div>
            </div>

            <div className='box mb-5'>
              <h2 className='title theme-text-1'>
                Let's Talk
              </h2>
              <form action="">
                <input
                  className="w-100 theme-background-1 theme-shadow-1  d-block py-3 ps-3 mb-4"
                  type="text" placeholder="what is your name" />
                <input
                  className="w-100 theme-background-1 theme-shadow-1  d-block py-3 ps-3 mb-4"
                  type="text" placeholder="what is your email" />
                <textarea name=""
                  className="w-100 theme-background-1 theme-shadow-1 p-3 pb-0 mb-4"
                  placeholder="how can i help you" id="" cols="30" rows="10"></textarea>
                <button className="button1">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-12 order-lg-1 order-0 p-0 sticky-col d-flex justify-content-center" data-aos="fade">
            <div className=" img-box">
              <img className="" src={user} loading='lazy' alt="user imge" />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact