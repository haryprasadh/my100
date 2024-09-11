import { useState } from "react"


export default function Song({song,index,setIndex}){
    const [on,setOn] = useState(false);

    return(
            <div 
            style={{display:'flex',justifyContent:'space-between',
            width:'36vw',padding:'14px',borderRadius:'14px',cursor:'pointer',
            backgroundColor:index===song.rank-1?'skyblue':'',
            }} 
            onClick={()=>{setIndex(song.rank-1);}}
            onMouseEnter={()=>{setOn(true)}}
            onMouseLeave={()=>{setOn(false)}}
            >
                <h4>{song.rank}</h4>
                <h4>{song.name}</h4>
                <h4>{song.artist}</h4>
                <img src={song.image} alt={`${song.name} image`} style={{width:'55px',height:'55px',borderRadius:'15px'}}/>
            </div>
    )
}