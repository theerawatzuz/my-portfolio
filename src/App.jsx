import MECA from './assets/MECA-banner.png'
import CORSERA from './assets/Coursera_logo.png'
import CODEACADEMY from './assets/Codeacademy-banner.png'
import CERTIPORT from './assets/certiport-seeklogo.png'
import GENERATIONTHAI from './assets/Generation_Thailand_logo.webp'

const certificateData = [
  { src: GENERATIONTHAI, alt: 'Generation thailand' },
  { src: CORSERA, alt: 'Coursera Logo' },
  { src: CODEACADEMY, alt: 'Codecademy Banner' },
  { src: MECA, alt: 'MECA Banner' },
  { src: CERTIPORT, alt: 'Certipost Seeklogo' },
 
];


function App() {
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
    <section className="px-8 py-28">
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
              className="w-40"
              src={image.src}
            />
          ))}
        </div>
      </section>

      <section className="p-10 pt-0 pb-0 py-28">
          <div className="container mx-auto text-center">
              <div class="flex flex-wrap items-center justify-center gap-6">
                  <div>
                      <img class="h-auto w-40 rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt=""/>
                  </div>
                  <div>
                      <img class="h-auto w-40 rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt=""/>
                  </div>
                  <div>
                      <img class="h-auto w-40 rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt=""/>
                  </div>
              </div>
          </div>
      </section>
    </>
  )
}

export default App
