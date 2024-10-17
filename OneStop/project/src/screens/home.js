import React from 'react';
import './home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="image-container">
        <img src="https://media.tenor.com/D-0qeZG5l5YAAAAM/easyeats-rider-easyeats.gif" alt="Delivery animation" />
        <p className='home-text' style={{ marginLeft: '100px', marginTop: '20px', fontSize: "50px", fontFamily: 'fantasy' }}> Cravings arriving soon ?</p>
        <p className='home-text-2' style={{ marginLeft: '-400px', marginTop: '100px', fontSize: "40px", fontFamily: 'cursive' }}>We'll arrive sooner :)</p>
        <img src="https://media.tenor.com/ZiOJ6KeMt5YAAAAM/chezmaxi-maxi.gif" alt="Delivery animation" style={{ marginTop: "150px", marginLeft: '-200px', blockSize: '150px' }} />
      </div>
      <header className="header">
        <div className="header-content">
          <h1 className="header-title">Welcome to One-Stop</h1>
          <p className="header-description">
            Your One-Stop Destination for Delicious Meals and Snacks
          </p>

          <div className='flex-container'>
            <img src="https://media.istockphoto.com/id/637790866/photo/100-lamb-greek-burger.webp?b=1&s=170667a&w=0&k=20&c=LrRFfDGeueoBQrZLbJ0qGrOdGgkTP9me2N_04xVzKPM=" alt="Delivery animation" style={{ blockSize: '250px' }} className='shadow-lg p-3 mb-5 bg-white rounded' />
            <img src="https://media.istockphoto.com/id/903764150/photo/fried-eggs-sunny-side-up-on-baguette-ham-and-arugula.webp?b=1&s=170667a&w=0&k=20&c=sNGOyZ3Q9-jjaIY76Msnafxz-v8Xoia5jTLLnjMUUHs=" alt="Delivery animation" style={{ blockSize: '250px' }} className='shadow-lg p-3 mb-5 bg-white rounded' />
            <img src="https://media.istockphoto.com/id/1285753599/photo/south-indian-meals-traditional-food-on-banana-leaf-festival-day-food.jpg?s=612x612&w=0&k=20&c=CTvLCEwyyQ9QEOAOMwp8W68MktxdMBDUELhFY07B3Zo=" alt="Delivery animation" style={{ blockSize: '250px' }} className='shadow-lg p-3 mb-5 bg-white rounded' />
            <img src="https://media.istockphoto.com/id/1303119992/photo/pizza_margerita.jpg?s=612x612&w=0&k=20&c=0HZZMC10ySBYvMVAKUNzknkQ1E74q8NKwTV5_K6WK6M=" alt="Delivery animation" style={{ blockSize: '250px' }} className='shadow-lg p-3 mb-5 bg-white rounded' />

          </div>
        </div>
      </header>
      <div className="home-screen">


        {/* Add buttons or links for navigation */}
      </div>
      <section className="contact-section">
        <h2 className="section-title">Contact Us</h2>
        <p className="contact-info">
          <strong>Location:</strong> College Campus, Building XYZ
        </p>
        <p className="contact-info">
          <strong>Email:</strong> sistcanteen@example.com
        </p>
        <p className="contact-info">
          <strong>Phone:</strong> +123-456-7890
        </p>
      </section>
    </div>
  );
};

export default Home;