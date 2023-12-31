import {React,useState} from 'react';

const ButtonScroll = (props) => {
    const[changeItems,setChangeItems] = useState(true);
    return (
        <div className="d-flex justify-content-around">
        <a href='#one' onClick={() => setChangeItems(upState => (upState ? upState : !upState))} className='px-3 py-2 w-50 fs-4' style={{ background: changeItems ? '#dc3545' : '' , color:changeItems ? '#f8f9fa ' : ''}}>
            {props.headline1}
        </a>
        <a  href="#two" onClick={() => setChangeItems(prevState => (prevState ? !prevState : prevState))} className='px-3 py-2 w-50 fs-4' style={{ background: changeItems ? '' : '#dc3545' , color:changeItems ? ' ' : '#f8f9fa'}}>
            {props.headline2}
        </a >
        </div>
    );
}

export default ButtonScroll;
