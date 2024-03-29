import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import linkedLogo from './assets/linkedin-logo.png'
import githubLogo from './assets/github.png'

const navigation = [
  { img:linkedLogo, name: 'Linked', href: 'https://www.linkedin.com/in/theerawat-silimechok-41648b287/', current: false },
  { img:githubLogo , name: 'Github', href: 'https://github.com/theerawatzuz', current: false },
]

const utility = [
  { name: 'Darkmode (On Progress)', href: '#', current: true }, 
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Nav() {
  return (
    <Disclosure as="nav" className="bg-gray-100">
      {({ open }) => (
        <>
          <div className="container mx-auto grid h-full gap-10  w-full grid-cols-1 items-center">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-800 hover:bg-gray-100 hover:text-grey-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start ml-10">
                <div className="flex flex-shrink-0 items-center">
                 <p className="block antialiased font-sans text-blue-gray-900 text-lg font-bold">Theerawat's portfolio</p>
                </div>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center"> 
                <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                        {navigation.map((item) => (
                        <a
                            img={item.src}
                            key={item.name}
                            href={item.href}
                            target="_blank"
                            className={classNames(
                            item.current ? 'bg-gray-300 text-gray-800' : 'text-gray-700 hover:bg-gray-300 hover:text-gray-600',
                            'rounded-md px-3 py-2 text-sm font-medium sm:flex'
                            
                            )}
                            aria-current={item.current ? 'page' : undefined}
                        >
                      
                            <img src={item.img} alt={item.name} className="h-4 w-4 mr-1"/>
                            <span class="">{item.name}</span>
                     
                        </a>
                        ))}
                    </div>
                    </div>    
              </div>

            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end mr-10" > 
                <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                        {utility.map((item) => (
                        <a
                            img={item.src}
                            key={item.name}
                            href={item.href}
                            className={classNames(
                            item.current ? 'bg-gray-900 text-white shadow-md shadow-gray-900/10' : ' shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none',
                            'rounded-md px-3 py-2 text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                        >
                            {item.name}
                        </a>
                        ))}
                    </div>
                    </div>    
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-300 text-gray-600' : 'text-gray-600 hover:bg-gray-600 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            <div className="space-y-1 px-2 pb-3 pt-2">
              {utility.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white shadow-md shadow-gray-900/10' : 'hover:shadow-lg hover:shadow-gray-900/20',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
