import React from 'react';
import {
  FormControl,
  FormGroup,
  Typography,
  FormControlLabel,
  Checkbox,
  Button,
  Paper, Box,
  Grid,
  Container
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const ProductFilter = ({ filters, setFilters, isOpen, onClose }) => {

  const handleFilterChange = (type, value) => {
    const updatedFilters = { ...filters };

    if (!updatedFilters[type]) {   // Ensure that the filters[type] array is initialized                            
      updatedFilters[type] = [];
    }

    const index = updatedFilters[type].indexOf(value);// Check if the value is already included in the filters

    if (index !== -1) {    // If the value is already included, remove it from the array
      updatedFilters[type].splice(index, 1);
    } else {
      updatedFilters[type].push(value);                               // Otherwise, add it to the array
    }

    if (type === 'price') {

      const priceString = value.join(',');
      const existingPriceString = updatedFilters[type].join(',');

      // Toggle price range filter
      if (existingPriceString === priceString) {
        updatedFilters[type] = [];
      } else {
        updatedFilters[type] = value;
      }
    }

    setFilters(updatedFilters);
  };


  const clearFilters = () => {
    setFilters({ gender: [], color: [], price: [0, 500], type: [] });
  };

  return (

    <Paper
      className='paper-component'
      sx={{
        padding: "20px",
        display: isOpen ? 'block' : 'none', // Show/hide based on isOpen prop
        paddingRight:"0px",
        marginTop:"20px"
      }}
    >
      <Box className='close-icon'
        >
          <Button onClick={onClose}
            className='product-filter-action'
            sx={{
              color: '#000',
              textAlign: 'center',
              float:"inline-end",
              paddingRight:"0px"

            }}>
            <CloseIcon />
          </Button>
        </Box>

      <Container sx={{ mx: 'auto' }}>
        

        <Grid container spacing={2}

        >
          {/* Gender */}
          <Grid item xs={12} sm={6} md={3} className='product-grid-feature'>

            <FormControl component="fieldset">
              <Typography variant="h6"
                sx={{
                  fontWeight: 'bold',
                  mr: 3
                }}>
                Gender
              </Typography>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox checked={(filters.gender || []).includes('Men')}
                      onChange={() => handleFilterChange('gender', 'Men')} />}
                  label="Men"
                />
                <FormControlLabel
                  control={<Checkbox checked={(filters.gender || []).includes('Women')}
                    onChange={() => handleFilterChange('gender', 'Women')} />}
                  label="Women"
                />
              </FormGroup>
            </FormControl>
          </Grid>

          {/* Price */}
          <Grid item xs={12} sm={6} md={3}>
            <FormControl >
              <Typography variant="h6"
                sx={{
                  fontWeight: 'bold',
                  mr: 3
                }}
              >Price Range
              </Typography>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox checked={(filters.price || [])[0] === 0 && (filters.price || [])[1] === 250}
                      onChange={() => handleFilterChange('price', [0, 250])} />}
                  label="0 - ₹250"
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={(filters.price || [])[0] === 251 && (filters.price || [])[1] === 450}
                      onChange={() => handleFilterChange('price', [251, 450])} />}
                  label="₹251 - ₹450"
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={(filters.price || [])[0] === 451 && (filters.price || [])[1] === 500}
                      onChange={() => handleFilterChange('price', [451, 500])} />}
                  label="₹451 - ₹500"
                />
              </FormGroup>
            </FormControl>
          </Grid>

          {/* Type */}
          <Grid item xs={12} sm={6} md={3}>
            <FormControl>
              <Typography variant="h6"
                sx={{
                  fontWeight: 'bold',
                  mr: 5
                }}
              >Type
              </Typography>
              <FormGroup>
                {['Polo', 'Basic', 'Hoodie', 'Round'].map(type => (
                  <FormControlLabel
                    key={type}
                    control={<Checkbox checked={(filters.type || []).includes(type)}
                      onChange={() => handleFilterChange('type', type)} />}
                    label={type}
                  />
                ))}
              </FormGroup>
            </FormControl>
          </Grid>

          {/* Color */}

          <Grid item xs={12} sm={6} md={3}>
            <FormControl >
              <Typography variant="h6"
                sx={{
                  fontWeight: 'bold',
                  mr: 4
                }}
              >Color
              </Typography>
              <FormGroup>
                {['Black', 'Blue', 'Red', 'Green', 'White'].map(color => (
                  <FormControlLabel
                    key={color}
                    control={<Checkbox checked={(filters.color || []).includes(color)}
                      onChange={() => handleFilterChange('color', color)} />}
                    label={color}
                  />
                ))}
              </FormGroup>
            </FormControl>
          </Grid>

        </Grid>



        <Box className='fieldset-container  product-filter'
          sx={{
            textAlign: 'center'
          }}>
          <Button onClick={clearFilters}
            sx={{
              color: '#fff',
              bgcolor: '#080302eb',
              '&:hover': {
                bgcolor: 'red',
                color: '#fff',
              },
            }}>
            Clear Filters
          </Button>

        </Box>
      </Container>
    </Paper>
  );
};

export default ProductFilter;
