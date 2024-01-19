import { useState } from 'react';
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
import CourseraC2 from './assets/Coursera/Coursera A966HQAKNNMZ-1.png'
import CourseraC3 from './assets/Coursera/Coursera M99HJ2JE8JMQ-1.png'
import CourseraC4 from './assets/Coursera/Coursera URWDDCN7NRSY-1.png'
import CourseraC5 from './assets/Coursera/Coursera XP5SJVAPFXGY-1.png'
import CourseraC6 from './assets/Coursera/Coursera ZTR5R2GBEF5V-1.png'
import GenerationC1 from './assets/Generation/Coursera ZTR5R2GBEF5V-1.png'

const certificateData = [
  { src: GENERATIONTHAI, alt: 'Generation thailand' },
  { src: COURSERA, alt: 'Coursera Logo' },
  { src: CODEACADEMY, alt: 'Codecademy Banner' },
  { src: MECA, alt: 'MECA Banner' },
  { src: CERTIPORT, alt: 'Certipost Seeklogo' },
 
];

const GenerationData = [
  {src: GenerationC1, alt: 'c1'}
]

const CertiportData = [
  {src: CertiportC1, alt:'c1'},
  {src: CertiportC2, alt:'c2'},
  {src: CertiportC3, alt:'c3'},
  {src: CertiportC4, alt:'c4'},
];

const MecaData = [
  {src: MecaC1, alt: 'MECA'}
]

const CodeacademyData = [
  {src: CodeacamedyC1, alt: 'Codeacademy1'},
  {src: CodeacamedyC2, alt: 'Codeacademy2'}
]

const CourseraData = [
  {src: CourseraC1, alt: 'CourseraC1'},
  {src: CourseraC2, alt: 'CourseraC2'},
  {src: CourseraC3, alt: 'CourseraC3'},
  {src: CourseraC4, alt: 'CourseraC4'},
  {src: CourseraC5, alt: 'CourseraC5'},
  {src: CourseraC6, alt: 'CourseraC6'},
]


function App() {
  const [selectedBannerIndex, setSelectedBannerIndex] = useState(null);

  const handleCertificateImageClick = (index) => {
    setSelectedBannerIndex((prevIndex) => (prevIndex === index ? null : index));
  };


  return (
    <>
    <header className="bg-white p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2 lg:p-10">
        <div className="row-start-2 lg:row-auto">
          <h1 className="block antialiased tracking-normal font-sans font-semibold text-blue-gray-900 mb-4 lg:text-5xl !leading-tight text-3xl">
            Welcome to my Web<br/> 
            Development Portfolio! 
          </h1>
          <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-inherit mb-4 !text-gray-500 md:pr-16 xl:pr-28">
          I'm Theerawat Silimechok, a passionate web developer based in BKK. Here, you'll get a glimpse of my journey in the world of web development, where creativity meets functionality.
          </p>
          <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row">
            <button className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none w-full px-4 md:w-[12rem]" type="button">
              Download resume</button>
          </div>
        </div>
          <img
              className="h-[30rem] w-full rounded-xl object-cover"
              src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
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
          {certificateData.map((image, index) => (
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
         <section className={`p-10 pt-10 pb-10 py-28 bg-gray-100 transition-transform transform ${selectedBannerIndex === 3 || selectedBannerIndex === 4 ? 'translate-y-0' : 'translate-y-2'}`}>
          <div className="container mx-auto text-center">
            <div className="flex flex-wrap items-center justify-center gap-6">
             
              {selectedBannerIndex === 0 && (
                GenerationData.map((image, index) => (
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
                    />
                  </div>
                ))
              )}

              {selectedBannerIndex === 1 && (
                CourseraData.map((image, index) => (
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
                    />
                  </div>
                ))
              )}
              {selectedBannerIndex === 2 && (
                CodeacademyData.map((image, index) => (
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
                    />
                  </div>
                ))
              )}
              {selectedBannerIndex === 3 && (
                MecaData.map((image, index) => (
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
                    />
                  </div>
                ))
              )}
               {selectedBannerIndex === 4 && (
                CertiportData.map((image, index) => (
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
                    />
                  </div>
                ))
              )}
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
              I'm not just a developer; I'm a digital dreamweaver. Crafting immersive online experiences is not just a job but my calling. Discover below how I can help you.
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
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="h-6 w-6" stroke-width="2"><path fill-rule="evenodd" d="M12 3.75a6.715 6.715 0 00-3.722 1.118.75.75 0 11-.828-1.25 8.25 8.25 0 0112.8 6.883c0 3.014-.574 5.897-1.62 8.543a.75.75 0 01-1.395-.551A21.69 21.69 0 0018.75 10.5 6.75 6.75 0 0012 3.75zM6.157 5.739a.75.75 0 01.21 1.04A6.715 6.715 0 005.25 10.5c0 1.613-.463 3.12-1.265 4.393a.75.75 0 01-1.27-.8A6.715 6.715 0 003.75 10.5c0-1.68.503-3.246 1.367-4.55a.75.75 0 011.04-.211zM12 7.5a3 3 0 00-3 3c0 3.1-1.176 5.927-3.105 8.056a.75.75 0 11-1.112-1.008A10.459 10.459 0 007.5 10.5a4.5 4.5 0 119 0c0 .547-.022 1.09-.067 1.626a.75.75 0 01-1.495-.123c.041-.495.062-.996.062-1.503a3 3 0 00-3-3zm0 2.25a.75.75 0 01.75.75A15.69 15.69 0 018.97 20.738a.75.75 0 01-1.14-.975A14.19 14.19 0 0011.25 10.5a.75.75 0 01.75-.75zm3.239 5.183a.75.75 0 01.515.927 19.415 19.415 0 01-2.585 5.544.75.75 0 11-1.243-.84 17.912 17.912 0 002.386-5.116.75.75 0 01.927-.515z" clip-rule="evenodd">
                                      </path>
                                      </svg>
                                      </div>
                                      <h5 class="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2">
                                        Mobile App Development
                                        </h5>
                                        <p class="block antialiased font-sans text-base leading-relaxed text-inherit px-8 font-normal !text-gray-500">
                                        I specialize in creating responsive and intuitive mobile apps that work seamlessly across iOS &amp; Android devices. From concept to deployment, I handle every stage of the development process.
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
                                                          <div class="p-6 grid justify-center text-center"><div class="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-gray-900 p-2.5 text-white shadow">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="h-6 w-6" stroke-width="2"><path fill-rule="evenodd" d="M11.097 1.515a.75.75 0 01.589.882L10.666 7.5h4.47l1.079-5.397a.75.75 0 111.47.294L16.665 7.5h3.585a.75.75 0 010 1.5h-3.885l-1.2 6h3.585a.75.75 0 010 1.5h-3.885l-1.08 5.397a.75.75 0 11-1.47-.294l1.02-5.103h-4.47l-1.08 5.397a.75.75 0 01-1.47-.294l1.02-5.103H3.75a.75.75 0 110-1.5h3.885l1.2-6H5.25a.75.75 0 010-1.5h3.885l1.08-5.397a.75.75 0 01.882-.588zM10.365 9l-1.2 6h4.47l1.2-6h-4.47z" clip-rule="evenodd">
                                                              </path>
                                                              </svg>
                                                              </div>
                                                              <h5 class="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2"> 
                                                              Web Optimization
                                                              </h5>
                                                              <p class="block antialiased font-sans text-base leading-relaxed text-inherit px-8 font-normal !text-gray-500">
                                                                Performance matters. I optimize websites and apps for speed, ensuring your users enjoy a fast and responsive experience, which in turn boosts user satisfaction and SEO rankings.
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
                                                                                  <div class="p-6 grid justify-center text-center">
                                                                                    <div class="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-gray-900 p-2.5 text-white shadow">
                                                                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="h-6 w-6" stroke-width="2">
                                                                                        <path fill-rule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625zM7.5 15a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 017.5 15zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H8.25z" clip-rule="evenodd">
                                                                                          </path>
                                                                                          <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z">
                                                                                            </path>
                                                                                            </svg>
                                                                                            </div>
                                                                                            <h5 class="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2">
                                                                                              Testing and Quality Assurance
                                                                                              </h5>
                                                                                              <p class="block antialiased font-sans text-base leading-relaxed text-inherit px-8 font-normal !text-gray-500">
                                                                                                I rigorously test and debug applications to guarantee a bug-free and secure environment for users. Your peace of mind is as important to me as the functionality of your project.
                                                                                                </p>
                                                                                                </div>
                                                                                                </div>
                                                                                                </div>
                                                                                                </section>
      
    </>
  );
}

export default App;