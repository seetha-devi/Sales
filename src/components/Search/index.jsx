// SearchBox.js
import React, { useState } from 'react';
import { Box, Container } from '@mui/material';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { useMediaQuery } from '@mui/material';
import ProductFilter from '../ProductFilter/index'; // Import Sidebar component

const SearchBox = ({ searchTerm, setSearchTerm, filters, setFilters, handleFilterChange }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to control sidebar visibility
  const isLgScreen = useMediaQuery('(min-width:1300px)');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    console.log('Searching for:', searchTerm);
    // You can perform additional search-related actions here if needed
  };

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Container maxWidth={1400}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '20px'
        }}
      >
        <TextField
          sx={{
            width: '500px',
            px: '5px',
            py: '7px'
          }}
          placeholder="Search for products"
          variant="standard"
          value={searchTerm}
          onChange={handleSearchChange}
        />

        <IconButton onClick={handleSearch} className='icon-button'>
          <SearchIcon sx={{
            px: "10px",
            py: '4px',
            bgcolor: '#808080',
            borderRadius: '5px'
          }} />
        </IconButton>

        {/* Filter Icon for Mobile Devices */}
        {!isLgScreen && (
          <IconButton edge="end"
            sx={{
              padding: '0px 3px',
              bgcolor: 'black',
              color: '#fff',
              borderRadius: '3px',
              height: '32px',
              mt: 1,
              flexWrap: 'wrap'
            }}

            aria-label="toggle filter"
            onClick={toggleSidebar}
            className='filter-icon'
          >
            <FilterAltIcon />
          </IconButton>
        )}
      </Box>

      {/* Render Sidebar as a popup */}
      <ProductFilter isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)} filters={filters} setFilters={setFilters} handleFilterChange={handleFilterChange} />
    </Container>
  );
};

export default SearchBox;
