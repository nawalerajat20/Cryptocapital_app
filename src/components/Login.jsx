// import { Googlelogo } from "../assets";

// const LoginPage = () => (
//   <div className="flex items-center justify-center h-screen mt-[50px] bg-primary">
//     <div className="bg-darkGrey rounded-[20px] px-10 py-12 text-white w-[400px]">
//       <h2 className="text-2xl font-medium mb-8">Log In</h2>
//       <div className="mb-6">
//         <input
//           type="text"
//           id="username"
//           placeholder="Username"
//           className="w-full px-3 py-2 rounded-md bg-darkGrey text-[15px] text-white border border-white"
//         />
//       </div>
//       <div className="mb-4">
//         <input
//           type="password"
//           id="password"
//           placeholder="Password"
//           className="w-full px-3 py-2 rounded-md bg-darkGrey text-[15px] text-white border border-white"
//         />
//       </div>
//       <button className="bg-dimBlue text-white px-2 py-2 ml-[5.2rem] rounded-md mb-2 w-40">
//         Log In
//       </button>
//       <span className="text-sm text-gray-400 block uppercase text-center mb-2">
//         or
//       </span>
//       <button className="text-white px-2 py-2 rounded-md w-60  left-[40px] border border-white relative">
//         <span className="ml-[1rem]">Login with Google</span>
//         <img
//           src={Googlelogo}
//           alt="Google Logo"
//           className="w-9 h-8 absolute right-50 left-[10px] top-1/2 transform -translate-y-1/2"
//         />
//       </button>
//       <p className="text-sm text-dimBlue text-center mt-4">Forgot Password?</p>
//     </div>
//   </div>
// );

// export default LoginPage;

import { useState } from 'react';
import { Googlelogo } from "../assets";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleLoginSignup = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="flex items-center justify-center h-screen mt-[50px] bg-primary">
      <div className="bg-darkGrey rounded-[20px] px-10 py-12 text-white w-[400px]">
        <h2 className="text-2xl font-semibold mb-8">{isLogin ? 'Login' : 'Sign Up'}</h2>
        <div className="mb-6">
          <input
            type="text"
            id="username"
            placeholder="Username"
            className="w-full px-3 py-2 rounded-md bg-darkGrey text-[15px] text-white border border-white"
          />
        </div>
        {!isLogin && (
          <div className="mb-6">
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="w-full px-3 py-2 rounded-md bg-darkGrey text-[15px] text-white border border-white"
            />
          </div>
        )}
        <div className="mb-6">
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="w-full px-3 py-2 rounded-md bg-darkGrey text-[15px] text-white border border-white"
          />
        </div>
        {!isLogin && (
          <div className="mb-6">
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              className="w-full px-3 py-2 rounded-md bg-darkGrey text-[15px] text-white border border-white"
            />
          </div>
        )}
        <button className="bg-dimBlue text-white px-2 py-2 ml-[5.2rem] rounded-md mb-2 w-40">
          {isLogin ? 'Log In' : 'Sign Up'}
        </button>
        <span className="text-sm text-gray-400 block uppercase text-center mb-2">
          or
        </span>
        <button
          className="text-white px-2 py-2 rounded-md w-60 left-[40px] border border-white relative"
          onClick={toggleLoginSignup}
        >
          <span className="ml-[1rem]">
            {isLogin ? 'Sign Up' : 'Log In'}
          </span>
          <img
            src={Googlelogo}
            alt="Google Logo"
            className="w-9 h-8 absolute right-50 left-[10px] top-1/2 transform -translate-y-1/2"
          />
        </button>
        <p className="text-sm text-dimBlue text-center mt-4">
          {isLogin ? 'Forgot Password?' : ''}
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
