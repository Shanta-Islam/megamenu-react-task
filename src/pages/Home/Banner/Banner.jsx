
import { useState } from 'react';
import menus from '../../../../public/data/data.json';
import { FaChevronRight } from "react-icons/fa6";
const Banner = () => {
    const [submenuOpen, setSubmenuOpen] = useState(false);
    const [subsubmenuOpen, setSubsubmenuOpen] = useState(false);

    return (

        <div className="relative bg-[url(https://i.ibb.co/CV4qthm/slide-banner.png)] bg-top  bg-no-repeat">
            <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>
            <div className="relative mx-auto max-w-screen-xl lg:flex lg:items-center">
                <div className="max-w-xs text-center ltr:sm:text-left rtl:sm:text-right bg-white">
                    <div>
                        <div className="bg-white">
                            <div className="flex-col flex">
                                <div className="w-full border-b-2 border-gray-200">
                                </div>
                                <div className="flex bg-gray-100  overflow-x-hidden">
                                    <div className="bg-white lg:flex md:w-64 md:flex-col hidden">
                                        <div className="flex-col pt-5 flex overflow-y-auto">
                                            <div className="h-full flex-col justify-between px-4 flex">
                                                <div className="space-y-4">
                                                    <div className="bg-top bg-cover space-y-1">
                                                        <ul className='pt-2'>
                                                            {
                                                                menus?.map((menu, index) =>
                                                                    <>
                                                                        <li key={index} className='font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2 flex transition-all duration-200  group cursor-pointer'>
                                                                            <span>{menu.title}</span>
                                                                            {menu.submenu && <FaChevronRight onClick={()=> setSubmenuOpen(!submenuOpen)}></FaChevronRight>}
                                                                        </li>
                                                                        {menu.submenu && submenuOpen && <ul className='absolute left-64 bg-white top-0'>
                                                                            {menu.submenuItems.map((submenu, index) =>
                                                                                <>
                                                                                    <li key={index} className='font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2 flex transition-all duration-200  group cursor-pointer'>
                                                                                        <span>{submenu.title}</span>
                                                                                        
                                                                                        {submenu.subsubmenu && <FaChevronRight onClick={()=> setSubsubmenuOpen(!subsubmenuOpen)}></FaChevronRight>}
                                                                                    </li>
                                                                                </>
                                                                            )}
                                                                        </ul>
                                                                        }
                                                                    </>

                                                                )
                                                            }
                                                        </ul>

                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >


                </div>
            </div>
        </div>
    );
};

export default Banner;