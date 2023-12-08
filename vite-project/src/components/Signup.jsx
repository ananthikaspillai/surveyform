


// export const Signup = (props) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [username, setUsername] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!email.endsWith('.com')) {
//       setErrorMessage("Please enter a valid email address ending with '.com'.");
//       return;
//     }
//     try {
//       const response = await axios.post('http://localhost:8081/user/signup', {
//         email,
//         password,
//         username,
//       });

//       console.log("Registration successful", response.data);
//       setSuccessMessage("Registration successful! You can now login.");
//       setEmail("");
//       setPassword("");
//       setUsername("");

//     } catch (error) {
//       console.error("Registration failed", error);
//       setErrorMessage("Registration failed. Please try again.");
//       setEmail("");
//       setPassword("");
//       setUsername("");
//     }
//   };
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-lg shadow-md">
//         <div>
//           <h2 className="mt-6 text-center text-3xl font-bold text-black">
//             Register
//           </h2>
//         </div>
//         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//           <input type="hidden" name="remember" value="true" />
//           <div className="rounded-md shadow-sm -space-y-px ">
//             <div>  <label htmlFor="username" className="sr-only">Username</label>
//               <input id="username" name="username" type="text" autoComplete="username" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
//             </div>
//             <div>
//               <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative mt-[10px] block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" onChange={(e) => setEmail(e.target.value)} />
//             </div>
//             <div>
//               <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative mt-[10px] block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
//             </div>
//           </div>
//           <div>
//             <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
//               Register
//             </button>
//           </div>
//         </form>
//         {successMessage && (
//           <p className="mt-2 text-center text-sm text-green-600">{successMessage}</p>
//         )}
//         {errorMessage && (
//           <p className="mt-2 text-center text-sm text-red-600">{errorMessage}</p>
//         )}
//         <div className="text-center">
//           <button
//             className="mt-2 w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
//             onClick={() => props.onFormSwitch("login")}
//           >
//             Already have an account? Login here.
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };


// Signup.js


// Signup.js

import  { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signupUser } from "../redux/signupThunk"; // Update the import based on your project structure
import { setSignupErrorMessage, setSignupSuccessMessage } from "../redux/signupSlice";

export const Signup = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const signupErrorMessage = useSelector((state) => state.signup.errorMessage);
  const signupSuccessMessage = useSelector((state) => state.signup.successMessage);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.endsWith('.com')) {
      dispatch(setSignupErrorMessage("Please enter a valid email address ending with '.com'."));
      return;
    }

    try {
      const response = await dispatch(signupUser({ email, password, username }));
      dispatch(setSignupSuccessMessage('Registration successful! You can now login.'));
      setEmail('');
      setPassword('');
      setUsername('');
    } catch (error) {
      console.error('Registration failed', error);
      dispatch(setSignupErrorMessage('Registration failed. Please try again.'));
      setEmail('');
      setPassword('');
      setUsername('');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-lg shadow-md">
         <div>
           <h2 className="mt-6 text-center text-3xl font-bold text-black">
             Register
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
         <input type="hidden" name="remember" value="true" />
         <div className="rounded-md shadow-sm -space-y-px ">
            <div>  <label htmlFor="username" className="sr-only">Username</label>
             <input id="username" name="username" type="text" autoComplete="username" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            </div>
         <div>
               <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative mt-[10px] block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" onChange={(e) => setEmail(e.target.value)} />
           </div>
           <div>
              <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative mt-[10px] block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>
       <div>
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Register
           </button>
          </div>
        </form>
    {signupSuccessMessage && (
      <p className="mt-2 text-center text-sm text-green-600">{signupSuccessMessage}</p>
    )}
    {signupErrorMessage && (
      <p className="mt-2 text-center text-sm text-red-600">{signupErrorMessage}</p>
    )}

       <div className="text-center">
           <button
            className="mt-2 w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            onClick={() => props.onFormSwitch("login")}
          >
            Already have an account? Login here.
          </button>
        </div>
      </div>
    </div>
  );
};