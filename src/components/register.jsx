import React, {useState } from 'react'


function Register() {
    const[Register,setRegister] = useState(true);
    const[Name,setName] = useState('');
    const[PhoneNumber,setPhoneNumber] = useState('')
    const[Password,setPassword] = useState('') 
    // const[login,setLogin] = useState(false);
    // const[signup,setSignup] = useState(false);

    function handleSubmit(e){
        e.preventDefault();
        const info=[{PhoneNumber:PhoneNumber,Password:Password}]; 
         console.log(info)
    }
    function handleSign(e){
      e.preventDefault();
      const info=[{Name :Name, PhoneNumber:PhoneNumber,Password:Password}]; 
       console.log(info)
  }
    function handleChangeRegister(){
          setRegister(!Register)
    }
  return (
    <div className="register-page my-5 ">
        <div className=" my-5 form-page">
           <div className="rounded-4  bg-white">
            <div className="header-form d-flex align-items-center justify-content-evenly">
            <button type='button' id='login' onClick={handleChangeRegister} className='p-3 w-50 btn-outline-danger' style={{ background: Register ? '#dc3545' : '' , color:Register ? '#f8f9fa ' : ''}}
            >ورود
            </button>
            <button
              type='button'
              id='signup'
              onClick={handleChangeRegister}
              className='p-3 w-50 btn-outline-danger'
              style={{ background: Register ? '' : '#dc3545' ,
              color: Register ? '' : '#f8f9fa'
              }}
            >
              عضویت
            </button>
            </div>
            <div className="form-content rounded-4 bg-white mt-5">
                <div className={`login-content p-4  ${Register ? 'd-block w3-animate-opacity': 'd-none'}`} id='login-content'>
                   <form action="" method='post' onSubmit={handleSubmit}>
                    <label htmlFor="phone-id" className='form-label'>شماره تلفن :</label>
                    <input type="text" className='form-control px-3 py-1' value={PhoneNumber} onChange={(e)=>{setPhoneNumber(e.target.value)}} placeholder='شماره تلفن خود را وارد کنید ...'/>
                    <label htmlFor="phone-id" className='form-label'>رمز عبور :</label>
                    <input type="password" className='form-control px-3 py-1' value={Password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="رمز عبور خود را وارد کنید ..."/>
                    
                    <button type='submit' className='w3-animate-opacity p-3 btn-outline-danger mt-5 mx-auto d-block'>ورود</button>
                   </form>
                </div>
                <div className={`p-4 4 ${Register ? 'd-none': 'd-block w3-animate-opacity'}`}  >
                <form action="" method='post' onSubmit={handleSign}>
                    <label htmlFor="phone-id" className='form-label'>نام کاربری : </label>
                    <input type="text" className='form-control px-3 py-1' value={Name} onChange={(e)=>{setName(e.target.value)}} placeholder='نام خود را وارد کنید ...'/>
                    <label htmlFor="phone-id" className='form-label'>شماره تلفن :</label>
                    <input type="text" className='form-control px-3 py-1' value={PhoneNumber} onChange={(e)=>{setPhoneNumber(e.target.value)}} placeholder='شماره تلفن خود را وارد کنید ...'/>
                    <label htmlFor="phone-id" className='form-label'>رمز عبور :</label>
                    <input type="password" className='form-control px-3 py-1' value={Password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="رمز عبور خود را وارد کنید ..."/>
                    
                    <button type='submit' className='p-3 btn-outline-danger mt-5 mx-auto d-block'>عضویت</button>
                   </form>
                </div>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Register