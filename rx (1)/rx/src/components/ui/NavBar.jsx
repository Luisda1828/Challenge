import { NavLink } from "react-router-dom";

export function NavBar() {
    return(
        <nav className="bg-gray-800">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                    <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                        <NavLink to="/" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Home</NavLink>
                        <NavLink to="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">About</NavLink>
                        <NavLink to="/contact" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Contact</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}