import React from 'react';
import { useMediaQuery } from '@mui/material';
import {
  FormControl,
  FormGroup,
  Typography,
  FormControlLabel,
  Checkbox,
  Button,
  Paper,
  Box
} from '@mui/material';

const Sidebar = ({ filters, setFilters }) => {
  const isLgScreen = useMediaQuery('(min-width: 1280px)'); 

  const handleFilterChange = (type, value) => {
    const updatedFilters = { ...filters };

    if (!updatedFilters[type]) {      // Ensure that the filters[type] array is initialized
      updatedFilters[type] = [];
    }

    const index = updatedFilters[type].indexOf(value);   // Check if the value is already included in the filters

    if (index !== -1) {       // If the value is already included, remove it from the array
      updatedFilters[type].splice(index, 1);
    } else {
      updatedFilters[type].push(value);                              
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
    setFilters({ gender: [], color: [], type: [],price: [0, 500] });
  };

  if (!isLgScreen) {
    return null; // If not lg screen, return null to render nothing
  }

  return (
    <Paper
      className='paper-component'
      elevation={3}
      sx={{
        width: "25%",
        padding: "20px",
      }}
    >
      {/* Gender */}
      <Box component="div" className='fieldset-container'>
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
      </Box>

      {/* Color */}
      <Box component="div" className='fieldset-container'>
        <FormControl component="fieldset" >
          <Typography variant="h6"
            sx={{
              fontWeight: 'bold',
              mr: 3
            }}>
            Color
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
      </Box>

      {/* Price */}
      <Box component="div" className='fieldset-container'>
        <FormControl >
          <Typography variant="h6"
            sx={{
              fontWeight: 'bold',
              mr: 3
            }}>
            Price Range
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
      </Box>

      {/* Type */}
      <Box component="div" className='fieldset-container'>
        <FormControl component="fieldset" >
          <Typography variant="h6"
            sx={{
              fontWeight: 'bold',
              mr: 3
            }}>
            Type
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
      </Box>

      {/* Clear button for all checked filter */}
      <Button onClick={clearFilters}
        sx={{
          color: '#fff',
          bgcolor: '#383938',
          textAlign: 'center',
          margin: '0 38px',
          '&:hover': {
            bgcolor: 'red',
            color: '#fff',
          },
        }}>
        Clear Filters
      </Button>
    </Paper>
  );
};

export default Sidebar;
