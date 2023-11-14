import { MdExpandMore } from "react-icons/md";
import{Link} from 'react-router-dom'
const Resultcat =({pageFather,names})=>{
return(
  <div className="card bg-light mt-4">
    <h6 className="text-end my-3 me-3 fw-bold card-header-tabs"> دسته بندی نتایج</h6>
  <div className="d-flex flex-column card-body border-top border-muted">
    <div className="d-flex ">
      <Link to='/Blades' className="text-decoration-none ">
      <MdExpandMore className='text-muted' size={'22px'}/>
    <Link to='' className="text-decoration-none w3-text-deep-orange">{pageFather}</Link>
    </Link>
  </div>
   <div className="d-flex flex-column me-4  mt-2">
   {names.map((name,index)=>(
    <li className="list-group-item" key={index}>
      <Link to={name.url} className='text-decoration-none text-body item-result small mb-1'>{name.name}</Link>
    </li>
   ))}
   </div>
  </div>
</div>
)
}
export default Resultcat;