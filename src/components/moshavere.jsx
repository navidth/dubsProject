import React from 'react'
import'../assest/css/moshavere.css'
const Moshavere=()=>{

     function callCustomer(){
    alert("برای مشاوره تلفنی با شماره رو برو تماس بگیرید :  989120978206+   \n\n اگر با تفن همراه هستید در پیغام بعدی روی open pick an app  کلیک  کنید \n\n  با تشکر ❤️ ")
    }
    return(
            <div className='d-flex flex-column justify-content-center'>
                {/* ...................مشاوره خرید........... */}
            <div class=" bg-light card d-sm-flex flex-column flex-md-row py-4 justify-content-center align-items-center ">
          <div class="me-md-1">
            <a href="https://t.me/Navid_th" class="text-decoration-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="45" fill="currentColor" class="bi bi-telegram ms-3 text-primary tt" title="مشاوره تلگرامی" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/>
            </svg>
          </a>
          <a href="tel:+989120978206" id="phonemoshaver" onClick={callCustomer} class="text-decoration-none">
             <svg xmlns="http://www.w3.org/2000/svg" width="35" height="45" fill="currentColor" class="bi bi-telephone-fill tt" title="مشاوره تلفنی" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
          </svg></a>
        </div>
            <p class="my-auto h5">مشاوره و خرید تخصصی چوب راکت باترفلای</p>
        </div>
            </div>
    )
}
export default Moshavere;