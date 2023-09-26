import { Link } from 'react-router-dom'



import { useEffect, useState } from "react";

const Register = () => {
  //create your state here there are two things you need 1. the name of the state 2. the name of the set part of the state. So if you want to create a state for house now: const [house, setHouse] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  //const [date, setDate] = useState("");
  //const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");


  //This is the function that sends the signup data to the backend
  const submitRegister = async (event) => {
    event.preventDefault();
    if (password === password_confirmation) {
      try {
        //This is the end point from the backend. input for endpoint here
        const response = await fetch("http://localhost:3100/api/v1/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          //This where we are listing all the details we want to send to teh backend
          body: JSON.stringify({
            firstName,
            lastName,
            phone,
            email,
           // dateofbirth: date,
           // gender,
            password,
          }),
        });

        // console.error('Response:', await response.json()); 
  
        if (!response.ok) {
          throw new Error("Network response was not ok");
        } else {
          const data = await response.json();
          // console.info('Success:', data);
         // setDate("");
          setEmail("");
          setFirstName("");
          setLastName("");
         // setGender("");
          setPassword("");
          setPhone("");
          setPasswordConfirmation("");
        }
      } catch (error) {
        console.error("Error:", error.message);
      }
    } else {
      console.error('password does not match');
    }
  };
  return (
    <div className="w-full text-left p-0">
      <div className="bgOne">
        {/* <img className="absolute top-0 right-0 z-[-1]" src={Left} alt="" /> */}

        <div className="flex justify-between items-center mx-16">
          <div>
            <div className="text-[58px] mb-[33px] font-[700]">
              Join us today <br /> and get your books <br /> published without hassle
            </div>
            <div className="text-[20px] text-justify">
              Are you or a loved one battling cancer and seeking <br /> a
              reliable companion throughout your journey? <br /> Look no further
              – Cancer Care Connect is here to <br /> empower, inform, and
              uplift you every step of the way.
            </div>
          </div>
        </div>
        <div className="bgTwo">
          <div className="w-[80%] m-auto text-[72px] font-[700] mb-5">
            Sign Up
          </div>
          <div className="w-[80%] m-auto text-[36px] font-[700] mb-5 ">
            Please Sign Up To Continue
          </div>

          {/* This is the form you can see all the input feilds here. 
          Incase you need another input field:
           <input
                className="bg-[#fff] border border-[#9e9e9e] p-[5px] rounded-[8px]"
                type="text"
                value={Put the name of the input feild here. Make sure you've created a state for at the top. I'll leave a comment at the top so you can see where you should create the state}
                onChange={(event) => {
                  put the set part of the state here then put e.target.value inside liek this: setFirstName(event.target.value);
                }}
                placeholder="First Name"
              />

           */}
          <form onSubmit={submitRegister}>
            <div className=" w-[80%] grid grid-cols-2 gap-10 m-auto">
              <input
                className="bg-[#fff] border border-[#9e9e9e] p-[5px] rounded-[8px]"
                type="text"
                value={firstName}
                onChange={(event) => {
                  setFirstName(event.target.value);
                }}
                placeholder="First Name"
              />
              <input
                className="bg-[#fff] border border-[#9e9e9e] p-[5px] rounded-[8px]"
                type="text"
                value={lastName}
                onChange={(event) => {
                  setLastName(event.target.value);
                }}
                placeholder="Last Name"
              />
              <input
                className="bg-[#fff] border border-[#9e9e9e] p-[5px] rounded-[8px]"
                type="tel"
                minLength={11}
                maxLength={11}
                value={phone}
                onChange={(event) => {
                  setPhone(event.target.value);
                }}
                placeholder="Mobile Number"
              />
              <input
                className="bg-[#fff] border border-[#9e9e9e] p-[5px] rounded-[8px]"
                type="text"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                placeholder="Email"
              />
              {/* <input
                className="bg-[#fff] border border-[#9e9e9e] p-[5px] rounded-[8px]"
                type="date"
                value={date}
                min="1920-01-01" 
                max="2022-12-31"
                onChange={(event) => {
                  setDate(event.target.value);
                }}
                placeholder="Date"
              /> */}
              {/* <select
                className="bg-[#fff] border border-[#9e9e9e] p-[5px] rounded-[8px]"
                type="text"
                placeholder="Gender"
                value={gender}
                onChange={(event) => {
                  setGender(event.target.value);
                }}
              >
                <option value="">Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select> */}
              <input
                className="bg-[#fff] border border-[#9e9e9e] p-[5px] rounded-[8px]"
                type="password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                placeholder="Password"
              />
              <input
                className="bg-[#fff] border border-[#9e9e9e] p-[5px] rounded-[8px]"
                type="password"
                placeholder="Confirm Password"
                value={password_confirmation}
                onChange={(event) => {
                  setPasswordConfirmation(event.target.value);
                }}
              />
            </div>
            <div className="w-full flex justify-center">
              <button type="submit" className="bg-[#5AB9EB] w-[400px] h-[45px] m-auto mt-[38px] rounded-[15px] text-[#fff] shadow-[2px_5px_4px_0px_rgba(199,199,199,0.25)]">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;








// const Register = () => {
//   return (
//     <div>
//         <div className='bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-flter backdrop-blur-sm bg-opacity-30 relative' > 
//           <h1 className='text-4xl text-whitefont-bold text-center mb-6'>Register</h1>
//           <form action=''>
//           <div className='relative my-4'>
//               <input type="email" className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 
//               focus:outline-none focus:ring-0 focus-text-white focus-border-blue-600 peer' placeholder=''/>
//               <label htmlFor="" className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 
//               peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 
//               peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Your Email</label>
//           </div>

//           <div  className='relative my-4'>
//               <input type="username" className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 
//               focus:outline-none focus:ring-0 focus-text-white focus-border-blue-600 peer' placeholder=''/>
//               <label htmlFor="" className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer=focus:left-0 
//               peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 
//               peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'> First Name </label>
//           </div>

//           <div  className='relative my-4'>
//               <input type="username" className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 
//               focus:outline-none focus:ring-0 focus-text-white focus-border-blue-600 peer' placeholder=''/>
//               <label htmlFor="" className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer=focus:left-0 
//               peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 
//               peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'> User Name </label>
//           </div>

//           <div  className='relative my-4'>
//               <input type="password" className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 
//               focus:outline-none focus:ring-0 focus-text-white focus-border-blue-600 peer' placeholder=''/>
//               <label htmlFor="" className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer=focus:left-0 
//               peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 
//               peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'> Password</label>
//           </div>

//           <div>
//             <div>
//               <input type="checkbox" name="" id=""/>
//               <label htmlFor="Remember Me"></label>
//             </div>
//               <span>Forgot Password?</span>
//           </div>
//           <button className='w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 
//           hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300'  type="submit">Register</button>
//           <div>

          

//             <span>Already have an account <Link className='text-blue-500' to='/Login'>Login</Link> </span>
//           </div>
//           </form>
//         </div>
//     </div>
//   )
// }

// export default Register
