import Container from "./Container";
import { RiNftFill } from "react-icons/ri";

const Footer = () => {
    return (
        <Container>


            <div className="w-full h-[50vh] mb-10 text-white bg-slate-950">
                <div >
                    <div className="logo">
                        <h2 className="d-flex gap-2 align-items-center ">
                            <span>
                                <RiNftFill />
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

                        <div className="list__item">
                            {/* <Link to={item.url}> {item.display} </Link> */}
                        </div>

                    </div>
                </div>

                <div>
                    <h5>Resources</h5>
                    <div className="list__group">

                        <div className="list__item">
                            {/* <Link to={item.url}> {item.display} </Link> */}
                        </div>

                    </div>
                </div>

                <div className="mb-4">
                    <h5>Company</h5>
                    <div className="list__group">

                        <div className="list__item">
                            {/* <Link to={item.url}> {item.display} </Link> */}
                        </div>

                    </div>
                </div>

                <div className="mb-4">
                    <h5>Newsletter</h5>
                    <input type="text" className="newsletter" placeholder="Email" />
                    <div className="social__links d-flex gap-3 align-items-center ">
                        {/* <span>
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
                    </span> */}
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

        </Container>


    );
};

export default Footer;
