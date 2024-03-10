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

const Sidebar = ({ filters, setFilters, isOpen, onClose }) => {
  const handleFilterChange = (type, value) => {
    setFilters({ ...filters, [type]: value });
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
      }}
    >

      <Container sx={{ mx: 'auto' }}>
        <Box className='fieldset-container  product-filter'
        >
          <Button onClick={onClose}
            sx={{
              color: '#000',
              textAlign: 'center',
              float: 'right'
            }}>
            <CloseIcon />
          </Button>
        </Box>

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
                  control={<Checkbox checked={(filters.gender || []).includes('Men')} 
                  onChange={() => handleFilterChange('gender', ['Men', ...(filters.gender || []).filter(g => g !== 'Men')])} />}
                  label="Men"
                />
                <FormControlLabel
                  control={<Checkbox checked={(filters.gender || []).includes('Women')} onChange={() => handleFilterChange('gender', ['Women', ...(filters.gender || []).filter(g => g !== 'Women')])} />}
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
                  control={<Checkbox checked={(filters.price || [])[0] === 0 && (filters.price || [])[1] === 250}
                    onChange={() => handleFilterChange('price', [0, 250])} />}
                  label="0 - ₹250"
                />
                <FormControlLabel
                  control={<Checkbox checked={(filters.price || [])[0] === 251 && (filters.price || [])[1] === 450}
                    onChange={() => handleFilterChange('price', [251, 450])} />}
                  label="₹251 - ₹450"
                />
                <FormControlLabel
                  control={<Checkbox checked={(filters.price || [])[0] === 451 && (filters.price || [])[1] === 500}
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
                {['Polo', 'Hoodie', 'Round', 'Basic'].map(type => (
                  <FormControlLabel
                    key={type}
                    control={<Checkbox checked={(filters.type || []).includes(type)}
                      onChange={() => handleFilterChange('type', [type, ...(filters.type || []).filter(e => e !== type)])}
                    />}
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
                      onChange={() =>
                        handleFilterChange('color', [color, ...(filters.color || []).filter(c => c !== color)])}
                    />}
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

export default Sidebar;
