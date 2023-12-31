
import { useState } from 'react';
import { FaChevronRight } from "react-icons/fa6";
import img1 from '../../../assets/images/Womens’ & Girls’ Fashion.png'
import img2 from '../../../assets/images/Health & Beauty.png'
import img3 from '../../../assets/images/Watches, Bags, Jewellery.png'
import img4 from "../../../assets/images/Men's & Boys' Fashion.png"
import img5 from "../../../assets/images/Mother & Baby.png"
import img6 from "../../../assets/images/Electronics Devices.png"
import img7 from "../../../assets/images/TV & Home Appliances.png"
import img8 from "../../../assets/images/Electronic Accessories.png"
import img9 from "../../../assets/images/Groceries.png"
import img10 from "../../../assets/images/Home & Lifestyle.png"
import img11 from "../../../assets/images/Sports & Outdoors.png"
import img12 from "../../../assets/images/Automobile 1.png"
import img13 from "../../../assets/images/Computer and laptop.png"
import img14 from "../../../assets/images/Pet Supplies.png"
const Banner = () => {
    const menus = [
        {
            "id": 1,
            "title": "Womens’ & Girls’ Fashion",
            "img": img1,
            "submenu": "false"
        },
        {
            "id": 2,
            "title": "Health & Beauty",
            "img": img2,
            "submenu": "false"
        },
        {
            "id": 3,
            "title": "Watches, Bags, Jewellery",
            "img": img3,
            "submenu": "true",
            "submenuItems": [
                {
                    "id": 1,
                    "title": "kids bags",
                    "subsubmenu": "false"
                },
                {
                    "id": 2,
                    "title": "laptop bags & cases",
                    "subsubmenu": "false"
                },
                {
                    "id": 3,
                    "title": "Luggage",
                    "subsubmenu": "false"
                },
                {
                    "id": 4,
                    "title": "Travel Bags",
                    "subsubmenu": "false"
                },
                {
                    "id": 5,
                    "title": "Men’s bag",
                    "subsubmenu": "false"
                },
                {
                    "id": 6,
                    "title": "Women’s Bag",
                    "subsubmenu": "true",
                    "subsubmenuItems": [
                        {
                            "id": 1,
                            "title": "Backpacks"
                        },
                        {
                            "id": 2,
                            "title": "Cross Body & Shulder Bags"
                        },
                        {
                            "id": 3,
                            "title": "Bag Charms& Accessories"
                        },
                        {
                            "id": 4,
                            "title": "Clutches"
                        },
                        {
                            "id": 5,
                            "title": "Top-Handle Bags"
                        },
                        {
                            "id": 6,
                            "title": "Tote bags"
                        },
                        {
                            "id": 7,
                            "title": "wallets"
                        }
                    ]
                },
                {
                    "id": 7,
                    "title": "Men’s Watches",
                    "subsubmenu": "false"
                },
                {
                    "id": 8,
                    "title": "Women’s Watches",
                    "subsubmenu": "false"
                },
                {
                    "id": 9,
                    "title": "Kids Watches",
                    "subsubmenu": "false"
                },
                {
                    "id": 10,
                    "title": "women’s jewellery",
                    "subsubmenu": "false"
                },
                {
                    "id": 11,
                    "title": "men’s jewellery",
                    "subsubmenu": "false"
                },
                {
                    "id": 12,
                    "title": "sunglasses",
                    "subsubmenu": "false"
                }
            ]
        },
        {
            "id": 4,
            "title": "Men's & Boys' Fashion",
            "img": img4,
            "submenu": "false"
        },
        {
            "id": 5,
            "title": "Mother & Baby",
            "img": img5,
            "submenu": "false"
        },
        {
            "id": 6,
            "title": "Electronics Devices",
            "img": img6,
            "submenu": "false"
        },
        {
            "id": 7,
            "title": "TV & Home Appliances",
            "img": img7,
            "submenu": "false"
        },
        {
            "id": 8,
            "title": "Electronic Accessories",
            "img": img8,
            "submenu": "false"
        },
        {
            "id": 9,
            "title": "Groceries",
            "img": img9,
            "submenu": "false"
        },
        {
            "id": 10,
            "title": "Home & Lifestyle",
            "img": img10,
            "submenu": "false"
        },
        {
            "id": 11,
            "title": "Sports & Outdoors",
            "img": img11,
            "submenu": "false"
        },
        {
            "id": 12,
            "title": "Automobile",
            "img": img12,
            "submenu": "false"
        },
        {
            "id": 13,
            "title": "Computer and laptop",
            "img": img13,
            "submenu": "false"
        },
        {
            "id": 14,
            "title": "Pet Supplies",
            "img": img14,
            "submenu": "false"
        }
    ]
    const [submenuOpen, setSubmenuOpen] = useState(false);
    const [subsubmenuOpen, setSubsubmenuOpen] = useState(false);
    const handleMouseEnter = () => {
        setSubmenuOpen(true);
    };

    const handleMouseLeave = () => {
        setSubmenuOpen(false);
    };
    const handleMouseEnterTwo = () => {
        setSubsubmenuOpen(true)
    };

    const handleMouseLeaveTwo = () => {
        setSubsubmenuOpen(false)
    };
    return (

        <div className="relative bg-[url(https://i.ibb.co/CV4qthm/slide-banner.png)] bg-top  bg-no-repeat max-h-screen">
            <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>
            <div className="relative mx-auto max-w-screen-xl lg:flex lg:items-center">
                <div className="max-w-xs text-center ltr:sm:text-left rtl:sm:text-right bg-white">
                    <div>
                        <div className="bg-white">
                            <div className="flex-col flex">
                                <div className="w-full border-b-2 border-gray-200">
                                </div>
                                <div className="flex bg-gray-100  overflow-x-hidden">
                                    <div className="bg-white lg:flex md:w-80 md:flex-col hidden">
                                        <div className="flex-col pt-5 flex overflow-y-auto">
                                            <div className="h-full flex-col justify-between px-4 flex">
                                                <div className="space-y-4">
                                                    <div className="bg-top bg-cover space-y-1">
                                                        <ul className='pt-2 h-full'>
                                                            {
                                                                menus?.map((menu) =>
                                                                    <>
                                                                        {menu.submenu === "true" ?
                                                                            <li key={menu.id}
                                                                                onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='font-medium text-sm items-center rounded-lg text-gray-900 px-4 pt-3 flex transition-all duration-200  group cursor-pointer hover:text-[#F97316]'>
                                                                                <img src={menu.img} alt="" className='mr-2' />
                                                                                <span>{menu.title}</span>
                                                                                {menu.submenu === "true" && submenuOpen && <FaChevronRight className='ml-9'></FaChevronRight>}
                                                                                {menu.submenu === "true" && submenuOpen && <ul className='absolute left-72 bg-white top-0 w-[20%]'>
                                                                                    {menu.submenuItems.map((submenu) =>
                                                                                        <>
                                                                                            {submenu.subsubmenu === "true" ?
                                                                                                <li key={submenu.id} onMouseEnter={handleMouseEnterTwo} onMouseLeave={handleMouseLeaveTwo} className='font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2 flex transition-all duration-200  group cursor-pointer hover:text-[#F97316]'>
                                                                                                    <span>{submenu.title}</span>
                                                                                                    {submenu.subsubmenu === "true" && subsubmenuOpen && <FaChevronRight className='ml-9'></FaChevronRight>}
                                                                                                    {submenu.subsubmenu=== "true" && subsubmenuOpen && <ul className='absolute left-64 bg-white top-0 w-full h-full'>
                                                                                                        {submenu.subsubmenuItems.map((menuitem, index) =>
                                                                                                            <>
                                                                                                                <li key={index} className='font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2 flex transition-all duration-200  group cursor-pointer hover:text-[#F97316]'>
                                                                                                                    <span>{menuitem.title}</span>
                                                                                                                </li>
                                                                                                            </>
                                                                                                        )}
                                                                                                    </ul>
                                                                                                    }
                                                                                                </li>
                                                                                                :
                                                                                                <li key={submenu.id} className='font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2 flex transition-all duration-200  group cursor-pointer hover:text-[#F97316]'>
                                                                                                    <span>{submenu.title}</span>
                                                                                                </li>
                                                                                            }
                                                                                        </>
                                                                                    )}
                                                                                </ul>}
                                                                            </li>
                                                                            :
                                                                            <li key={menu.id}
                                                                                className='font-medium text-sm items-center rounded-lg text-gray-900 px-4 pt-3 flex transition-all duration-200  group cursor-pointer hover:text-[#F97316]'>
                                                                                <img src={menu.img} alt="" className='mr-2' />
                                                                                <span>{menu.title}</span>
                                                                            </li>
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