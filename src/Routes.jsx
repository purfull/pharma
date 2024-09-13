import { FaHome } from "react-icons/fa";
import { MdOutlineContacts } from "react-icons/md";
import { SiMarketo } from "react-icons/si";
import { PiCirclesFourFill, PiCirclesFourThin } from "react-icons/pi";

export const routesPath = [
    {
        title: "Home",
        path: "/",
        icon: <FaHome size={17} />,
    },
    {
        title: "Marketing",
        icon: <PiCirclesFourFill  size={19} />,
        sublinks: [
            {
                type: "Contacts",
                path: "/Contacts",
                icon: <MdOutlineContacts size={15} />,
            },
        ],
    },
];