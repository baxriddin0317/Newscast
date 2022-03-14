import React from 'react'
import './Header.scss';
import { Link } from 'react-router-dom';
import Logo from "../../Assets/Img/logo.png";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Search } from '@mui/icons-material';

function Header() {
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // class active function
  const handlClass = (evt) => {
    const remove = document.querySelector(".active-span");
    remove.classList.remove('active-span');

    evt.currentTarget.classList.add("active-span");
  }

  return (
    <div className='header'>
        <div className="container">
            <img className='logo' src={Logo} alt="" />

            <nav className="header__nav">
              <div className="header__links">
              <span className='active-span' onClick={handlClass}>
                <Link to={'/'}>Home</Link>  
              </span> 
              <span onClick={handlClass}>
                <Link to={'#international'}>International</Link>  
              </span> 
              <span onClick={handlClass}>
                <Link to={'#sports'}>Sports</Link>  
              </span> 
              <span onClick={handlClass}>
                <Link to={'#opinion'}>Opinion</Link>  
              </span> 
              <span onClick={handlClass}>
                <Link to={'#business'}>Business</Link>  
              </span>
              <span onClick={handlClass}>
                <Link to={'#youth'}>Youth</Link>  
              </span> 
              <span onClick={handlClass}>
                <Link to={'#entertainment'}>Entertainment</Link>  
              </span>
              <span onClick={handlClass}>
                <Link to={'#lifestyle'}>Lifestyle</Link>  
              </span> 
              
              </div>
              <div>
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                  >
                    Dashboard
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                    }}
                  >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </Menu> 
              </div>
              <div className="header__search">
                  <input type="text" placeholder='search' />
                  <Search className='search-icon' />    
              </div>
            </nav>
        </div>
    </div>
  )
}

export default Header