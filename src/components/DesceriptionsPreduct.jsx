import {React,useState} from 'react';

const DesceriptionsPreduct = (props) => {
    const[readMe,setReadMe] = useState (false);
    const readMeBtn = () => {
        setReadMe(!readMe)
    }
    
    return (
        <div id={props.id} className="desceriptions bg-white">
            <section className='headering-desceription bg-danger text-white  btn  w-100 mx-auto py-1'>
                <h3>
                    توضیحات
                </h3>
            </section>
        <section className="header-desceription px-3 py-3">
            <h2 > معرفی {props.products.title}</h2>
         </section>
         <section>
             <h4 className='px-4 mx-3 fw-700 letter-spacing text-muted'> معرفی کوتاه</h4>
             {readMe && 
             <div>
                <p id='text' className='p-desceriptions text-muted'>
                    {props.products.description}
                </p>
             </div>
             }
              {props.products.description.length > 400 ? (
                    <button type='button' onClick={readMeBtn} className='fs-4 btn btn-readMe mx-auto d-block rounded-5 px-5'>
                        {readMe ? "مخفی کردن" : "نمایش کامل"}
                    </button>
                ) : (
                    <p id='text' className='p-desceriptions text-muted'>
                    {props.products.description}
                </p>
                )}
         </section>
        </div> 
    );
}

export default DesceriptionsPreduct;
