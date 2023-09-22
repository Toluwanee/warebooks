import { Link } from 'react-router-dom'


const Register = () => {
  return (
    <div>
        <div className='bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-flter backdrop-blur-sm bg-opacity-30 relative' > 
          <h1 className='text-4xl text-whitefont-bold text-center mb-6'>Register</h1>
          <form action=''>
          <div className='relative my-4'>
              <input type="email" className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 
              focus:outline-none focus:ring-0 focus-text-white focus-border-blue-600 peer' placeholder=''/>
              <label htmlFor="" className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 
              peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 
              peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Your Email</label>
          </div>

          <div  className='relative my-4'>
              <input type="password" className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 
              focus:outline-none focus:ring-0 focus-text-white focus-border-blue-600 peer' placeholder=''/>
              <label htmlFor="" className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer=focus:left-0 
              peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 
              peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Your Password</label>
          </div>

          <div  className='relative my-4'>
              <input type="password" className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 
              focus:outline-none focus:ring-0 focus-text-white focus-border-blue-600 peer' placeholder=''/>
              <label htmlFor="" className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer=focus:left-0 
              peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 
              peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Confirm Password</label>
          </div>

          <div>
            <div>
              <input type="checkbox" name="" id=""/>
              <label htmlFor="Remember Me"></label>
            </div>
              <span>Forgot Password?</span>
          </div>
          <button className='w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 
          hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300'  type="submit">Register</button>
          <div>

          

            <span>Already have an account <Link className='text-blue-500' to='/Login'>Login</Link> </span>
          </div>
          </form>
        </div>
    </div>
  )
}

export default Register
