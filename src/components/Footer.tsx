

import { Link } from "react-router-dom";

const MY__ACCOUNT = [
    {
        display: "Author Profile",
        url: "/seller-profile",
    },
    {
        display: "Create Item",
        url: "/create",
    },
    {
        display: "divlection",
        url: "/market",
    },
    {
        display: "Edit Profile",
        url: "/edit-profile",
    },
];

const RESOURCES = [
    {
        display: "Help Center",
        url: "#",
    },
    {
        display: "Partner",
        url: "#",
    },
    {
        display: "Community",
        url: "#",
    },
    {
        display: "Activity",
        url: "#",
    },
];

const COMPANY = [
    {
        display: "About",
        url: "#",
    },
    {
        display: "Career",
        url: "#",
    },
    {
        display: "Ranking",
        url: "#",
    },
    {
        display: "Contact Us",
        url: "/contact",
    },
];

const Footer = () => {
    return (

        <div>
            <div >
                <div className="logo">
                    <h2 className="d-flex gap-2 align-items-center ">
                        <span>
                            <i ></i>
                        </span>
                        NFTs
                    </h2>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptate, quod repellat! Quis quos dolorum tenetur fuga?
                        Aspernatur rerum quae amet.
                    </p>
                </div>
            </div>

            <div >
                <h5>My Account</h5>
                <div className="list__group">
                    {MY__ACCOUNT.map((item, index) => (
                        <div key={index} className="list__item">
                            <Link to={item.url}> {item.display} </Link>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h5>Resources</h5>
                <div className="list__group">
                    {RESOURCES.map((item, index) => (
                        <div key={index} className="list__item">
                            <Link to={item.url}> {item.display} </Link>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mb-4">
                <h5>Company</h5>
                <div className="list__group">
                    {COMPANY.map((item, index) => (
                        <div key={index} className="list__item">
                            <Link to={item.url}> {item.display} </Link>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mb-4">
                <h5>Newsletter</h5>
                <input type="text" className="newsletter" placeholder="Email" />
                <div className="social__links d-flex gap-3 align-items-center ">
                    <span>
                        <Link to="#">
                            <i className="ri-facebook-line"></i>
                        </Link>
                    </span>
                    <span>
                        <Link to="#">
                            <i className="ri-instagram-line"></i>
                        </Link>
                    </span>
                    <span>
                        <Link to="#">
                            <i className="ri-twitter-line"></i>
                        </Link>
                    </span>
                    <span>
                        <Link to="#">
                            <i className="ri-telegram-line"></i>
                        </Link>
                    </span>
                    <span>
                        <Link to="#">
                            <i className="ri-discord-line"></i>
                        </Link>
                    </span>
                </div>
            </div>

            <div className=" mt-4 text-center">
                <p className="copyright">
                    {" "}
                    Copyrights 2022, Developed by Muhibur Rahman. @Muhib's Tech Diary
                    All Rights Reserved.{" "}
                </p>
            </div>
        </div>


    );
};

export default Footer;
