import React,{useEffect} from 'react'
import gotham from '../Images/Gotham.jpg'
import './Home.css'
import Displayproduct from '../Displayproduct/Displayproduct'
import secondbanner from '../Images/E_305.webp'
import thirdbanner from '../Images/E_305x.webp'
import fourthbanner from '../Images/E_301.webp'
import fifthbanner from '../Images/E_3011.webp'
import sixthbanner from '../Images/E_3012.webp'
import seventhbanner from '../Images/Review.webp'
import eightbanner from '../Images/E_291.webp'
import ninthbanner from '../Images/E_292.webp'
import tenthbanner from '../Images/E_300.webp'
import elevenbanner from '../Images/11.webp'
import twelvebanner from '../Images/12.webp'
import thirteenbanner from '../Images/13.webp'
import forteenbanner from '../Images/14.webp'
import insta1 from '../Images/insta1.jpg'
import insta2 from '../Images/insta2.jpg'
import insta3 from '../Images/insta3.jpg'
import insta4 from '../Images/insta4.jpg'
import insta5 from '../Images/insta5.jpg'
import insta6 from '../Images/insta6.jpg'

export default function Home() {
    useEffect(()=>{
        fetchingdata();
        fetchingwomen();
    },[])
    let instagramImage=[insta1,insta2,insta3,insta4,insta5,insta6];
    const [state,setState] = React.useState([]);
    const [wcloth,setWcloth] = React.useState([]);
    const fetchingdata=()=>{
        fetch(`http://localhost:3001/bags`).then((res)=>{
            return res.json();
        }).then((res)=>{
            setState(res)
        })
    }
    const fetchingwomen=()=>{
        fetch(`http://localhost:3001/Women_Clothing`).then((res)=>{
            return res.json();
        }).then((res)=>{
            setWcloth(res);
        })
    }
    
    // const storetoLocal=(data)=>{
    //     var product=JSON.parse(localStorage.getItem("productToBuy")) || [];
    //     console.log(data)
    // }


  return (
    <div>
        <img className='Singlebanner' src={gotham}/>
        <div id='Container'>
            {state.map((el,index)=>{
                if(index<3){
                   return <Displayproduct key={index+1} {...el} />
                }   
            })}
        </div>
        <div style={{display:"flex",width:"90%",gap:"50px",height:"797px",margin:"auto",marginTop:"100px"}}>
            <img style={{width:"50%"}} src={secondbanner}/>
            <img style={{width:"50%"}} src={thirdbanner}/>
        </div>
        <div id='Container'>
            {state.map((el,index)=>{
                if(index>=3 && index<=5){
                   return <Displayproduct key={index+1} {...el} />
                }   
            })}
        </div>
        <img className='Singlebanner' src={fourthbanner}/>
        <div id='Container'>
            {state.map((el,index)=>{
                if(index>=6 && index<=8){
                   return <Displayproduct key={index+1} {...el} />
                }   
            })}
        </div>
        <div style={{display:"flex",width:"90%",gap:"50px",height:"797px",margin:"auto",marginTop:"100px"}}>
            <img style={{width:"100%"}} src={fifthbanner}/>
            <img style={{width:"100%"}} src={sixthbanner}/>
        </div>
        <div id='Container'>
            {wcloth.map((el,index)=>{
                if(index<3){
                   return <Displayproduct key={index+1} {...el} />
                }   
            })}
        </div>
        <img className='Singlebanner' src={seventhbanner}/>
        <div style={{display:"flex",width:"90%",gap:"50px",height:"797px",margin:"auto",marginTop:"100px"}}>
            <img style={{width:"50%"}} src={eightbanner}/>
            <img style={{width:"50%"}} src={ninthbanner}/>
        </div>
        <div id='Container'>
            {state.map((el,index)=>{
                if(index>=9 && index<=11){
                   return <Displayproduct key={index+1} {...el} />
                }   
            })}
        </div>
        <img className='Singlebanner' src={tenthbanner}/>
        <div id='Container'>
            {state.map((el,index)=>{
                if(index>=12 && index<=14){
                   return <Displayproduct key={index+1} {...el} />
                }   
            })}
        </div>
        <div style={{display:"flex",width:"90%",gap:"50px",height:"797px",margin:"auto",marginTop:"100px"}}>
            <img style={{width:"100%"}} src={elevenbanner}/>
            <img style={{width:"100%"}} src={twelvebanner}/>
        </div>
        <div id='Container'>
            {state.map((el,index)=>{
                if(index>=15 && index<=17){
                   return <Displayproduct key={index+1} {...el} />
                }   
            })}
        </div>
        <img className='Singlebanner' src={thirteenbanner}/>
        <p>Our Picks For You</p>
        <div id='Container'>
            {state.map((el,index)=>{
                if(index>=18 && index<=20){
                   return <Displayproduct key={index+1} {...el} />
                }   
            })}
        </div>
        <div id='miniNavbaratbottom'>
            <a href='https://www.instagram.com/jackiesmithba/'>@jackiesmithba</a>
            <a href='https://www.instagram.com/jackiesmithba/'>Share yours! #MyJackie</a>
        </div>
        <div id='instaphotoAtBottom'>
            {
                instagramImage.map((el,index)=>{
                    if(index<3){
                        return <img style={{width:"100%"}} src={el}/>
                    }else{
                        return <img style={{width:"100%",height:"290px",marginTop:"30px"}} src={el}/>
                    }
                })
            }
        </div>
        <img className='Singlebanner' src={forteenbanner}/>
    </div>
  )
}
