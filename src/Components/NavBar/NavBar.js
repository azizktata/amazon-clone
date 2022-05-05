import React from 'react'
import './NavBar.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuIcon from '@mui/icons-material/Menu';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useStateValue } from '../../StateProvider';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    const  categories = ["toutes nos categories", "sport et loisirs", "jeux et videos", "chaussures et sacs", "High Tech"]
    const [categorie, setCategorie] = React.useState('toutes nos categories');
    const handleChange = (event) => {
        setCategorie(event.target.value);
      }; 
    const [{basket}, dispatch] = useStateValue();
  return (
    <div className='navbar'>
        
        <div className='nav-belt'>
            <NavLink to="/">
            <img 
                className='logo'
                src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' 
                alt='logo'
            />
            </NavLink>
            <div className='location'>
                <LocationOnIcon />
                <div className='header__option'>
                    <span className='header__optionLineOne'>votre adresse de livraison</span>
                    <strong className='header__optionLineTwo '>tunisie</strong>
                </div>

            </div>
            <div className='header-search'>
            <div className='selector'>
                <FormControl fullWidth >
                <Select
                    name="categorie"
                    value={categorie}
                    label="categorie"
                    onChange={handleChange}
                    sx={{height:"40px"}}
                >
                {categories.map((name,index) => <MenuItem key={index} value={name}>{name}</MenuItem>)}
                </Select>
                </FormControl>
                </div>
                <input 
                    className='input-search'
                    type="text"
                />
                <button className='search-icon'><SearchIcon/></button>
            </div>
            <div className='header-nav'>
                <div className='header__option'>
                    <span className='header__optionLineOne'>hello guest</span>
                    <span className='header__optionLineTwo'>sign in</span>

                </div>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Retours</span>
                    <span className='header__optionLineTwo'> &ordes</span>
                </div>
                <div className='header__option'>
                    <span className='header__optionLineOne'>your</span>
                    <span className='header__optionLineTwo'>prime</span>
                </div>

            </div>
            <div className='header-panier'>
               <NavLink  to="/checkout" style={{color: "white"}}> <ShoppingBasketIcon/></NavLink>
                <span className='basket-count'>{basket?.length}</span>

            </div>
            
        </div>
        <div className='nav-main'>
            <div className='left'>
                <div className='toutes'>
                    <button><MenuIcon /></button>
                    <p>toutes</p>
                </div>
                <p>amazon basics</p>
                <p>services clients</p>
                <p>musique</p>
            </div>
            <div className='right'>
                <p>Amazon Pay</p>
                <p>Shopping en toute simplicités</p>

            </div>

        </div>

    </div>
  )
}
