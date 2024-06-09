// eslint-disable-next-line no-unused-vars
import { useEffect,useState } from "react";
import React, { useLayoutEffect } from "react"
import banner from "../assets/banner.png"

function hero() {

  const tags=[
    {id:1,
     name:'Angular'
    },
    {id:2,
     name:'React'
    },
    {id:3,
     name:'React Native'
    },
    {id:4,
     name:'Angular'
    },
    {id:5,
     name:'UI/UX'
    }
  ]
  const [activeitem,setactiveitem]=useState(0);
  
  return (
    <div className="flex flex-col justify-around pl-4 pr-4 md:pl-32 md:pr-32">

      <img src={banner} alt="Banner" className="rounded-2xl" />
      <input
        type="search"
        placeholder="Search"
        className="bg-slate-100 shadow-xl rounded-full p-5 mr-32 ml-32 mt-[-20px]"
      />
      
      <div className="flex md:gap-14 gap-6 justify-center p-4">
        {tags.map((item, index) => (
          <ul
           onClick={()=>(setactiveitem(index))}
            key={index}
            className={`${index === activeitem ? 'bg-red-400 ' : ''} rounded-lg md:p-1 transition ease-in-out hover:scale-115 hover:border-[1px] border-red-900`}
          >
            <li>{item.name}</li>
          </ul>
        ))}
      </div>
    </div>
  );
  
}

export default hero