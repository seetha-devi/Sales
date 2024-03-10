// Product.jsx
import React from 'react';
import products from '../../data/products.json';
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Container,
  Box
} from '@mui/material';

const Product = ({ searchTerm, onAddToCart, filters }) => {
  const filterProducts = products.filter(product => {
    const searchRegex = new RegExp(searchTerm, 'i');
    return (
      product.name.match(searchRegex) ||
      product.color.match(searchRegex) ||
      product.type.match(searchRegex)
    )
      &&
      (filters.gender.length === 0 || filters.gender.includes(product.gender)) &&
      (filters.color.length === 0 || filters.color.includes(product.color)) &&
      (product.price >= filters.price[0] && product.price <= filters.price[1]);
  });

  return (
    <Container maxWidth={1200}>
      <Grid container
        rowSpacing={6}
        columnSpacing=
        {{
          xs: 1,
          sm: 2,
          md: 4
        }}
        className='product-grid'>
        {filterProducts.length === 0 ? (
          <Typography variant="h4" color="textSecondary"
            sx={{
              textAlign: 'center',
              width: '100%',
              color: '#000',
              py: 5,
              fontSize: '24px',
              fontWeight: '900'
            }}>
            No products found
          </Typography>
        ) :


          filterProducts.map(product => (
            <Grid item key={product.id}
              xs={12}
              sm={6}
              md={4
              } >
              <Card>
                <CardMedia
                  component="img"
                  sx={{
                    margin: '0 auto',
                    aspectRatio: '3/2',
                    objectFit: 'contain'
                  }}
                  image={product.imageURL}
                  alt={product.name}
                  name={product.name}
                />

                <CardContent
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: "center",
                    bgcolor: '#e5e4e23d',
                    paddingBottom: "16px"
                  }}>

                  <Box>
                    <Typography
                      sx={{
                        color: '#000080',
                        fontSize: '15px'
                      }}
                      className='product-title'>
                      {product.name}
                    </Typography>

                    <Typography
                      sx={{
                        color: '#000',
                        fontWeight: 'bold',
                        fontSize: '15px'
                      }}
                      className='price'>
                      {product.currency} {product.price}
                    </Typography>
                  </Box>
                  <Button
                    className='add-to-cart-btn'
                    sx={{
                      bgcolor: '#383938',
                      color: '#fff',
                      padding: "6px 10px",
                      fontWeight: 700,
                      fontSize: "12px",
                      lineHeight: 1.3,
                      '&:hover': {
                        bgcolor: '#fff',
                        color: '#000',
                      },
                    }}
                    onClick={() => onAddToCart()} // Call onAddToCart function passed from ParentComponent
                  >
                    Add Cart
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Container>
  )
}

export default Product;
