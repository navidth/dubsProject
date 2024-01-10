import "../assest/css/App.css";
import logo from "../assest/images/logo/remove bg.png";
import { BsPersonCircle, BsCart3 } from "react-icons/bs";
import { BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineClose, AiOutlineArrowLeft } from "react-icons/ai";
import { VscChromeClose } from "react-icons/vsc";
import { Tooltip } from "react-tooltip";
import { Link } from "react-router-dom";
import { useRef, useState} from "react";
import DropdownMenu from "./DropdownMenu";
import { itemNamesBlades, itemNamesRubbers, Table_Ball, Clothings_Shoes } from './Data';
import { useContext } from "react";
import { CartContex  } from "../context/CartContex";
import CartProduct from "./CartProduct";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const Navbar = () => {
  const cart = useContext(CartContex)
  const productCount = cart.items.reduce((sum, product) => sum + product.quantity , 0)
  //func for items li menu........................................
  const [menuOpen, setMenuOpen] = useState(false);
  function toggleMenu() {
    setMenuOpen(!menuOpen);
    setBladesMenu(false)
  }
  const [bladesMenu, setBladesMenu] = useState(false);
  function bladeMenu() {
    setBladesMenu(!bladesMenu);
  }

  const [RuberrsMenu, setRuberrsMenu] = useState(false);
  function ruberrsMenu() {
    setRuberrsMenu(!RuberrsMenu);
  }

  const [TableItem, setTableMenu] = useState(false);
  function tableMenu() {
    setTableMenu(!TableItem);
  }

  const [Clothing, setClothingMenu] = useState(false);
  function clothingsMenu() {
    setClothingMenu(!Clothing);
  }
  //func for searchbox................................................
  const [search, setSearch] = useState("");
  const searchBoxRef = useRef(null);
  const openSearch = (e) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);
    searchBoxRef.current.style.height = "100%";
  };
  const closeSearch = () => {
    searchBoxRef.current.style.height = "0%";
  };
  //func for hover dropdown...........................................
  const [IshoverBlades, setIsHoveredBlades] = useState(false);
  const handleMouseEnterBlades = () => {
    setIsHoveredBlades(true);
  };
  const handleMouseLeaveBlades = () => {
    setIsHoveredBlades(false);
  };
  const [IshoverRubbers, setIsHoveredRubbers] = useState(false);
  const handleMouseEnterRuberss = () => {
    setIsHoveredRubbers(true);
  };
  const handleMouseEnterRubersleave = () => {
    setIsHoveredRubbers(false);
  };
  const [Ishovertb, setIsHoveredTB] = useState(false);
  const handleMouseEnterTB = () => {
    setIsHoveredTB(true);
  };
  const handleMouseEnterTBleave = () => {
    setIsHoveredTB(false);
  };
  const [IshoverCS, setIsHoveredCS] = useState(false);
  const handleMouseEnterCS = () => {
    setIsHoveredCS(true);
  };
  const handleMouseEnterCSleave = () => {
    setIsHoveredCS(false);
  };

  const[showModal, setShowModal] =useState(false);
  const handleShowModal = () => {
    setShowModal(!showModal);
  }


  return(
    <div className="bg-light shadownavbar w-100 w3-animate-opacity w3-container">
      <div className="justify-content-center align-items-center">
        {/* top navbar */}
        <div className=" d-flex justify-content-between navbartop">
          <div className=""></div>
          {/* brand logo  */}
          <div className="nav-center mt-2">
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                class="tt"
                data-tooltip-id="my-tooltip"
                data-tooltip-content="!با ما به روز باشید "
                data-tooltip-place="left"
              ></img>
            </Link>
          </div>
          {/* <!-- ....login and buy.... --> */}
          <div class="nav-left mt-3">
            <button
              data-tooltip-id="my-tooltip"
              data-tooltip-content="جستجو"
              className="tt btn search"
              onClick={openSearch}
            >
              <BiSearchAlt2
                size={"25px"}
                className="icons icons-search"
              ></BiSearchAlt2>{" "}
            </button>

            <button
              data-tooltip-id="my-tooltip"
              data-tooltip-content="سبد خرید"
              className="tt btn"
              onClick={handleShowModal} >
              {productCount > 0 ? <span className="badge bg-danger" style={{position:'absolute', left:'88px', top:'10px', opacity:'0.95'}}>{productCount}</span> : null}
              <BsCart3
                size={"25px"}
                className="icons bsbuy icons-buy"
              ></BsCart3>
            </button>
            <Modal show={showModal} onHide={handleShowModal}>
              <Modal.Header closeButton closeVariant="black" className='d-flex'>
                 <Modal.Title className='mx-auto fs-3 fw-700'>سبد خرید</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {productCount > 0 ? (<>
                 {cart.items.map((item,index) =>(
                  <CartProduct key={index} id={item.id} quantity={item.quantity}></CartProduct>
                   ))}
                 </>) : (<h3>هیچ خریدی انجام نشده است </h3>)}
                </Modal.Body>
              <Modal.Footer className='d-flex justify-content-between'>
                <Button variant="secondary" onClick={handleShowModal}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleShowModal}>
                  Save Changes
                </Button>
             </Modal.Footer>
            </Modal>
            {/* login or register */}
            <Link
              to="/login"
              data-tooltip-content="عضویت"
              data-tooltip-id="my-tooltip"
              className=" tt btn "
            >
              <BsPersonCircle
                size={"25px"}
                className="icons icons-login"
              ></BsPersonCircle>
            </Link>
          </div>
        </div>

        {/* <!-- menu --> */}
        <nav className="navbar navbar-expand-sm">
          <div className="container-xxl">
            <button
              className="navbar-toggler mt-3"
              type="button"
              onClick={toggleMenu}
              aria-controls="navbarText"
            >
              <span className="navbar-toggler-icon text-light"></span>
            </button>
            <div
              className={`collapse navbar-collapse offcanvas offcanvas-end ms-5 w-100 
              ${menuOpen ? "show" : ""}`}
              id="navbarText"
            >
              <ul className="navbar-nav mb-0">
                <button
                  type="button"
                  className="btn d-flex justify-content-end ms-2"
                  onClick={toggleMenu}>
                  <VscChromeClose
                    size={"25px"}
                    className="d-block d-sm-none btn-outline-dark"
                  ></VscChromeClose>
                </button>
                {/*---------------------------------منو چوب راکت */}
                <li
                  className="nav-item ms-2 dropdown drop d-flex">
                  <Link
                    to="/blades"
                    className="nav-link ms-xl-5 ms-2"
                    onClick={toggleMenu}
                    onMouseEnter={handleMouseEnterBlades}
                    onMouseLeave={handleMouseLeaveBlades}>
                    چوب راکت 
                  </Link>
                  <button
                    className="btn d-block d-sm-none btn-outline-danger ms-2"
                    type="button"
                    onClick={bladeMenu}
                    id="btn-menu"
                  >
                    <AiOutlineArrowLeft size={"18px"} color={'black'}></AiOutlineArrowLeft>
                  </button>
                </li>
                <ul className={`dropdown-menu drop-menu ${IshoverBlades || bladesMenu ? 'dropdown-blades ': ''}`} onMouseEnter={handleMouseEnterBlades}
                onMouseLeave={handleMouseLeaveBlades}
                onClick={toggleMenu}
                
                >
                {IshoverBlades}
                {<DropdownMenu names={itemNamesBlades}/>}
                </ul>
                
                {/*   --------------------------  منو رویه راکت*/}
                <li className="nav-item ms-2 dropdown drop d-flex">
                  <Link
                    to="/rubbers"
                    className="nav-link ms-xl-5 ms-2"
                    onClick={toggleMenu}
                    onMouseEnter={handleMouseEnterRuberss}
                  onMouseLeave={handleMouseEnterRubersleave}
                  >
                    رویه راکت
                  </Link>      
                  <button
                    className="btn d-block d-sm-none btn-outline-danger ms-2"
                    type="button"
                    onClick={ruberrsMenu}
                    id="btn-menu"
                  >
                    <AiOutlineArrowLeft size={"18px"} color={'black'}></AiOutlineArrowLeft>
                  </button>
                </li>
                  <ul className={`dropdown-menu drop-menu ${IshoverRubbers || RuberrsMenu ? ' dropdown-blades' : ''}`}
                  onMouseEnter={handleMouseEnterRuberss}
                  onMouseLeave={handleMouseEnterRubersleave}>
                 {IshoverRubbers}
                 <DropdownMenu names={itemNamesRubbers}/>
                 </ul>
                {/* ------------------------------- منو میز و توب */}
                <li className="nav-item ms-2 dropdown drop">
                  <Link        
                    className="nav-link ms-xl-5 ms-2"
                    onClick={toggleMenu}
                    to="/table-ball"
                    onMouseEnter={handleMouseEnterTB}
                    onMouseLeave={handleMouseEnterTBleave}
                  >
                    میز و توپ پینگ پنگ
                  </Link>
                  <button
                    className="btn d-block d-sm-none btn-outline-danger ms-2"
                    type="button"
                    onClick={tableMenu}
                    id="btn-menu"
                  >
                    {" "}
                    <AiOutlineArrowLeft size={"18px"} color={'black'}></AiOutlineArrowLeft>
                  </button>
                </li>
                {/* ${TableItem ? " show border border-0" : ""
                    } */}
                <ul
                    className={`dropdown-menu drop-menu ${Ishovertb || TableItem ? "dropdown-blades" : ''}`}
                    id="ul-menu"
                    onMouseEnter={handleMouseEnterTB}
                    onMouseLeave={handleMouseEnterTBleave}
                >
                  {Ishovertb}{<DropdownMenu names={Table_Ball}/>}
                </ul>
                {/* -----------------------------  منو لباس و پوشاک */}
                <li className="nav-item ms-2 dropdown drop" 
                >
                  <Link
                    className="nav-link ms-xl-5 ms-2"
                    onClick={toggleMenu}
                    to="/clothing"
                    onMouseEnter={handleMouseEnterCS}
                    onMouseLeave={handleMouseEnterCSleave}
                  >
                    پوشاک و کفش
                  </Link>
                  <button
                    className="btn d-block d-sm-none btn-outline-danger ms-2"
                    data-bs-target="dropdown-menu"
                    type="button"
                    onClick={clothingsMenu}
                    id="btn-menu"
                  >
                   
                    <AiOutlineArrowLeft size={"18px"} color={'black'}></AiOutlineArrowLeft>
                  </button>
                </li>
                <ul
                    className={`dropdown-menu drop-menu ${IshoverCS || Clothing ? "dropdown-blades" : ''}`}
                    onMouseEnter={handleMouseEnterCS}
                    onMouseLeave={handleMouseEnterCSleave}
                    id="ul-menu"
                >
                  {IshoverCS}{<DropdownMenu names={Clothings_Shoes}/>}
                </ul>
                {/*-------------------------------- منو لوازم جانبی */}
                <li className="nav-item ms-2 dropdown drop"id="ul-menu">
                  <Link
                    className="nav-link ms-xl-5 ms-2"
                    onClick={toggleMenu}
                    to="/accessories"
                  >
                    لوازم جانبی
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="overlay" id="searchbox" ref={searchBoxRef}>
          <button type="button" className="btn btnclose" onClick={closeSearch}>
            <AiOutlineClose
              color="white"
              size={"35px"}
              className="m-3"
            ></AiOutlineClose>
          </button>
          <div className="d-flex justify-content-center align-items-center overlay-coontent">
            <input
              type="text"
              placeholder="جستجو کنید "
              className="overlay-content"
              value={search}
              onChange={openSearch}
            />
          </div>
        </div>
      </div>
      <Tooltip
        id="my-tooltip"
        className="custom-tooltip"
        style={{
          opacity: "0.3",
          backgroundColor: "var(--bs-danger)",
          color: "var(--bs-light)",
          border: "1px solid #ddd",
          direction: "ltr",
          borderRadius: "14px",
          padding: "8px",
          fontSize: "12px",
        }}
      ></Tooltip>
    </div>
  );
};
export default Navbar;
