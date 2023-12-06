
const TopHeader = () => {
    return (
        <nav className="lg:block w-full items-center bg-[#F0F1F1] h-[25px] hidden">
            <div className="m-auto flex items-center justify-between text-[#434343] text-xs max-w-[1217px]">
                <div className="items-center gap-6 lg:flex ">
                    <p>Language</p>
                    <p>Help Center</p>
                    <p>Helpline: 0964781656</p>
                </div>
                <div className="hidden items-center gap-6 lg:flex">
                    <p>Become a Seller</p>
                    <p>Order Track</p>
                    <p className="text-[#F97316]">Sign up / Login</p>
                </div>
            </div>
        </nav>
    );
};

export default TopHeader;