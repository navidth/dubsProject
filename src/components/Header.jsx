import { BiSolidChevronLeft } from "react-icons/bi";
const Header = (props)=>{
    return(
        <div class="container-sm  w3-animate-top">
        <div class="opacity-75 fw-700 d-flex align-align-items-baseline f-mini">
          <p class="text-decoration-none text-body">{props.pageFather}</p>
          <BiSolidChevronLeft size={'20px'} className='mx-2 icon-mini'></BiSolidChevronLeft>
        <p class="text-decoration-none text-body">{props.pageName}</p></div>
        {/* <!----------------- header------------- --> */}
        <h1 class="h1 mt-2 fw-bold fww w3-border-top pt-2">{props.pageName}</h1>
      </div>
    )
}
export default Header;