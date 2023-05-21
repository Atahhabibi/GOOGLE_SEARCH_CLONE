import { quickLinks, settingMenu } from "../utils/Constants";

const Footer = () => {
    return <div className="bg-[#f2f2f2]">

        <div className="flex py-[15px] px-[15px] md:px-[30px] border-b border-[#dadce0] ">
            <span className="text-[#70767a] text-[15px] leading-none mx-auto md:mx-0">
               United State of America
            </span>
        </div>

        <div className="flex flex-col md:flex-row justify-between py-12 md:py-0 md:px-[15px]">

            <div className="flex justify-center">
                {
                    quickLinks.map((link,index)=>{
                        return <span key={index} className="text-[#70757a] text-[12px] md:text-[14px] leading-none p-[10px] md:p-[15px]">
                            {link}
                        </span>
                    })
                }
            </div>
            <div className="flex justify-center">
                {
                    settingMenu.map((link,index)=>{
                        return <span key={index} className="text-[#70757a] text-[12px] md:text-[14px] leading-none p-[10px] md:p-[15px]">
                            {link}
                        </span>
                    })
                }
            </div>

        </div>



    </div>;
};

export default Footer;
