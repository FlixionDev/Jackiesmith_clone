import React from 'react'
import './navbar.css'
import {Link} from "react-router-dom"
import { Image } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { ChevronDownIcon,SearchIcon} from '@chakra-ui/icons'



function Navbar() {
  return (
    <div className='navbar'>
      <div className='upper'>
        <div>
          <p>English <Icon as={ChevronDownIcon} /></p>
        </div>
        <div>
          <div className='img'>
            <Image src='https://cdn.shopify.com/s/files/1/0491/4541/3794/files/LogoNegro-01_300x.png?v=1639481194' alt='Jackie_Smith'  />
          </div>
        </div>
        <div>  
          <div className='icons'>
            <Link><Icon as={SearchIcon} w={6} h={6}/></Link>
            <Link><Icon as={ChevronDownIcon} w={6} h={6}/></Link>
            <Link><Icon as={ChevronDownIcon} w={6} h={6}/></Link>
            <Link><Icon as={ChevronDownIcon} w={6} h={6}/></Link>
          </div>
        </div>
      </div>
      <div className='lower'>
          <div className='links'>
            <Link>   BAGS <Icon as={ChevronDownIcon} /></Link>
            <Link>   ACCESSORIES  <Icon as={ChevronDownIcon} /></Link>
            <Link>   CLOTHING <Icon as={ChevronDownIcon} /></Link>
            <Link>   SNEAKERS </Link>
            <Link>   OUR COMMUNITY <Icon as={ChevronDownIcon} /></Link>
          </div>
      </div>
    </div>
  )
}

export default Navbar