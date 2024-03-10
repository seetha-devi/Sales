import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Link,
  Box
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



const Header = ({ cartCount }) => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#e5e4e23d' }}>
      <Toolbar>
        {/* Logo */}
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            color: '#000',
            fontWeight: '900'
          }}>
          <Link href="#"
            color="inherit"
            underline="none"
          >

            <span style={{
              backgroundColor:'#aeb0af',
              padding: '5px 20px',
              borderRadius: '2px'
            }}>
              Lumber Store
            </span>

          </Link>
        </Typography>

        {/* Product */}
        <Typography
          variant="h6"
          component="div"
          sx={{
            color: '#000',
            mr: 5,
            fontWeight: '400',
            display: { xs: 'none', md: 'block' }
          }}>

          <Link href="#" color="inherit" 
            sx={{
              textDecoration: 'none',
              
            }}>
            Products
            <Box sx={{borderBottom:'1px solid black'}}></Box>
          </Link>

        </Typography>


        {/* Cart Icon */}

        <IconButton edge="end"
          sx={{
            p: 1,
            bgcolor: '#aeb0af',
            borderRadius: '10%',
            mr: { xs: '1', sm: '5' }
          }}
          color="#000"
          aria-label="add to shopping cart">

          <ShoppingCartIcon />

          <Typography variant="body1"
            sx={{
              marginLeft: { xs: 'ml:0px', sm: 'ml:5px' }
            }}>
            {cartCount}
          </Typography>
        </IconButton>


      </Toolbar>
    </AppBar>
  );
};

export default Header;
