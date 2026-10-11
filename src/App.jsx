
import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  // State for dark mode
  const [darkMode, setDarkMode] = useState(false)

  // State for shopping cart
  const [cart, setCart] = useState([])

  // State for category filtering
  const [category, setCategory] = useState('all')

  // Toggle dark mode
  function toggleDarkMode() {
    setDarkMode(!darkMode)
  }

  // Add a product to the cart
  function addToCart(product) {
    setCart([...cart, product])
  }

  // Update the selected category
  function handleCategoryChange(event) {
    setCategory(event.target.value)
  }

  return (
    <div
      style={{
        backgroundColor: darkMode ? '#222' : '#fff',
        color: darkMode ? '#fff' : '#000',
        minHeight: '100vh',
        padding: '20px'
      }}
    >
      <h1>🛒 Shopping App</h1>

      <p>
        Welcome! Your task is to implement filtering,
        cart management, and dark mode.
      </p>

      <DarkModeToggle
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />

      <label>Filter by Category: </label>

      <select
        value={category}
        onChange={handleCategoryChange}
      >
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList
        category={category}
        addToCart={addToCart}
      />

      <Cart cart={cart} />
    </div>
  )
}

export default App
