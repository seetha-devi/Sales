import React, { useState } from 'react';
import './App.css';
import { Helmet } from 'react-helmet';
import Header from '../src/components/Header/index';
import SearchBox from '../src/components/Search/index';
import Spacer from '../src/components/Spacer/index';
import Footer from './components/Footer/Footer';
import Product from './components/products';
import Sidebar from './components/Filter/index';
import { Stack, Container } from '@mui/material';



function App() {
  const [cartCount, setCartCount] = useState(0); // State to hold the cart count
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({ gender: [], color: [], type: [], price: [0, 500] });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);



  const handleAddToCart = () => {
    setCartCount(prevCount => prevCount + 1);
  };

  const handleRemoveFromCart = () => {
    if (cartCount > 0) {
      setCartCount(prevCount => prevCount - 1);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleFilterChange = (type, value) => {
    setFilters({ ...filters, [type]: value });
  };

  const clearFilters = () => {
    setFilters({ gender: [], color: [], type: [], price: [0, 500] });
  };




  return (
    <>
   
      <Helmet>
        <title>Product</title>
        <meta name="description" content="Products lisiting page" />
        <link rel="icon" href="./assets/images/logo.jpg" />
      </Helmet>

      <Header cartCount={cartCount} />
      <Container maxWidth={900} sx={{ margin: '0 auto' }}>
        <Spacer height='30px' />

        <SearchBox
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          toggleSidebar={toggleSidebar}
          filters={filters}
          setFilters={setFilters}
          handleFilterChange={handleFilterChange}
        />
        <Spacer height='40px' />

        <Stack direction="row" spacing={3}>

          <Sidebar
            filters={filters}
            setFilters={setFilters}
            handleFilterChange={handleFilterChange}
            isOpen={isSidebarOpen}
            clearFilters={clearFilters} />

          <Product
            searchTerm={searchTerm}
            onAddToCart={handleAddToCart}
            onRemoveFromCart={handleRemoveFromCart}
            filters={filters} />

        </Stack>
        
      </Container>
      <Spacer height='40px' />
      <Footer />
    </>
  );
}

export default App;
