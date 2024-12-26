import React from 'react'
import { Link } from 'react-scroll'
import Logo from '../../images/logo.png'
import CtaSection from '../ctaSection/ctaSection'

import { Phone, Mail, MapPin } from 'lucide-react';


const SubmitHandler = (e) => {
    e.preventDefault()
}

const Footer = (props) => {
    return (
        <footer className="relative bg-[#191919] z-10">
            <CtaSection />
            <div className="pt-[170px] pb-[90px] md:py-[90px] md:pb-[20px] overflow-hidden relative -z-10">
                <div className="wraper">
                    <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3">  
                        <div className="w-[420px] xl:w-[355px] lg:w-[297px] pr-[75px] md:mb-[40px] lg:pr-0 relative text-left after:absolute after:content[''] after:bg-[#ffffff0d] after:w-[1px] after:h-full after:right-[30px] after:top-0 after:lg:hidden">
                            {/* <div className="mb-7">
                                <Link className="text-[45px] font-bold flex items-center text-white" to="/">
                                    <img className=" rounded-[50%] mr-[10px] " src={Logo} alt="" />Elito.</Link>
                            </div> */}
                            <p className="text-white text-[16px] mb-[10px] mt-[8px]">Let’s stay connected and keep the conversation going! Follow me on my social media handles to explore more about my work, updates, and interests. I’d love to hear from you!</p>
                            <ul className="overflow-hidden pt-[15px]">
                                <li className="text-white float-left group "><a className="text-white transition-all group-hover:text-[#FFE600]" target='_blank' href="https://www.facebook.com/AMZIKHAN711/"><i className="ti-facebook"></i></a></li>
                                <li className="text-white float-left group ml-[25px]"><a className="text-white transition-all group-hover:text-[#FFE600]" target='_blank' href="https://x.com/MuzitheBull?t=NqeBTDoy-nZiaIcEfF1b_A&s=08"><i className="ti-twitter-alt"></i></a></li>
                                <li className="text-white float-left group ml-[25px]"><a className="text-white transition-all group-hover:text-[#FFE600]" target='_blank' href="https://www.linkedin.com/in/muzammilkhan19"><i className="ti-linkedin"></i></a></li>
                                {/* <li className="text-white float-left group ml-[15px]"><Link className="text-white transition-all group-hover:text-[#FFE600]" to="/"><i className="ti-pinterest"></i></Link></li>
                                <li className="text-white float-left group ml-[15px]"><Link className="text-white transition-all group-hover:text-[#FFE600]" to="/"><i className="ti-vimeo-alt"></i></Link></li> */}
                            </ul>
                        </div>

                        <div className="w-[250px] md:w-full ml-auto md:mb-[40px] lg:pr-0 relative text-left ">
                            <div className="mb-7">
                                <h3 className="text-[24px] font-bold font-base-font text-white capitalize">Navigation</h3>
                            </div>
                            <ul>
                                <li className="relative mb-[8px] block"><Link className=" pl-[15px] before:absolute before:bg-white before:transition-all before:hover:bg-[#59C378] before:w-[5px] before:h-[1px] before:left-0 before:top-[10px] before:content-[''] text-white hover:text-[#59C378] transition-all" to="about" spy={true} smooth={true} duration={500}>Skills</Link></li>
                                <li className="relative mb-[8px] block"><Link className=" pl-[15px] before:absolute before:bg-white before:transition-all before:hover:bg-[#59C378] before:w-[5px] before:h-[1px] before:left-0 before:top-[10px] before:content-[''] text-white hover:text-[#59C378] transition-all" to="portfolio" spy={true} smooth={true} duration={500}>Projects</Link></li>
                                <li className="relative mb-[8px] block"><Link className=" pl-[15px] before:absolute before:bg-white before:transition-all before:hover:bg-[#59C378] before:w-[5px] before:h-[1px] before:left-0 before:top-[10px] before:content-[''] text-white hover:text-[#59C378] transition-all" to="service" spy={true} smooth={true} duration={500}>Services</Link></li>
                                <li className="relative mb-[8px] block"><Link className=" pl-[15px] before:absolute before:bg-white before:transition-all before:hover:bg-[#59C378] before:w-[5px] before:h-[1px] before:left-0 before:top-[10px] before:content-[''] text-white hover:text-[#59C378] transition-all" to="contact" spy={true} smooth={true} duration={500}>Contact me</Link></li>
                            </ul>
                        </div>
                        <div className="pl-[15px] md:pl-[0px] md:mb-[40px] lg:pr-0 relative text-left ">
                            <div className="mb-7">
                                <h3 className="text-[24px] font-bold font-base-font text-white capitalize">Contact me</h3>
                            </div> <ul>
                                <li className="relative mb-[8px] block flex items-center">
                                    <Phone size={16} className="text-white mr-2" /> 
                                    <span
                                        className="pl-[15px] text-white hover:text-[#59C378] transition-all cursor-pointer"
                                    >
                                        +91 823 497 1938
                                    </span>
                                </li>
                                <li className="relative mb-[8px] block flex items-center">
                                    <Mail size={16} className="text-white mr-2" />
                                    <span
                                        className="pl-[15px] text-white hover:text-[#59C378] transition-all cursor-pointer"
                                    >
                                        muzammilkhan.code@gmail.com
                                    </span>
                                </li>
                                <li className="relative mb-[8px] block flex items-center">
                                    <MapPin size={16} className="text-white mr-2" />
                                    <span
                                        className="pl-[15px] text-white hover:text-[#59C378] transition-all cursor-pointer"
                                    >
                                        Vijay Nagar, Indore
                                    </span>
                                </li>
                            </ul>
                        </div>
                        {/* <div className=" md:mb-[40px] lg:pr-0 relative text-left ">
                            <div className="mb-6">
                                <h3 className="text-[24px] font-bold font-base-font text-white capitalize">Innovative Solutions</h3>
                            </div>
                            <p className="text-white text-[16px] mb-[10px]">Creating innovative web solutions, one project at a time.</p>
                            <form className=" mt-[25px] relative" onSubmit={SubmitHandler}>
                                <div className="input-1">
                                    <input type="email" className="focus:outline-0 w-full bg-[#232925] h-[50px]  text-white py-[6px] px-[15px] border border-[#222623]" placeholder="Email Address *" required />

                                </div>
                                <div className="absolute right-[20px] top-[50%]  -translate-y-1/2">
                                    <button className=" text-white text-[20px]" type="submit"><i className="ti-email"></i></button>
                                </div>
                            </form>
                        </div> */}
                    </div>
                </div>

                <div className="absolute top-[-140%] right-[0] -z-10">
                    <svg className="fill-[#59C378]" width="1319" height="1567" viewBox="0 0 1319 1567" fill="none">
                        <g filter="url(#filter0_f_39_3833)">
                            <circle cx="803" cy="803" r="303" fillOpacity="0.5" />
                        </g>
                        <defs>
                            <filter id="filter0_f_39_3833" x="0" y="0" width="1606" height="1606"
                                filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_39_3832" />
                            </filter>
                        </defs>
                    </svg>
                </div>
            </div>
            <div className="wraper">
                <div className=" border-t-1 border-[#ffffff0d] relative">
                    <div className="h-[1px] absolute left-[15px] top-0 bg-[#ffffff0d] w-[calc(100%+30px)]"></div>
                    <p className="text-center text-white text-[14px] py-[20px]"><p>Crafted with passion and a whole lot of ☕</p></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;