const Signup = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full sm:w-3/5 flex flex-col items-center border shadow-xl ">
        <h1 className="mt-16 mb-10 font-bold text-2xl sm:text-5xl text-center">Welcome Resources Plan</h1>
        <form className="sm:w-4/5">
          <div className="grid gap-8 mt-6 mb-6 sm:grid-cols-2">
            <div>
              <input 
                type="text" 
                id="Organization Name" 
                className="px-8 border border-gray-300 text-gray-900 
                      text-sm focus:ring-blue-500 focus:border-blue-500 
                      block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
                      dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                      dark:focus:border-blue-500" placeholder="Organization Name" required>
              </input>
            </div>
            <div>
              <input 
                type="text" 
                id="Address including country" 
                className="px-8 border border-gray-300 text-gray-900
                 text-sm focus:ring-blue-500 focus:border-blue-500 
                 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
                 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                 dark:focus:border-blue-500" placeholder="Address including country" required>
              </input>
            </div>
            <div>
              <input 
                type="Uzername" 
                id="company" 
                className="px-8 border border-gray-300 text-gray-900 
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
                className="px-8 border border-gray-300 text-gray-900 
                text-sm focus:ring-blue-500 focus:border-blue-500 
                block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
                dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                dark:focus:border-blue-500" placeholder="Password" required>
              </input>
            </div>
            <div>
              <input 
                type="text" 
                id="First Name" 
                className="px-8 border border-gray-300 text-gray-900 
                text-sm focus:ring-blue-500 focus:border-blue-500 
                block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
                dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                dark:focus:border-blue-500" placeholder="First Name" required>
              </input>
            </div>
            <div>
              <input 
                type="text" 
                id="Last Name" 
                className="px-8 border border-gray-300 text-gray-900 
                text-sm focus:ring-blue-500 focus:border-blue-500 
                block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
                dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                dark:focus:border-blue-500" placeholder="Last Name" required>
              </input>
            </div>
            <div>
              <input 
                type="text" 
                id="Email" 
                className="px-8 border border-gray-300 text-gray-900 
                text-sm focus:ring-blue-500 focus:border-blue-500 
                block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
                dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                dark:focus:border-blue-500" placeholder="Email" required>
              </input>
            </div>
            <div>
              <input 
                type="text" 
                id="Mobail Phone Number" 
                className="px-8 border border-gray-300 text-gray-900 
                text-sm focus:ring-blue-500 focus:border-blue-500 
                block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
                dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                dark:focus:border-blue-500" placeholder="Mobail Phone Number" required>
              </input>
            </div>
          </div>
          <button 
            type="submit"
            className="mb-1 text-white hover:bg-blue-800 focus:ring-4 
            focus:outline-none focus:ring-blue-300 font-medium text-sm 
            w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 
            dark:focus:ring-blue-800"
            style={{ width: '100%', backgroundColor: '#426E86' }}
          >Register</button>
          <div>
            <p className="mt-2 text-xs sm:text-sm mb-20 float-right text-gray-300">Don’t have an account?<a href="/pricing" className="text-black underline">Sign up for free</a></p>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Signup;