import React from 'react'
import '../styles/about.css'
import bioGraphyImgae from '../imgs/imagecompressor/about.jpg'
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
    width: '70%'
  },
  progress5: {
    width: '70%'
  },
  progress6: {
    width: '70%'
  },
  progress7: {
    width: '70%'
  },
  progress8: {
    width: '70%'
  },

}
window.addEventListener('hashchange', function () {
  // Scroll to the top of the page
  window.scrollTo(0, 0);
});

function About() {
  return (
    <section className="about theme-background-2">
      <div className='biograpy py-5 mb-5 position-relative  px-2 d-flex align-items-center'>
        <div className='back-circle2 d-none d-sm-block'></div>
        <div className="container  position-relative">
          <div className='introSectionText my-5 text-center'>
            <h2 className='fw-bold maincolor-text-1 mb-1'>About Me</h2>
            <p className='theme-text-2'>Bringing your vision to life with precision
              and passion</p>
            <div className='line'>
              <div className='circle'></div>
            </div>
          </div>
          <div className="row justify-content-center gap-md-0 gap-5">
            <div className="col-10 col-md-5 d-lg-flex align-items-center justify-content-center" data-aos="fade" data-aos-delay='500'>
              <div className="overflow-hidden img-box">
                <img className="w-100 object-fit-cover h-100" src={bioGraphyImgae} alt="hero img" />
              </div>
            </div>
            <div className="col-10 col-md-7" data-aos="fade" data-aos-delay='500'>
              <div className="box">
                <h3 className="theme-text-1">Hi, I'm Huda Sadak</h3>
                <p className="theme-text-3">I'm a designer & developer with a passion for web design. I enjoy
                  developing simple, clean and slick websites that provide real value to the end user.
                  Thousands of clients have procured exceptional results while working with me. Delivering
                  work within time and budget which meets client’s requirements is our moto.</p>
                <div className="row my-4 mb-5">
                  <div className="col-sm-6 col-12" >
                    <div className="mt-2 mb-2">
                      <span className="me-3 maincolor-text-3">First Name :</span> <span
                        className="theme-text-2">Ahmed</span>
                    </div>
                    <div className="mb-2">
                      <span className="me-3 maincolor-text-3">Last Name :</span>
                      <span className="theme-text-2">Sadak</span>
                    </div>
                    <div className="mb-2">
                      <span className="me-3 maincolor-text-3">Age :</span> <span className="theme-text-2">24</span>
                    </div>
                    <div className="mt-2 mb-2">
                      <span className="me-3 maincolor-text-3">From :</span> <span
                        className="theme-text-2">Syria , Damascus</span>
                    </div>
                  </div>
                  <div className="col-sm-6 col-12" >
                    <div className="mb-2">
                      <span className="me-3 maincolor-text-3">Email :</span>
                      <span className="theme-text-2">Huda11@gmail.com</span>
                    </div>
                    <div className="mb-2">
                      <span className="me-3 maincolor-text-3">Phone :</span> <span className="theme-text-2">+963
                        933...</span>
                    </div>
                    <div className="mb-2">
                      <span className="me-3 maincolor-text-3">Residence :</span> <span className="theme-text-2">Al
                        Mazzah</span>
                    </div>
                    <div className="mt-2 mb-2">
                      <span className="me-3 maincolor-text-3">Available :</span> <span
                        className="theme-text-2">Yes</span>
                    </div>
                  </div>
                </div>
                <a className="button2 mx-md-0 mx-auto rounded-0 text-decoration-none" type="button">
                  <p className="m-0 z-1">Download CV</p>
                  <span className="first"></span>
                  <span className="second"></span>
                  <span className="third"></span>
                  <span className="fourth"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='education position-relative mb-5 '>
        <div className=' d-sm-block d-none  back-layer'></div>
        <div className=' d-sm-block d-none  back-layer-border'></div>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 col-12 ps-4 ps-md-0' data-aos="fade" data-aos-delay='500'>
              <h3 className='mb-5 maincolor-text-1'>Education</h3>
              <div className='box'>
                <div className='cardd mb-4'>
                  <h4 className='theme-text-1'>University of Dhaka</h4>
                  <h6 className='theme-text-2'>2019 - 2021</h6>
                  <p className='theme-text-2'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed thisnquia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt</p>
                </div>
                <div className='cardd mb-4'>
                  <h4 className='theme-text-1'>University of Dhaka</h4>
                  <h6 className='theme-text-2'>2019 - 2021</h6>
                  <p className='theme-text-2'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed thisnquia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt</p>
                </div>
                <div className='cardd mb-4'>
                  <h4 className='theme-text-1'>University of Dhaka</h4>
                  <h6 className='theme-text-2'>2019 - 2021</h6>
                  <p className='theme-text-2'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed thisnquia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt</p>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-12 ps-4   ps-md-0' data-aos="fade" data-aos-delay='500'>
              <h3 className='mb-5 maincolor-text-1'>Education</h3>
              <div className='box'>
                <div className='cardd mb-4'>
                  <h4 className='theme-text-1'>University of Dhaka</h4>
                  <h6 className='theme-text-2'>2019 - 2021</h6>
                  <p className='theme-text-2'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed thisnquia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt</p>
                </div>
                <div className='cardd mb-4'>
                  <h4 className='theme-text-1'>University of Dhaka</h4>
                  <h6 className='theme-text-2'>2019 - 2021</h6>
                  <p className='theme-text-2'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed thisnquia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt</p>
                </div>
                <div className='cardd mb-4'>
                  <h4 className='theme-text-1'>University of Dhaka</h4>
                  <h6 className='theme-text-2'>2019 - 2021</h6>
                  <p className='theme-text-2'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed thisnquia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='skills py-4 position-relative'>
        <div className='back-layer'></div>
        <div className='back-layer-border'></div>
        <div className='container'>
          <h3 className="theme-text-1">My Skills</h3>
          <div className="row gap-md-0 gap-3 mt-3">
            <div className="col-12 col-md-6 ps-3" data-aos="fade" data-aos-delay='500'>
              <div className="box d-flex flex-column gap-3 p-5 py-4">
                <div className="progress-bar mb-3">
                  <p className="title theme-text-1 text-start mb-2">Figma</p>
                  <div className="bar-container theme-background-3 theme-border-1 w-100">
                    <div className="bar-line maincolor-background-1" style={progressStyle.progress3}></div>
                  </div>
                </div>
                <div className="progress-bar mb-3">
                  <p className="title theme-text-1 text-start mb-2">Adobe Xd</p>
                  <div className="bar-container theme-background-3 theme-border-1 w-100">
                    <div className="bar-line maincolor-background-1" style={progressStyle.progress3}></div>
                  </div>
                </div>
                <div className="progress-bar mb-3">
                  <p className="title theme-text-1 text-start mb-2">Adobe Illustrator</p>
                  <div className="bar-container theme-background-3 theme-border-1 w-100">
                    <div className="bar-line maincolor-background-1" style={progressStyle.progress3}></div>
                  </div>
                </div>
                <div className="progress-bar mb-3">
                  <p className="title theme-text-1 text-start mb-2">Prototyping</p>
                  <div className="bar-container theme-background-3 theme-border-1 w-100">
                    <div className="bar-line maincolor-background-1" style={progressStyle.progress3}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 ps-3" data-aos="fade" data-aos-delay='500'>
              <div className="box d-flex flex-column gap-3 p-5 py-4">
                <div className="progress-bar mb-3">
                  <p className="title theme-text-1 text-start mb-2">Sketch</p>
                  <div className="bar-container theme-background-3 theme-border-1 w-100">
                    <div className="bar-line maincolor-background-1" style={progressStyle.progress3}></div>
                  </div>
                </div>
                <div className="progress-bar mb-3">
                  <p className="title theme-text-1 text-start mb-2">Problem-Solving</p>
                  <div className="bar-container theme-background-3 theme-border-1 w-100">
                    <div className="bar-line maincolor-background-1" style={progressStyle.progress3}></div>
                  </div>
                </div>
                <div className="progress-bar mb-3">
                  <p className="title theme-text-1 text-start mb-2">Communication</p>
                  <div className="bar-container theme-background-3 theme-border-1 w-100">
                    <div className="bar-line maincolor-background-1" style={progressStyle.progress3}></div>
                  </div>
                </div>
                <div className="progress-bar mb-3">
                  <p className="title theme-text-1 text-start mb-2">Collaboration</p>
                  <div className="bar-container theme-background-3 theme-border-1 w-100">
                    <div className="bar-line maincolor-background-1" style={progressStyle.progress3}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default About