import React from "react"
import image from '../../assets/restaurant.jpg'
import HeaderCartButton from "./HeaderCartButton"

import classes from './Header.module.css'

const Header = (props) =>{
return (
    <React.Fragment>
<header className={classes.header}>
<a href="#top">Vito's Place</a>
<HeaderCartButton onClick={props.onShowCart}/>
</header>
<div  className={classes['main-image']}>
<img src={image} alt='Image of the restaurant'></img>
</div>
</React.Fragment>
)
}

export default Header