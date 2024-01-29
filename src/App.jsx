import { useState, React, Fragment, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react'



import MECA from './assets/MECA-banner.png'
import COURSERA from './assets/Coursera_logo.png'
import CODEACADEMY from './assets/Codeacademy-banner.png'
import CERTIPORT from './assets/certiport-seeklogo.png'
import GENERATIONTHAI from './assets/Generation_Thailand_logo.webp'
import CertiportC1 from './assets/Certiport/Cert7232215333-1.png'
import CertiportC2 from './assets/Certiport/Cert19822258686-1.png'
import CertiportC3 from './assets/Certiport/Cert52122327702-1.png'
import CertiportC4 from './assets/Certiport/Cert1362232214-1.png'
import MecaC1 from './assets/Meca/CertificationMECA-1.png'
import CodeacamedyC1 from './assets/Codeacademy/29_TheerawatBang_s profile _ Codecademy-1.png'
import CodeacamedyC2 from './assets/Codeacademy/29_TheerawatBang_s profile _ CodecademyTS-1.png'
import CourseraC1 from './assets/Coursera/Coursera 2TBF9QVDCN5F-1.png'
// import CourseraC2 from './assets/Coursera/Coursera A966HQAKNNMZ-1.png'
import CourseraC3 from './assets/Coursera/Coursera M99HJ2JE8JMQ-1.png'
import CourseraC4 from './assets/Coursera/Coursera URWDDCN7NRSY-1.png'
import CourseraC5 from './assets/Coursera/Coursera XP5SJVAPFXGY-1.png'
import CourseraC6 from './assets/Coursera/Coursera ZTR5R2GBEF5V-1.png'
import GenerationC1 from './assets/Generation/GennarationBlur.png'
import AMAZONWEBSERVICE from './assets/amazon-web-services-logo.png'
import AmazonC1 from './assets/AWS/AWSBadged.png'

import ProfilePic from './assets/Profile/ProfilePic.jpg'

const AmazonwebserviceDataChild = [
  { src: AmazonC1, alt: 'c1' }
]

const GenerationDataChild = [
  { src: GenerationC1, alt: 'c1' }
];

const CertiportDataChild = [
  { src: CertiportC1, alt: 'c1' },
  { src: CertiportC2, alt: 'c2' },
  { src: CertiportC3, alt: 'c3' },
  { src: CertiportC4, alt: 'c4' },
];

const MecaDataChild = [
  { src: MecaC1, alt: 'MECA' }
];

const MeCodeacademyDataChild = [
  { src: CodeacamedyC1, alt: 'Codeacademy1' },
  { src: CodeacamedyC2, alt: 'Codeacademy2' }
];

const CourseraDataChild = [
  { src: CourseraC1, alt: 'CourseraC1' },
  // { src: CourseraC2, alt: 'CourseraC2' },
  { src: CourseraC3, alt: 'CourseraC3' },
  { src: CourseraC4, alt: 'CourseraC4' },
  { src: CourseraC5, alt: 'CourseraC5' },
  { src: CourseraC6, alt: 'CourseraC6' },
];

const certificateDataBanner = [
  { src: AMAZONWEBSERVICE, alt: 'Amazon Web Service', childData: AmazonwebserviceDataChild },
  { src: GENERATIONTHAI, alt: 'Generation thailand', childData: GenerationDataChild },

  { src: COURSERA, alt: 'Coursera Logo', childData: CourseraDataChild },
  { src: CODEACADEMY, alt: 'Codecademy Banner', childData: MeCodeacademyDataChild },
  { src: MECA, alt: 'MECA Banner', childData: MecaDataChild },
  { src: CERTIPORT, alt: 'Certipost Seeklogo', childData: CertiportDataChild },
];



function App() {
  const [selectedBannerIndex, setSelectedBannerIndex] = useState(null);

  const handleCertificateImageClick = (index) => {
    console.log("Selected Banner Index:", index);
    setSelectedBannerIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const [open, setOpen] = useState(false)

  const cancelButtonRef = useRef(null)
  
  
  const handleChildCertificateImageClick = (index) => {
    if (
      selectedBannerIndex !== null &&
      selectedBannerIndex >= 0 &&
      selectedBannerIndex < certificateDataBanner.length
    ) {
      const selectedChildData = certificateDataBanner[selectedBannerIndex].childData[index];
      // Set the selected child data to use it in the dialog
      setDialogChildData(selectedChildData);
      setOpen(true);
    }
  };


  const [dialogChildData, setDialogChildData] = useState(null);

  return (
    <>

<div className="dialogImage">
  <Transition.Root show={open} as={Fragment}>
    <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </Transition.Child>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
          <Dialog.Panel className="relative transform overflow-hidden shadow-xl transition-all sm:my-8 md:max-w-[700px] lg:max-w-[800px] xl:max-w-[850px]">
            <div className="bg-white">
              <div className="sm:flex sm:justify-center">
                {dialogChildData && (
                  <button className="focus:outline-none">
                    <img
                      alt={dialogChildData.alt}
                      loading="lazy"
                      decoding="async"
                      data-nimg="1"
                      className="w-auto h-auto cursor-pointer shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
                      src={dialogChildData.src}
                    />
                  </button>
                )}
              </div>
            </div>
          </Dialog.Panel>


          
          </Transition.Child>
        </div>
      </div>
    </Dialog>
  </Transition.Root>
</div>


    

    <header className="bg-white p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2 lg:p-10">
        <div className="row-start-2 lg:row-auto">
          <h1 className="block antialiased tracking-normal font-sans font-semibold text-blue-gray-900 mb-4 lg:text-5xl !leading-tight text-3xl">
            Welcome to my Web<br/> 
            Development Portfolio! 
          </h1>
          <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-inherit mb-4 !text-gray-500 md:pr-16 xl:pr-28">
          I'm Theerawat Silimechok, a passionate web developer based in BKK & PTE. Here, you'll get a glimpse of my journey in the world of web development, where creativity meets functionality.
          </p>
          <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row">
            <button className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none w-full px-4 md:w-[12rem]" type="button">
              Download resume
              </button>
          </div>
        </div>
          <img
              className="h-[30rem] w-full rounded-xl object-cover"
              src={ProfilePic}
              alt="profilePic"
              loading="lazy"
              width="1024"
              height="1024"
              decoding="async"
            />
        </div>
    </header>
     <section className="px-8 pb-10 py-28">
        <div className="container mx-auto text-center">
          <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 mb-8">
            My License and Certificate
          </h6>
        </div>
        <div className='flex flex-wrap items-center justify-center gap-6'>
          {certificateDataBanner.map((image, index) => (
            <img
              key={index}
              alt={image.alt}
              loading="lazy"
              width="768"
              height="768"
              decoding="async"
              data-nimg="1"
              className={`w-40 cursor-pointer transition-opacity ${selectedBannerIndex === null || selectedBannerIndex === index ? 'opacity-100' : 'opacity-50'}`}
              src={image.src}
              onClick={() => handleCertificateImageClick(index)}
            />
          ))}
        </div>
      </section>
      {selectedBannerIndex !== null && (
  <section className={`p-10 pt-10 pb-10 py-28 bg-gray-200 transition-transform transform ${selectedBannerIndex === 3 || selectedBannerIndex === 4 ? 'translate-y-0' : 'translate-y-2'}`}>
    <div className="container mx-auto text-center">
      <div className="flex flex-wrap items-center justify-center gap-6">
        {selectedBannerIndex !== null &&
          certificateDataBanner[selectedBannerIndex]?.childData.map((image, index) => (
            <div key={index}>
              <img
                alt={image.alt}
                loading="lazy"
                width="768"
                height="768"
                decoding="async"
                data-nimg="1"
                className="w-auto h-40 cursor-pointer shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
                src={image.src}
                onClick={() => handleChildCertificateImageClick(index)}
              />
            </div>
          ))}
      </div>
    </div>
  </section>
)}
    <section class="px-8 py-28">
      <div class="container mx-auto mb-20 text-center">
        <p class="block antialiased font-sans text-base leading-relaxed text-blue-gray-900 mb-2 font-bold uppercase">
          my skills
          </p>
          <h1 class="block antialiased tracking-normal font-sans text-5xl font-semibold leading-tight text-blue-gray-900 mb-4">
            What I do
            </h1>
            <p class="block antialiased font-sans text-xl font-normal leading-relaxed text-inherit mx-auto w-full !text-gray-500 lg:w-10/12">
              I'm not just a developer; I'm a digital dreamweaver. Crafting immersive online experiences is not just a job but my calling.
              </p>
              </div>
              <div class="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
                <div class="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none">
                  <div class="p-6 grid justify-center text-center">
                    <div class="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-gray-900 p-2.5 text-white shadow">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="h-6 w-6" stroke-width="2">
                        <path fill-rule="evenodd" d="M1.5 7.125c0-1.036.84-1.875 1.875-1.875h6c1.036 0 1.875.84 1.875 1.875v3.75c0 1.036-.84 1.875-1.875 1.875h-6A1.875 1.875 0 011.5 10.875v-3.75zm12 1.5c0-1.036.84-1.875 1.875-1.875h5.25c1.035 0 1.875.84 1.875 1.875v8.25c0 1.035-.84 1.875-1.875 1.875h-5.25a1.875 1.875 0 01-1.875-1.875v-8.25zM3 16.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875v2.25c0 1.035-.84 1.875-1.875 1.875h-5.25A1.875 1.875 0 013 18.375v-2.25z" clip-rule="evenodd">
                          </path>
                          </svg>
                          </div>
                          <h5 class="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2">
                            Frontend Web Development:
                            </h5>
                            <p class="block antialiased font-sans text-base leading-relaxed text-inherit px-8 font-normal !text-gray-500">
                              Creating beautiful and functional web experiences is my forte. Using the latest technologies and best practices, I design and build websites that captivate and engage users.
                              </p>
                              </div>
                              </div>
                         
                                        <div class="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none">
                                          <div class="p-6 grid justify-center text-center">
                                            <div class="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-gray-900 p-2.5 text-white shadow">
                                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="h-6 w-6" stroke-width="2">
                                                <path fill-rule="evenodd" d="M2.25 4.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875V17.25a4.5 4.5 0 11-9 0V4.125zm4.5 14.25a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" clip-rule="evenodd">
                                                  </path>
                                                  <path d="M10.719 21.75h9.156c1.036 0 1.875-.84 1.875-1.875v-5.25c0-1.036-.84-1.875-1.875-1.875h-.14l-8.742 8.743c-.09.089-.18.175-.274.257zM12.738 17.625l6.474-6.474a1.875 1.875 0 000-2.651L15.5 4.787a1.875 1.875 0 00-2.651 0l-.1.099V17.25c0 .126-.003.251-.01.375z">
                                                    </path>
                                                    </svg>
                                                    </div>
                                                    <h5 class="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2">
                                                      Technology Stack
                                                      </h5>
                                                      <p class="block antialiased font-sans text-base leading-relaxed text-inherit px-8 font-normal !text-gray-500">
                                                        I'm well-versed in the industry's most popular frontend technologies, including HTML5, CSS3, JavaScript, and frameworks like React and React Native.
                                                        </p>
                                                        </div>
                                                        </div>
                                                        
                                                                <div class="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none">
                                                                  <div class="p-6 grid justify-center text-center">
                                                                    <div class="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-gray-900 p-2.5 text-white shadow">
                                                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="h-6 w-6" stroke-width="2">
                                                                        <path d="M12 15a3 3 0 100-6 3 3 0 000 6z">
                                                                          </path>
                                                                          <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clip-rule="evenodd">
                                                                            </path>
                                                                            </svg>
                                                                            </div>
                                                                            <h5 class="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2">
                                                                              User-Centric Design
                                                                              </h5>
                                                                              <p class="block antialiased font-sans text-base leading-relaxed text-inherit px-8 font-normal !text-gray-500">
                                                                                My development goes hand-in-hand with an eye for design. I create user interfaces that are not only functional but also aesthetically pleasing, providing a seamless and enjoyable user journey.</p></div></div><div class="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none">

                                                                                                </div>
                                                                                                </div>
                                                                                                </section>
        <section class="py-14 px-28">
            <div class="container mx-auto mb-20 text-center">
              <h2 class="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900 mb-4">
                My Projects</h2>
                <p class="block antialiased font-sans text-xl leading-relaxed text-inherit mx-auto w-full px-4 font-normal !text-gray-500 lg:w-10/12">
                Specialize in creating responsive websites that are accessible and user-friendly across all platforms. With a focus on seamless connectivity through JavaScript and an emphasis on utilizing serverless back-end architecture.
                </p>
            </div>
            <div class="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
              <div class="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none">
                <div class="relative bg-clip-border rounded-xl overflow-hidden bg-white text-gray-700 shadow-lg mx-0 mt-0 mb-6 h-48">
                  <img alt="Mobile App Development" loading="lazy" width="768" height="768" decoding="async" data-nimg="1" class="h-full w-full object-cover" src="/src/assets/project-mock.jpg" />
                </div>
                <div class="p-0">
                  <a href="#" class="text-blue-gray-900 transition-colors hover:text-gray-800">
                    <h5 class="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-inherit mb-2">
                      Sports Social & booking website
                    </h5>
                  </a>
                  <p class="block antialiased font-sans text-base leading-relaxed text-inherit mb-6 font-normal !text-gray-500">
                    Mobile app designed to help users discover and explore local restaurants and cuisines.
                  </p>
                  <button class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none" type="button">
                    see details
                  </button>
                  </div>
                </div>
                <div class="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none">
                <div class="relative bg-clip-border rounded-xl overflow-hidden bg-white text-gray-700 shadow-lg mx-0 mt-0 mb-6 h-48">
                  <img alt="Mobile App Development" loading="lazy" width="768" height="768" decoding="async" data-nimg="1" class="h-full w-full object-cover" src="/src/assets/project-mock.jpg" />
                </div>
                <div class="p-0">
                  <a href="#" class="text-blue-gray-900 transition-colors hover:text-gray-800">
                    <h5 class="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-inherit mb-2">
                      Mobile App Development
                    </h5>
                  </a>
                  <p class="block antialiased font-sans text-base leading-relaxed text-inherit mb-6 font-normal !text-gray-500">
                    Mobile app designed to help users discover and explore local restaurants and cuisines.
                  </p>
                  <button class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none" type="button">
                    see details
                  </button>
                  </div>
                </div>
                <div class="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none">
                <div class="relative bg-clip-border rounded-xl overflow-hidden bg-white text-gray-700 shadow-lg mx-0 mt-0 mb-6 h-48">
                  <img alt="Mobile App Development" loading="lazy" width="768" height="768" decoding="async" data-nimg="1" class="h-full w-full object-cover" src="/src/assets/project-mock.jpg" />
                </div>
                <div class="p-0">
                  <a href="#" class="text-blue-gray-900 transition-colors hover:text-gray-800">
                    <h5 class="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-inherit mb-2">
                      Mobile App Development
                    </h5>
                  </a>
                  <p class="block antialiased font-sans text-base leading-relaxed text-inherit mb-6 font-normal !text-gray-500">
                    Mobile app designed to help users discover and explore local restaurants and cuisines.
                  </p>
                  <button class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none" type="button">
                    see details
                  </button>
                  </div>
                </div>
                <div class="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none">
                <div class="relative bg-clip-border rounded-xl overflow-hidden bg-white text-gray-700 shadow-lg mx-0 mt-0 mb-6 h-48">
                  <img alt="Mobile App Development" loading="lazy" width="768" height="768" decoding="async" data-nimg="1" class="h-full w-full object-cover" src="/src/assets/project-mock.jpg" />
                </div>
                <div class="p-0">
                  <a href="#" class="text-blue-gray-900 transition-colors hover:text-gray-800">
                    <h5 class="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-inherit mb-2">
                      Mobile App Development
                    </h5>
                  </a>
                  <p class="block antialiased font-sans text-base leading-relaxed text-inherit mb-6 font-normal !text-gray-500">
                    Mobile app designed to help users discover and explore local restaurants and cuisines.
                  </p>
                  <button class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none" type="button">
                    see details
                  </button>
                  </div>
                </div>
                
            </div>
        </section>

                                                                                                

                                                                                                
      
</>
  );
}

export default App;