import React, { useState } from 'react'
import "./Home.css"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Product from '../Product/Product';
export default function Home() {
    
    const [data,setData] = useState(images)
    const [index,setIndex] = useState(1)
  return (
    <div className='home'>
        <div className='home-container'>
            <div className='section-center'>
                
            {data.map((image,imgIndex)=>{
                if(index<0){
                    setIndex(data.length-1)
                }
                if(index>data.length-1){
                    setIndex(0)
                }
                const {id,img} = image;
                let position ="nextSlide"
                if(imgIndex===index)
                {
                    position="activeSlide"
                }
                if(imgIndex===index-1)
                {
                    position="lastSlide"
                }
                
                return(
                    <article className={position} key={id}>
                    <img
                        className='home-img' 
                        src={img} alt="img"/>
                    </article>
                )
            })}
            <button className='prev' onClick={()=>setIndex(prev => prev-1)}><ArrowBackIosIcon/></button>
            <button className='next' onClick={()=>setIndex(prev => prev+1)}><ArrowForwardIosIcon/></button>

            </div>

            <div className='home-row'>
                {products.map((product)=><Product
                    key={product.id}
                    title={product.title}
                    img={product.img}
                    price={product.price}
                    rating={product.rating}
                />)}
            </div>
        </div>

    </div>
  )
}
const images = [
    {
        id:0,
        img:'https://m.media-amazon.com/images/I/710WETSbtzL._SX3000_.jpg'
    },
    {
        id:1,
        img:'https://m.media-amazon.com/images/I/719ITn+4TqL._SX3000_.jpg'
    },
    {
        id:2,
        img:'https://m.media-amazon.com/images/I/61HUcn2Cr+L._SX3000_.jpg'
    }
]
const products = [
    {
        id:1,
        title:"Sony MDR-RF895RK Casque TV sans Fil",
        img:"https://m.media-amazon.com/images/I/81TprWVEBPL._AC_SX679_.jpg",
        price:"134",
        rating:4
    },
    {
        id:2,
        title:"Dans les brumes de Capelans Broché",
        img:"https://images-na.ssl-images-amazon.com/images/I/41vrVcewxKL._SX310_BO1,204,203,200_.jpg",
        price:"13.99",
        rating:5
    },
    {
        id:3,
        title:"Sony MHC-V02 Enceinte Portable High Power Bluetooth, Noir",
        img:"https://m.media-amazon.com/images/I/51PO7ofppmL._AC_SY450_.jpg",
        price:"84.99",
        rating:4
    },
    {
        id:4,
        title:"GoPro HERO9 Black - Caméra embarquée étanche avec écran LCD Avant et écran Tactile à l’arrière, vidéo 5K Ultra HD + Module D'objectif Max (HERO9 Black)",
        img:"https://m.media-amazon.com/images/I/314rpMOoXTL._AC_.jpg",
        price:"97",
        rating:3
    },
    {
        id:5,
        title:"Muse Enceinte de fête, Bluetooth, avec Batterie, Lecteur CD et Effets Lumineux (USB, AUX), Noir 500 Watt Noir",
        img:"https://m.media-amazon.com/images/I/811Yjh43LkL._AC_SY450_.jpg",
        price:"139",
        rating:4
    }
]
