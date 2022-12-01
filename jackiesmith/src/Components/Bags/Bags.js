import React, { useEffect } from 'react'
import Displayproduct from '../Displayproduct/Displayproduct';
import Style from './Bags.module.css';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup, Button,
    MenuOptionGroup,
    MenuDivider,
} from '@chakra-ui/react'
export default function Bags() {
    useEffect(() => {
        fetchingAllBags("https://jackiesmithserver.onrender.com/allBags");
    }, [])
    var ref1 = React.useRef("");
    var ref2 = React.useRef("");
    const [state, setState] = React.useState([]);
    const [filter, setFilter] = React.useState(false);
    const fetchingAllBags = (url) => {
        fetch(url).then((res) => {
            return res.json();
        }).then((res) => {
            setState(res)
        })
    }
    const showfilter = (e) => {
        e.preventDefault();
        setFilter(true)
        var sort = ref1.current.value;
        if (sort === '' && ref2.current.value === '') {
            fetchingAllBags(`https://jackiesmithserver.onrender.com/allBags`)
        } else if (sort !== '' && ref2.current.value === '') {
            fetchingAllBags(`https://jackiesmithserver.onrender.com/allBags?_sort=price&_order=${sort}`)
        } else if (sort === '' && ref2.current.value !== '') {
            fetchingAllBags(`https://jackiesmithserver.onrender.com/allBags?title_like=${ref2.current.value}`)
        } else {
            fetchingAllBags(`https://jackiesmithserver.onrender.com/allBags?title_like=${ref2.current.value}&_sort=price&_order=${sort}`)
        }

    }

    return (
        <div>
            <form style={{marginTop:"30px"}} onChange={showfilter}>
                <select ref={ref1} >
                    <option value=''>Sorting</option>
                    <option value='asc'>Low to High</option>
                    <option value='desc'>High to Low</option>
                </select>
                <select ref={ref2}>
                    <option value=''>Shop by brand</option>
                    <option value='Dear'>Dear</option>
                    <option value='Monogram'>Monogram</option>
                    <option value='Gotham'>Gotham</option>
                    <option value='Wendy'>Wendy</option>
                    <option value='Fiji'>Fiji</option>
                    <option value='Moony'>Moony</option>
                    <option value='Supernova'>Supernova</option>
                    <option value='lina'>lina</option>
                    <option value='Claire'>Claire</option>
                    <option value='Thelma'>Thelma</option>
                    <option value='Bellini'>Bellini</option>
                    <option value='Flora'>Flora</option>
                    <option value='Smith'>Smith</option>
                    <option value='Miranda'>Miranda</option>
                </select>
            </form>
            {/* <Menu   closeOnBlur={true}  closeOnSelect={true}>
  <MenuButton  onClick={showfilter} as={Button} colorScheme='blue'>
    Filter
  </MenuButton>
  <MenuList   minWidth='240px'>
    <MenuOptionGroup  title='Sort by price' type='radio'>
      <MenuItemOption  value='asc'>Low to High</MenuItemOption>
      <MenuItemOption value='desc'>High to Low</MenuItemOption>
    </MenuOptionGroup>
    <MenuDivider />
    <MenuOptionGroup title='Shop by brand' type='radio'>
      <MenuItemOption value='Dear'>Dear</MenuItemOption>
      <MenuItemOption value='Monogram'>Monogram</MenuItemOption>
      <MenuItemOption value='Gotham'>Gotham</MenuItemOption>
      <MenuItemOption value='Wendy'>Wendy</MenuItemOption>
      <MenuItemOption value='Fiji'>Fiji</MenuItemOption>
      <MenuItemOption value='Moony'>Moony</MenuItemOption>
      <MenuItemOption value='Supernova'>Supernova</MenuItemOption>
      <MenuItemOption value='lina'>lina</MenuItemOption>
      <MenuItemOption value='Claire'>Claire</MenuItemOption>
      <MenuItemOption value='Thelma'>Thelma</MenuItemOption>
      <MenuItemOption value='Bellini'>Bellini</MenuItemOption>
      <MenuItemOption value='Flora'>Flora</MenuItemOption>
      <MenuItemOption value='Smith'>Smith</MenuItemOption>
      <MenuItemOption value='Miranda'>Miranda</MenuItemOption>
    </MenuOptionGroup>
  </MenuList>
</Menu> */}
            <h1 style={{fontSize:"30px",marginTop:"30px"}}>Bags</h1>
            <div className={Style.Containers}>
                {state.map((el, index) => {
                    return <Displayproduct key={index + 1} {...el} />
                })}
            </div>
        </div>
    )
}
