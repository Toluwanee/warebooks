
// import { toast } from "react-toastify";
//import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);



  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3100/api/v1/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json(); 
        localStorage.setItem('token', data.token)
       // toast.success('Success')
      } else {
        throw new Error("Network response was not ok");
      }

      console.log('Response:', response); 
    } catch (error) {
      console.error("Error:", error.message);
    }
  };


  return (
    <div className="w-screen text-left p-0">
      {/* <Header /> */}
      <div className="">
        {/* <img className="absolute top-0 right-0 z-[-1]" src={Left} alt="" /> */}

        <div className="flex justify-between items-center mx-16">
          <div>
            <div className="text-[58px] mb-[33px] font-[700]">
            Join us today <br /> and get your books <br /> published without hassle
            </div>
            <div className="text-[20px] text-justify">
            Are you or a colleague struggling to get their <br /> books
              published to reach the desired audience? <br /> Look no further
              – Warebooks is here to <br /> help, and
              direct you to your readers.
            </div>
          </div>
        </div>

        <div className="justify-between mx-16">
          <div className="w-auto grid grid-cols-1 mb-20">
            <div className="w-auto text-[72px] font-[700] mb-3">Sign In</div>
            <div className="w-auto text-[36px] font-[700]">
              Please Login To Continue
            </div>
          </div>

          <div className="grid grid-cols-2">
            <form className="w-auto row justify-center" onSubmit={handleSubmit}>
              <input
                className="bg-[#fff] border grid border-[#9e9e9e] w-[500px] h-[45px] p-5 rounded-lg mb-5"
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />

              <input
                className="bg-[#fff] border grid border-[#9e9e9e] w-[500px] h-[45px] p-5 rounded-lg mb-5"
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />

              <button
                type="submit"
                className="bg-[#5AB9EB] w-24 h-[45px] m-auto mt-8 rounded-lg text-[#fff] shadow-[2px_5px_4px_0px_rgba(199,199,199,0.25)]"
              >
                {loading ? "Loading..." : "Sign In"}
              </button>
            </form>

            <div className="w-screen mt-[-210px]">
             
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Login;























// import React, { useState } from "react";

// export default function Login() {
//   const [formData, setFormData] = useState({ 
//     user: {
//       username: "", 
//       password: "" 
//     },
//   });

//   const handleChange = (e) => {
//     setFormData({
//       user: {
//         ...formData.user,
//         [e.target.name]: e.target.value,
//       },
//     });
//   };

//   return (
//     <figure className="h-screen flex bg-gray-100">
//       <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-1">
//         <blockquote className="text-2xl font-medium text-center">
//           <p className="text-lg font-semibold">Welcome to My-App</p>
//         </blockquote>
        
//         <div className="text-primary m-6">
//       <div className="flex items-center mt-3 justify-center">
//         <h1 className="text-2xl font-medium text-primary mt-4 mb-2">
//           Login to your account
//         </h1>
//       </div>
//       <form>
//         <label className="text-left">Username:</label>
//         <input
//           name="username"
//           type="text"
//           value={formData.user.username}
//           onChange={handleChange}
//           placeholder="Username"
//           className={
//             "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
//           }
//         />
//         <label>Password:</label>
//         <input
//           name="password"
//           type="password"
//           value={formData.user.password}
//           onChange={handleChange}
//           placeholder="Password"
//           className={
//             "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
//           }
//         />
//         <div className="flex items-center mt-3 justify-center">
//           <button
//             className={
//               "bg-blue-700 hover:bg-blue-500 py-2 px-4 text-md text-white rounded border border-blue focus:outline-none focus:border-black"
//             }
//             value="Login"
//           >
//             Login
//           </button>
//         </div>
//       </form>
//       <div className="flex items-center mt-3 justify-center">
//       <button className={"justify-center text-blue-500 hover:underline"}>
//         Need to register? Sign up for free
//       </button>
//       </div>
//     </div>
        
//       </div>
//     </figure>
//   );
// }