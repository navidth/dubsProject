import React, {useState } from 'react'
import { userSchemaLogin, userSchemaSign } from './Validation/UserValidation';

function Register() {
    const[Register,setRegister] = useState(true);
    const[InvalidLogin, setInvalidationLogin] = useState(false);
    const[InvalidSign, setInvalidationSign] = useState(false);
    const[errorsLogin,setErrosLogin] = useState({});
    const[errorsSign,setErrosSign] = useState({});

    // ........handle sybmit users...........................
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const infoLogin={
          PhoneNumber:e.target[0].value,
          Password:e.target[1].value
        };
        const validateLogin = async ()=>{
          try {
            const resualt = await userSchemaLogin.validate(infoLogin, {abortEarly:false})
            setInvalidationLogin(false);
            return resualt;
          } catch (e) {
            setInvalidationLogin(true);
            setErrosLogin(e.errors);
            console.log(e.errors);
          }
        }
         const resualt= await validateLogin(infoLogin)
         console.log(resualt)
    }
    async function handleSign(e){
      e.preventDefault();
      const infoSign={
        Name :e.target[0].value, 
        PhoneNumber:e.target[1].value,
        Password:e.target[2].value
      };
      const validateSign = async ()=>{
        try {
          const resualt = await userSchemaSign.validate(infoSign, {abortEarly:false})
          setInvalidationSign(false)
          return resualt;
        } catch (e) {
          setInvalidationSign(true)
          setErrosSign(e.errors)
          console.log(setErrosSign);
          
        }
      }
      const resualt= await validateSign(infoSign)
         console.log(resualt)
  }
  // handle change button.................................
    function handleChangeRegister(){
          setRegister(!Register)
    }
  return (
    <div className="register-page my-5 ">
        <div className=" my-5 form-page">
           <div className="rounded-4  bg-white form-page-div1">
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
                    <input type="text" className='form-control' placeholder='شماره تلفن خود را وارد کنید ...'/>
                    <br />
                    <label htmlFor="phone-id" className='form-label'>رمز عبور :</label>
                    <input type="password" className='form-control'placeholder="رمز عبور خود را وارد کنید ..."/>
                    <br />
                    {/* ................................Validation........... */}
                    {InvalidLogin && Object.keys(errorsLogin).length !== 0 && (
                        <div className="alert alert-danger">
                         {Object.values(errorsLogin).map((error, index) => (
                            <li key={index}>{error === 'PhoneNumber must be a `number` type, but the final value was: `NaN` (cast from the value `""`).' ? 'شماره تلفن صحیح نیست' : error}</li>
                          ))}
                        </div>
                        )}
                    <button type='submit' className='w3-animate-opacity p-3 btn-outline-danger mt-5 mx-auto d-block'>ورود</button>
                   </form>
                </div>
                <div className={`p-4 4 ${Register ? 'd-none': 'd-block w3-animate-opacity'}`}  >
                <form action="" method='post' onSubmit={handleSign}>
                    <label htmlFor="phone-id" className='form-label'>نام کاربری : </label>
                    <input type="text" className='form-control'  placeholder='نام خود را وارد کنید ...'/>
                    <br />
                    <label htmlFor="phone-id" className='form-label'>شماره تلفن :</label>
                    <input type="text" className='form-control'  placeholder='شماره تلفن خود را وارد کنید ...'/>
                    <br />
                    <label htmlFor="phone-id" className='form-label'>رمز عبور :</label>
                    <input type="password" className='form-control' placeholder="رمز عبور خود را وارد کنید ..."/>
                    <br />
                    {InvalidSign && Object.keys(errorsSign).length !== 0 && (
                        <div className="alert alert-danger">
                         {Object.values(errorsSign).map((e, index) => (
                            <li key={index}>{e === 'PhoneNumber must be a `number` type, but the final value was: `NaN` (cast from the value `""`).' ? 'شماره تلفن صحیح نیست' : e}</li>
                          ))}
                        </div>
                        )}
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