import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { img:'https://cdn-icons-png.flaticon.com/512/3536/3536569.png', name: 'Linked', href: '#', current: false },
  { img:'https://cdn-icons-png.flaticon.com/512/3291/3291695.png' , name: 'Github', href: '#', current: false },
]

const contact = [
  { name: 'Darkmode', href: '#', current: true }, 
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
                            className={classNames(
                            item.current ? 'bg-gray-300 text-gray-800' : 'text-gray-700 hover:bg-gray-300 hover:text-gray-600',
                            'rounded-md px-3 py-2 text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                        >
                            <img src={item.img} alt={item.name} className="h-4 w-4 mr-1 mb-1 inline "/>
                            {item.name}
                        </a>
                        ))}
                    </div>
                    </div>    
              </div>

            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end mr-10" > 
                <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                        {contact.map((item) => (
                        <a
                            img={item.src}
                            key={item.name}
                            href={item.href}
                            className={classNames(
                            item.current ? 'bg-gray-900 text-white shadow-md shadow-gray-900/10' : 'hover:shadow-lg hover:shadow-gray-900/20',
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
                    item.current ? 'bg-gray-300 text-gray-600' : 'text-gray-600 hover:bg-gray-600 hover:text-gray-800',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            <div className="space-y-1 px-2 pb-3 pt-2">
              {contact.map((item) => (
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
