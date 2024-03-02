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
import GenerationC1 from './assets/Generation/29_Theerawat Silimechok-1.png'
import AMAZONWEBSERVICE from './assets/amazon-web-services-logo.png'
import AmazonC1 from './assets/AWS/AWSBadged.png'

import ProfilePic from './assets/Profile/ProfilePic.jpg'

import SportAppPic from './assets/WebPreview/SportApp.png'

import ResumeFile from './assets/Profile/Theerawat Silimechok(Programmerandport).pdf'

import InProgess from './assets/Progess.png'

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



  const handleDownload = () => {
    const filePath = ResumeFile;
    const link = document.createElement('a');
    link.href = filePath;
    link.download = 'Theerawat_Silimechok_Programmer_and_Portfolio.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  


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
          <button
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none w-full px-4 md:w-[12rem]"
              type="button"
              onClick={handleDownload}
            >
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
                  <img alt="Mobile App Development" loading="lazy" width="768" height="768" decoding="async" data-nimg="1" class="h-full w-full object-cover" src={SportAppPic} />
                </div>
                <div class="p-0">
                  <a href="https://chiba-matcha-front-end.vercel.app/" target="_blank" class="text-blue-gray-900 transition-colors hover:text-gray-800">
                    <h5 class="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-inherit mb-2">
                      Sports Social & booking website
                    </h5>
                  </a>
                  <p class="block antialiased font-sans text-base leading-relaxed text-inherit mb-6 font-normal !text-gray-500">
                  Creating responsive websites all platforms with React & MUI. Utilizing serverless back-end architecture by MongoDB.
                  </p>
                  {/* <button class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none" type="button">
                    see details
                  </button> */}
                  </div>
                </div>


                <div class="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none">
                <div class="relative bg-clip-border rounded-xl overflow-hidden bg-white text-gray-700 shadow-lg mx-0 mt-0 mb-6 h-48">
                  <img alt="Air conditioning technician queue management website" loading="lazy" width="768" height="768" decoding="async" data-nimg="1" class="h-full w-full object-cover" src={InProgess} />
                </div>
                <div class="p-0">
                  <a href="#" class="text-blue-gray-900 transition-colors hover:text-gray-800">
                    <h5 class="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-inherit mb-2">
                    Air conditioning technician queue management website
                    </h5>
                  </a>
                  <p class="block antialiased font-sans text-base leading-relaxed text-inherit mb-6 font-normal !text-gray-500">
                    Planing.
                  </p>
                  {/* <button
                    class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    type="button"
                  >
                    see details
                  </button> */}

                  </div>
                </div>
                <div class="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none">
                <div class="relative bg-clip-border rounded-xl overflow-hidden bg-white text-gray-700 shadow-lg mx-0 mt-0 mb-6 h-48">
                  <img alt="Motorcycle rental management website" loading="lazy" width="768" height="768" decoding="async" data-nimg="1" class="h-full w-full object-cover" src={InProgess} />
                </div>
                <div class="p-0">
                  <a href="#" class="text-blue-gray-900 transition-colors hover:text-gray-800">
                    <h5 class="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-inherit mb-2">
                    Motorcycle rental management website
                    </h5>
                  </a>
                  <p class="block antialiased font-sans text-base leading-relaxed text-inherit mb-6 font-normal !text-gray-500">
                    Planing.
                  </p>
                  {/* <button class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none" type="button">
                    see details
                  </button> */}
                  </div>
                </div>


                <div class="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none">
                <div class="relative bg-clip-border rounded-xl overflow-hidden bg-white text-gray-700 shadow-lg mx-0 mt-0 mb-6 h-48">
                  <img alt="Resort management website" loading="lazy" width="768" height="768" decoding="async" data-nimg="1" class="h-full w-full object-cover" src={InProgess} />
                </div>
                <div class="p-0">
                  <a href="#" class="text-blue-gray-900 transition-colors hover:text-gray-800">
                    <h5 class="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-inherit mb-2">
                    Resort management website
                    </h5>
                  </a>
                  <p class="block antialiased font-sans text-base leading-relaxed text-inherit mb-6 font-normal !text-gray-500">
                      Planing.
                  </p>
                  {/* <button class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none" type="button">
                    see details
                  </button> */}
                  </div>
                </div>
                
            </div>
        </section>
        <section class="px-28 py-24">
          <div class="container mx-auto grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
               <div class="cal-span-1">
                  <h2 class="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900">Summary</h2>
                  <p class="block antialiased font-sans text-base leading-relaxed text-inherit mb-4 mt-3 w-9/12 font-normal !text-gray-500">
                  Experienced Electronics and Computer Technician with 3 years of experience, including 1 year as a System Integrator,
                  currently seeking a Programmer position. Skilled in designing user-friendly interfaces, ensuring policy compliance, and
                  solving problems effectively. Excited to apply analytical skills, work well in teams, and use Agile methods for success in
                  programming and software development.
                  </p>
                </div> 
                <div class="col-span-1 grid gap-y-6 lg:ml-auto pr-0 lg:pr-12 xl:pr-32">
                  <div class="flex items-start gap-4">
                      <div class="relative flex flex-col bg-clip-border rounded-xl bg-gray-900 text-white shadow-gray-900/20 shadow-md h-12 w-12 shrink-0 items-center justify-center !rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bar-chart" viewBox="0 0 16 16">
                          <path d="M4 11H2v3h2zm5-4H7v7h2zm5-5v12h-2V2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1z"/>
                        </svg>
                      </div>
                      <p class="block antialiased font-sans text-base leading-relaxed text-inherit w-full font-normal !text-gray-500">
                        Bachelor of Science in Electronics and Computer Technology
                      </p>
                  </div>
                  <div class="flex items-start gap-4">
                      <div class="relative flex flex-col bg-clip-border rounded-xl bg-gray-900 text-white shadow-gray-900/20 shadow-md h-12 w-12 shrink-0 items-center justify-center !rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-patch-check" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
                        <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911z"/>
                      </svg>
                      </div>
                      <p class="block antialiased font-sans text-base leading-relaxed text-inherit w-full font-normal !text-gray-500">
                        Certified Full stack Web Developer 
                      </p>
                  </div>
                  <div class="flex items-start gap-4">
                      <div class="relative flex flex-col bg-clip-border rounded-xl bg-gray-900 text-white shadow-gray-900/20 shadow-md h-12 w-12 shrink-0 items-center justify-center !rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mouse2" viewBox="0 0 16 16">
                        <path d="M3 5.188C3 2.341 5.22 0 8 0s5 2.342 5 5.188v5.625C13 13.658 10.78 16 8 16s-5-2.342-5-5.188V5.189zm4.5-4.155C5.541 1.289 4 3.035 4 5.188V5.5h3.5zm1 0V5.5H12v-.313c0-2.152-1.541-3.898-3.5-4.154M12 6.5H4v4.313C4 13.145 5.81 15 8 15s4-1.855 4-4.188z"/>
                      </svg>
                      </div>
                      <p class="block antialiased font-sans text-base leading-relaxed text-inherit w-full font-normal !text-gray-500">
                       Frontend Framework Proficiency Certification
                      </p>
                  </div>
                </div>
          </div>
        </section>
        <section class="px-24 py-16"> 
            <div class="container mx-auto mb-20 text-center">
              <h1 class="block antialiased tracking-normal font-sans text-5xl font-semibold leading-tight text-blue-gray-900 mb-4">
                Contact Me
              </h1>
              <p class="block antialiased font-sans text-xl font-normal leading-relaxed text-inherit mx-auto w-full lg:w-5/12 !text-gray-500">
              I'm prepared to apply my current skills and enhance them in the future to showcase the beauty of websites design.
              </p>
            </div> 
            <div>
      
                  <div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md container mx-auto border border-gray/50">
                    <div class="p-6 grid grid-cols-1 lg:grid-cols-7 md:gap-10">
                      <div class="w-full col-span-3 rounded-lg h-full py-8 p-5 md:p-16 bg-gray-900">
                        <h4 class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white mb-2">
                          Contact Information
                        </h4>
                        <p class="block antialiased font-sans font-normal text-inherit mx-auto mb-8 text-base !text-gray-500">
              
                          </p>
                          <div class="flex gap-5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="h-6 w-6 text-white">
                              <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd">
                              </path>
                              </svg>
                          <h6 class="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white mb-2 ml-2">
                            (+66) 62 440 8169
                          </h6>
                          </div>
                          <div class="flex my-2 gap-5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="h-6 w-6 text-white">
                              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z">
                                </path>
                                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z">
                                  </path>
                                  </svg>
                                  <h6 class="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white mb-2 ml-2">
                                    bankt21@gmail.com
                              </h6>
                            </div>
                          <div class="flex mb-10 gap-5">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="h-8 w-8 text-white">
                        <path d="M8 0c4.411 0 8 2.912 8 6.492 0 1.433-.555 2.723-1.715 3.994-1.678 1.932-5.431 4.285-6.285 4.645-.83.35-.734-.197-.696-.413l.003-.018.114-.685c.027-.204.055-.521-.026-.723-.09-.223-.444-.339-.704-.395C2.846 12.39 0 9.701 0 6.492 0 2.912 3.59 0 8 0M5.022 7.686H3.497V4.918a.156.156 0 0 0-.155-.156H2.78a.156.156 0 0 0-.156.156v3.486c0 .041.017.08.044.107v.001l.002.002.002.002a.15.15 0 0 0 .108.043h2.242c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157m.791-2.924a.156.156 0 0 0-.156.156v3.486c0 .086.07.155.156.155h.562c.086 0 .155-.07.155-.155V4.918a.156.156 0 0 0-.155-.156zm3.863 0a.156.156 0 0 0-.156.156v2.07L7.923 4.832l-.013-.015v-.001l-.01-.01-.003-.003-.011-.009h-.001L7.88 4.79l-.003-.002-.005-.003-.008-.005h-.002l-.003-.002-.01-.004-.004-.002-.01-.003h-.002l-.003-.001-.009-.002h-.006l-.003-.001h-.004l-.002-.001h-.574a.156.156 0 0 0-.156.155v3.486c0 .086.07.155.156.155h.56c.087 0 .157-.07.157-.155v-2.07l1.6 2.16a.2.2 0 0 0 .039.038l.001.001.01.006.004.002.008.004.007.003.005.002.01.003h.003a.2.2 0 0 0 .04.006h.56c.087 0 .157-.07.157-.155V4.918a.156.156 0 0 0-.156-.156zm3.815.717v-.56a.156.156 0 0 0-.155-.157h-2.242a.16.16 0 0 0-.108.044h-.001l-.001.002-.002.003a.16.16 0 0 0-.044.107v3.486c0 .041.017.08.044.107l.002.003.002.002a.16.16 0 0 0 .108.043h2.242c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157H11.81v-.589h1.525c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157H11.81v-.589h1.525c.086 0 .155-.07.155-.156Z"/>
                      </svg>
                      <h6 class="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white mb-2">
                      theerawat911
                      </h6>
                      </div>
                      <div class="flex items-center gap-5">
                        <button class="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-white hover:bg-white/10 active:bg-white/30" type="button">
                          <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                            <i class="fa-brands fa-facebook text-lg">
                            </i>
                            </span>
                          </button>
                          <button class="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-white hover:bg-white/10 active:bg-white/30" type="button">
                            <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                              <i class="fa-brands fa-instagram text-lg">
                                </i>
                                </span>
                                </button>
                            <button class="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-white hover:bg-white/10 active:bg-white/30" type="button">
                          <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                            <i class="fa-brands fa-github text-lg">
                              </i>
                              </span>
                            </button>
                          </div>
                        </div>
                    </div>
                  </div>
            </div>  
        </section>
        <footer class="mt-10 px-8 pt-20">
          <div class="container mx-auto">
            <div class="mt-16 flex flex-wrap items-center justify-center gap-y-4 border-t border-gray-200 py-6 md:justify-between">
              <p class="block antialiased font-sans text-base leading-relaxed text-inherit text-center font-normal !text-gray-700">
                © 2024 Made with <a href="https://www.material-tailwind.com" target="_blank">Material Tailwind</a> by TheerawatSMC.</p>
            </div>
          </div>

        </footer>

                                                                                                

                                                                                                
      
</>
  );
}
//test commit 
export default App;