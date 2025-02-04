import Link from "next/link";
import { FaGithub, FaLinkedin, FaDiscord, FaWhatsapp } from "react-icons/fa";

const socials = [
    {
        icon: <FaLinkedin />,
        path: "",
    },
    {
        icon: <FaGithub />,
        path: "",
    },
    {
        icon: <FaWhatsapp />,
        path: "",
    },
    {
        icon: <FaDiscord />,
        path: "",
    },
];

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} className={iconStyles}>
                        {item.icon}
                    </Link>
                );
            })}
        </div>
    );
};

export default Social;
