import pic6 from '../assets/pic6.png'
const Login = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full sm:w-3/5 flex flex-col border shadow-xl ">
        <div className="flex justify-center">
          <div className="mb-5 sm:w-4/5">
            <h1 className="mt-16 mb-10 font-bold text-2xl sm:text-5xl">Login</h1>
            <p className="text-base">See your growth and get consulting support!</p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="sm:w-3/6 flex justify-center border-b-2 p-5">
            <div className="w-6/10 flex gap-2">
              <img src={pic6} alt="image" style={{objectFit: 'contain'}}></img>
              <p className="sm:text-xl" style={{color: '#426E86'}}>Sign in with Microsoft</p>
            </div>
          </div>
        </div>
        <form className="flex justify-center">
          <div className="sm:w-4/5">
            <div class="grid gap-8 mt-6 mb-6">
              <div>
                <input 
                  type="Uzername" 
                  id="company" 
                  class="px-8 border border-gray-300 text-gray-900 
                  text-sm focus:ring-blue-500 focus:border-blue-500 
                  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
                  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                  dark:focus:border-blue-500" placeholder="Uzername" required>
                </input>
              </div>
              <div>
                <input 
                  type="password" 
                  id="Password" 
                  class="px-8 border border-gray-300 text-gray-900 
                  text-sm focus:ring-blue-500 focus:border-blue-500 
                  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
                  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                  dark:focus:border-blue-500" placeholder="Password" required>
                </input>
              </div>
            </div>
            <button 
              type="submit"
              class="mb-1 text-white hover:bg-blue-800 focus:ring-4 
              focus:outline-none focus:ring-blue-300 font-medium text-sm w-full 
              sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 
              dark:focus:ring-blue-800"
              style={{ width: '100%', backgroundColor: '#426E86' }}
            >Login</button>
            <div> 
              <p className="mt-2 text-xs sm:text-sm mb-20 float-right text-gray-300">Not registered yet?<span className="text-black underline">Create an Account</span></p>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
​
export default Login;