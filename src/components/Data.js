import viscariaIMG from '../assest/images/card Image/viscaria.webp';
import timobollIMG from '../assest/images/card Image/timoboll baleds.webp';
import pro from '../assest/images/image2.jpg';

export const ItemMenu = ['چوب راکت','رویه راکت','میز و توپ پینگ پنگ','پوشاک و کفش','لوازم جانبی']
export const sort =["محبوب ترین",'گران ترین',"ارزان ترین",'جدید ترین'];
export const itemNamesBlades = [
    { url: '/blades/butterfly', name: 'چوب راکت باترفلای' },
    { url: '/blades/gewo',      name: 'چوب راکت جوو' },
    { url: '/blades/donic',     name: 'چوب راکت دونیک' },
    { url: '/blades/others',    name: 'سایر برند ها' }
  ];
  
  export const itemNamesRubbers = [
    { url: "/rubbers/butterfly", name: "رویه راکت باترفلای" },
    { url: "/rubbers/gewo",      name: "رویه راکت جوو" },
    { url: "/rubbers/donic",     name: "رویه راکت دونیک" },
    { url: "/rubbers/others",    name: "سایر برند ها" },
  ];
  
  export const Table_Ball = [
    { url: "/table-ball/table", name: "میز پینگ پونگ "},
    { url: "/table-ball/net", name: "تور و کاور میز پینگ پونگ" },
    { url: "/table-ball/pro-ball", name: "توپ حرفه ای" },
  ];
  
  export const Clothings_Shoes = [
    { url: "/clothing/shoes", name: "کفش پینگ پونگ"},
    { url: "/clothing/tshirt-shorts", name: "تیشرت و شلوارک" },
    { url: "/clothing/tonic", name: "تونیک زنانه" },
    { url: "/clothing/oth-clothings", name: "سایر پوشاک" },
  ];
  export const posts=[
    {id :'1', price:12455000, name:"viscariaa alc", Image:viscariaIMG},
    {id :'2', price:45000, name:"timoboll alc", Image:timobollIMG},
    {id :'3', price:455000, name:"zhang jike zlc", Image:viscariaIMG},
    {id :'4', price:1212300, name:"gergely t-5000", Image:timobollIMG},
    {id :'5', price:411232100, name:"fan zhendong alc", Image:viscariaIMG},
    {id :'6', price:57000, name:"harimato alc" , Image:timobollIMG},
    {id :'7', price:1245512000, name:"feritas alc", Image:viscariaIMG},
    {id :'8', price:45000, name:"primorac carbon", Image:timobollIMG},
    {id :'9', price:4551200, name:"innerforce alc", Image:viscariaIMG},
    {id :'10', price:1212000, name:"gergely t-5000", Image:timobollIMG},
    {id :'11', price:45512000, name:"saraduis", Image:viscariaIMG},
    {id :'12', price:12120000, name:"gergely t-5000", Image:timobollIMG},
]
export const arrayeProduct = [
  {id :'1', price:12455000, name:"viscariaa alc", Image:viscariaIMG}
]
function getProductData(id){
  let productData = posts.find((item)=>item.id === id)
  return productData
}
export {getProductData}