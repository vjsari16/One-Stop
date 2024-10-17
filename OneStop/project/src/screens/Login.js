// import React, { useState } from 'react';
// import './Login.css';

// const Login = () => {
//   // State for keeping track of input values
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
  
//   // Function to handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Submitted:', { username, password });
//     // You can add logic here to handle authentication
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit} className="login-form">
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;