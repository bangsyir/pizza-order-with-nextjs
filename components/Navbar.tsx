// import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";


export const Navbar = () => {
  const [mobileButton, setMobileButton] = useState<boolean>(false)
  function handleMobileToggle() {
    if(!mobileButton) {
      setMobileButton(true)
    } else {
      setMobileButton(false)
    }
  }
  const router = useRouter()
  return(
    <nav className="bg-orange-500">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-14">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* mobile menu button */}
            <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-orange-200 hover:text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false" onClick={()=>handleMobileToggle()}>
              <span className="sr-only">Open main menu</span>
            
              {/* Icon when menu is closed.

              Heroicon name: outline/menu

              Menu open: "hidden", Menu closed: "block" */}
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
                {/* Icon when menu is open.

                Heroicon name: outline/x

                Menu open: "block", Menu closed: "hidden" */}
              <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:jusitfy-start">
            <div className="flex-shrink-0 flex items-center">
              <div className="block lg:hidden">
                <img className="h-8 w-auto" src="https://www.svgrepo.com/show/91025/pizza.svg" alt="Workflow"/>
              </div>
              <div className="hidden lg:block">
                <div className="lg:flex">
                  <img className="h-8 w-auto" src="https://www.svgrepo.com/show/91025/pizza.svg" alt="Workflow"/> 
                  <span className="text-orange-800 text-2xl font-bold pl-1">Pizza</span>
                </div>
              </div>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link href="/">
                  <a className={router.pathname === "/" ? "active-link":"nav-link"} aria-current="page">Home</a>
                </Link>
                <Link href="/about">
                  <a href="#" className={router.pathname === "/about" ? "active-link":"nav-link"}>About</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile menu, show/hide base on menu state */}
      {mobileButton ? (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/">
              <a className={router.pathname === "/" ? "active-link block":"nav-link block"}aria-current="page">Home</a>
            </Link>
            <Link href="/about">
              <a className={router.pathname === "/about" ? "active-link block":"nav-link block"}>About</a>
            </Link>
          </div>
        </div>

      ): null}
    </nav>
  )
};

