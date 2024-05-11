'use client';

import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartSimple } from "react-icons/pi";
import { AiOutlineUser } from "react-icons/ai";

const Navbar = () => {

    return (
        <header className="bg-[color:var(--bg-primary)] pb-3 md:pb-0">
            <nav className="navbar max-w-7xl mx-auto">
                <div className="navbar-start">
                    <nav className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="nav-items menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-200 rounded-box w-52">
                            <li>
                                <Link href={'/'}>Home</Link>
                            </li>
                            <li>
                                <Link href={'/'}>Products</Link>
                            </li>
                            <li>
                                <Link href={'/'}>About Us</Link>
                            </li>
                            <li>
                                <Link href={'/contact'}>Contact</Link>
                            </li>
                        </ul>
                    </nav>
                    <Link href={'/'}>Bazar-Zone</Link>
                </div>
                <nav className="navbar-center hidden lg:flex">
                    <ul className="nav-items menu menu-horizontal px-1">
                        <li>
                            <Link href={'/'}>Home</Link>
                        </li>
                        <li>
                            <Link href={'/'}>Products</Link>
                        </li>
                        <li>
                            <Link href={'/'}>About Us</Link>
                        </li>
                        <li>
                            <Link href={'/contact'}>Contact</Link>
                        </li>
                    </ul>
                </nav>
                <div className="navbar-end flex items-center gap-4 pr-3">
                    <form className="max-w-52 relative hidden md:block">
                        <input type="text" className="w-full bg-[color:var(--bg-primary)] border border-[color:var(--text-primary)] px-3 py-1 rounded-md outline-none" />
                        <span className="absolute top-[9px] right-3">
                            <CiSearch />
                        </span>
                    </form>
                    <button>
                        <AiOutlineUser className="text-2xl" />
                    </button>
                    <button className="inline-block relative">
                        <PiShoppingCartSimple className="text-2xl" />
                        <span className="w-4 h-4 bg-primary text-white absolute -top-2 -right-2 text-[10px] text-center rounded-full">8</span>
                    </button>
                </div>

            </nav>

            {/* mobile search */}
            <form className="w-full flex md:hidden items-center gap-3 px-2 relative text-[color:var(--text-primary)]">
                <input type="text" className="w-full bg-[color:var(--bg-primary)] border border-[color:var(--text-primary)] px-3 py-1 rounded-md outline-none" />
                <button type="submit" className="absolute top-2 right-4">
                    <CiSearch />
                </button>
            </form>
        </header>
    );
};

export default Navbar;



