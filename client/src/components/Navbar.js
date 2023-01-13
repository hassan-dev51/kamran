import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Menu from "../constants/Menu";
import Shop from "../constants/Shop";
import "./navbar.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [news, setNews] = useState(false);
  const [shop, setShop] = useState(false);
  const [blog, setBlog] = useState(false);
  const [pages, setPages] = useState(false);
  const [text, setText] = useState("");

  //close the menu by clicking outside
  const ref = useRef();

  //to toggle the navbar
  const handleNavbar = () => {
    setToggle(!toggle);
  };
  //to close the navbar
  const close = () => {
    if (news) {
      setNews(!news);
      setText("");
    }
    if (shop) {
      setShop(!shop);
      setText("");
    }
    if (blog) {
      setBlog(!blog);
      setText("");
    }
    if (pages) {
      setPages(!pages);
      setText("");
    }
  };
  //to toggle the sub-menu
  const newsFunc = () => {
    setText("News");
    setNews(!news);
  };
  const shopFunc = () => {
    setShop(!shop);
    setText("Shop");
  };

  useEffect(() => {
    const handler = (e) => {
      if (!ref.current.contains(e.target)) {
        setToggle(false);
      }
    };

    document.addEventListener("mousedown", handler);
  });
  return (
    <>
      <header className="header">
        <div className="header-item item-left">
          <div className="logo">
            <Link to="/">Zanzi Sports</Link>
          </div>
        </div>
        {/* menu start here */}
        <div className="header-item item-center">
          <div
            className={`${toggle ? "menu-overlay active" : "menu-overlay"}`}
          ></div>
          <nav className={`${toggle ? "menu active" : "menu"}`} ref={ref}>
            <div
              className={`${
                news || shop || blog || pages
                  ? "mobile-menu-head active"
                  : "mobile-menu-head"
              }`}
            >
              <div className="go-back" onClick={close}>
                <span style={{ fontSize: "12px" }}>Back</span>
              </div>
              <div className={`current-menu-title`}>{text}</div>
              <div
                className="mobile-menu-close"
                onClick={() => setToggle(!toggle)}
              >
                &times;
              </div>
            </div>
            <ul className="menu-main">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className={"menu-item-has-children"}>
                <Link onClick={newsFunc}>Products</Link>
                <div
                  className={`${
                    news
                      ? "sub-menu mega-menu mega-menu-column-4 active"
                      : "sub-menu mega-menu mega-menu-column-4"
                  }`}
                >
                  {Menu.map((currElem) => (
                    <div className="list-item text-center" key={currElem.id}>
                      <Link to={currElem.link}>
                        <img src={currElem.image} alt={currElem.heading} />
                        <h4 className="title">{currElem.heading}</h4>
                      </Link>
                    </div>
                  ))}
                </div>
              </li>
              <li className="menu-item-has-children">
                <Link onClick={shopFunc}>Catagories </Link>
                <div
                  className={`${
                    shop
                      ? "sub-menu mega-menu mega-menu-column-4 active"
                      : "sub-menu mega-menu mega-menu-column-4"
                  }`}
                >
                  {Shop.map((currElem) => (
                    <div className="list-item" key={currElem.id}>
                      <h4 className="title">{currElem.name}</h4>

                      {currElem.sublinks.map((sublink, ind) => (
                        <ul key={ind}>
                          <li>
                            <Link to={sublink.link}>{sublink.title}</Link>{" "}
                          </li>
                        </ul>
                      ))}
                    </div>
                  ))}
                </div>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              {/* <div className="md:ml-0 ml-[10px]">
                <Link to="/products" className="flex my-3">
                  <button className="bg-[#f02d34] hover:bg-gray-300 text-white font-bold py-2 px-4 rounded-full">
                    Sign Up
                  </button>
                </Link>
              </div>
              <div className="md:ml-0 ml-[10px]">
                <Link to="/products" className="flex my-3">
                  <button className=" hover:bg-[#f02d34] hover:text-white  text-secondary-white font-bold py-2 px-4 rounded-full border">
                    Login
                  </button>
                </Link>
              </div> */}
            </ul>
          </nav>
        </div>

        <div className="header-item item-right">
          {/* <!-- mobile menu trigger --> */}
          <div className="mobile-menu-trigger" onClick={handleNavbar}>
            <span>{/* <GiHamburgerMenu /> */}</span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
