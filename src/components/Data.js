import viscariaIMG from '../assest/images/card Image/viscaria.webp';
import timobollIMG from '../assest/images/card Image/timoboll baleds.webp';
import pro from '../assest/images/image2.jpg';
import { useState } from 'react';

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

