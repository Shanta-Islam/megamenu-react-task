
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
            "title": "Womens’ & Girls’ Fashion",
            "img": img1
        },
        {
            "title": "Health & Beauty",
            "img": img2
        },
        {
            "title": "Watches, Bags, Jewellery",
            "img": img3,
            "submenu": "true",
            "submenuItems": [
                {
                    "title": "kids bags"
                },
                {
                    "title": "laptop bags & cases"
                },
                {
                    "title": "Luggage"
                },
                {
                    "title": "Travel Bags"
                },
                {
                    "title": "Men’s bag"
                },
                {
                    "title": "Women’s Bag",
                    "subsubmenu": "true",
                    "subsubmenuItems": [
                        {
                            "title": "Backpacks"
                        },
                        {
                            "title": "Cross Body & Shulder Bags"
                        },
                        {
                            "title": "Bag Charms& Accessories"
                        },
                        {
                            "title": "Clutches"
                        },
                        {
                            "title": "Top-Handle Bags"
                        },
                        {
                            "title": "Tote bags"
                        },
                        {
                            "title": "wallets"
                        }
                    ]
                },
                {
                    "title": "Men’s Watches"
                },
                {
                    "title": "Women’s Watches"
                },
                {
                    "title": "Kids Watches"
                },
                {
                    "title": "women’s jewellery"
                },
                {
                    "title": "men’s jewellery"
                },
                {
                    "title": "sunglasses"
                }
            ]
        },
        {
            "title": "Men's & Boys' Fashion",
            "img": img4
        },
        {
            "title": "Mother & Baby",
            "img": img5
        },
        {
            "title": "Electronics Devices",
            "img": img6
        },
        {
            "title": "TV & Home Appliances",
            "img": img7
        },
        {
            "title": "Electronic Accessories",
            "img": img8
        },
        {
            "title": "Groceries",
            "img": img9
        },
        {
            "title": "Home & Lifestyle",
            "img": img10
        },
        {
            "title": "Sports & Outdoors",
            "img": img11
        },
        {
            "title": "Automobile",
            "img": img12
        },
        {
            "title": "Computer and laptop",
            "img": img13
        },
        {
            "title": "Pet Supplies",
            "img": img14
        }
    ]
    const [submenuOpen, setSubmenuOpen] = useState(false);
    const [subsubmenuOpen, setSubsubmenuOpen] = useState(false);

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
                                    <div className="bg-white lg:flex md:w-72 md:flex-col hidden">
                                        <div className="flex-col pt-5 flex overflow-y-auto">
                                            <div className="h-full flex-col justify-between px-4 flex">
                                                <div className="space-y-4">
                                                    <div className="bg-top bg-cover space-y-1">
                                                        <ul className='pt-2 h-full'>
                                                            {
                                                                menus?.map((menu, index) =>
                                                                    <>
                                                                        <li key={index} className='font-medium text-sm items-center rounded-lg text-gray-900 px-4 pt-3 flex transition-all duration-200  group cursor-pointer'>
                                                                            <img src={menu.img} alt="" className='mr-2' />
                                                                            <span>{menu.title}</span>
                                                                            {menu.submenu && <FaChevronRight onClick={() => setSubmenuOpen(!submenuOpen)}></FaChevronRight>}
                                                                        </li>
                                                                        {menu.submenu && submenuOpen && <ul className='absolute left-64 bg-white top-0 w-[20%]'>
                                                                            {menu.submenuItems.map((submenu, index) =>
                                                                                <>
                                                                                    <li key={index} className='font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2 flex transition-all duration-200  group cursor-pointer'>
                                                                                        <span>{submenu.title}</span>

                                                                                        {submenu.subsubmenu && <FaChevronRight onClick={() => setSubsubmenuOpen(!subsubmenuOpen)}></FaChevronRight>}
                                                                                    </li>
                                                                                    {submenu.subsubmenu && subsubmenuOpen && <ul className='absolute left-64 bg-white top-0 w-full h-full'>
                                                                                        {submenu.subsubmenuItems.map((menuitem, index) =>
                                                                                            <>
                                                                                                <li key={index} className='font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2 flex transition-all duration-200  group cursor-pointer'>
                                                                                                    <span>{menuitem.title}</span>


                                                                                                </li>
                                                                                            </>
                                                                                        )}
                                                                                    </ul>
                                                                                    }
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