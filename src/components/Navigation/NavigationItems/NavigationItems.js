import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Burgerowy budowacz</NavigationItem>
        <NavigationItem link="/orders">Zamówienia</NavigationItem>
    </ul>
);

export default navigationItems;