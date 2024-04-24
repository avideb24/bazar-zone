import Link from "next/link";
import { FaLinkedin, FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="bg-primary">
            <div className="max-w-7xl mx-auto footer p-10 flex flex-col md:flex-row justify-between items-center md:items-start ">
                <aside className="flex flex-col items-center md:items-start">
                    <Link href={'/'} className="text-xl font-semibold">Bazar-Zone</Link>
                    <address className="not-italic">Bus Stand Mor, Dinajpur, Bangladesh</address>
                    <a href="tel:+8801723622125" className="hover:underline">+8801723622125</a>
                    <p>bazar-zone@info.com</p>
                </aside>
                <nav className="flex flex-col items-center md:items-start">
                    <h6 className="footer-title">Our Products</h6>
                    <ul className="flex flex-row md:flex-col gap-2 footer-links">
                        <li>
                            <Link href={'/'}>Shoes</Link>
                        </li>
                        <li className="md:hidden">•</li>
                        <li>
                            <Link href={'/'}>Cloths</Link>
                        </li>
                        <li className="md:hidden">•</li>
                        <li>
                            <Link href={'/'}>Glasses</Link>
                        </li>
                    </ul>
                </nav>
                <nav className="flex flex-col items-center md:items-start">
                    <h6 className="footer-title">Useful Links</h6>
                    <ul className="flex flex-row md:flex-col gap-2 footer-links">
                        <li>
                            <Link href={'/'}>About Us</Link>
                        </li>
                        <li className="md:hidden">•</li>
                        <li>
                            <Link href={'/'}>Contact</Link>
                        </li>
                    </ul>
                </nav>
                <nav className="flex flex-col items-center md:items-start">
                    <h6 className="footer-title">Social Links</h6>
                    <ul className="flex flex-row gap-2 footer-links">
                        <li>
                            <Link href={'/'}><FaLinkedin className="text-2xl" /></Link>
                        </li>
                        <li>
                            <Link href={'/'}><FaFacebookSquare className="text-2xl" /></Link>
                        </li>
                        <li>
                            <Link href={'/'}><FaInstagramSquare className="text-2xl" /></Link>
                        </li>
                        <li>
                            <Link href={'/'}><FaTwitterSquare className="text-2xl" /></Link>
                        </li>
                    </ul>
                </nav>
            </div>

             {/* copyright text */}
             <div className="text-center text-[12px] pb-4">@2024 • All Rights Reserved</div>
        </footer>
    );
};

export default Footer;