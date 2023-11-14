import { AiFillFilter} from "react-icons/ai";
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import Slider from 'react-slider';
const Filtermobile = ()=>{
    return(
<div className="category-resualt mx-5 d-md-none d-block font-size-small">

<div className="filter collapse container" id="item-filter">
<div className="resualt-cat">
<Link to='/Blades/Butterfly' className="text-decoration-none d-block text-body small mb-1 fw-bolder">چوب راکت باترفلای </Link>
<Link to='/Blades/Gewo' className="text-decoration-none d-block text-body small mb-1 ">چوب راکت جوو  </Link>
<Link to='/Blades/Donic' className="text-decoration-none d-block text-body small mb-1 ">چوب راکت دونیک     </Link>
<Link to='/Blades/Others' className="text-decoration-none d-block text-body small mb-1 ">چوب راکت سایر برند ها</Link>
</div>
<div className="price-boxx border-top">

</div>
</div>
</div>
)}
export default Filtermobile;
