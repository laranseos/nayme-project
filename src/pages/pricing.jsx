import pic5 from '../assets/pic5.png'
const Pricing = () => {
  return (
    <div className="flex flex-col items-center">
      <div>
        <img src={pic5} className="h-auto max-w-full"></img>
      </div>
      <div className="w-4/5 sm:w-2/6 flex flex-col items-center py-16 sm:py-32">
        <h1 className="font-bold text-2xl sm:text-6xl" style={{ color: '#626262' }}>Our Small Price</h1>
        <p className="text-center mt-5 text-sm sm:text-base" style={{ color: '#626262' }}>
          Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div className="grid w-full sm:grid-cols-2">
        <div className="flex flex-col items-center">
          <div className="border rounded shadow-xl sm:w-4/5 flex flex-col items-center">
            <div className="mt-10 mb-14 sm:mb-28 py-6 sm:text-3xl text-white w-full text-center" style={{ backgroundColor: '#426E86', width: '100%' }}>Monthly Package</div>
            <span className="text-4xl sm:text-6xl" style={{ color: '#426E86' }}>$31.99 /M</span>
            <div className="py-10 sm:py-20 w-3/5 sm:text-3xl text-center" style={{ color: '#585856' }}>
              30 days trial Features Synced to cloud database 10 hours of support Social media integration 24/7 support</div>
            <button className="bg-white hover:bg-gray-100 sm:text-lg font-semibold py-4 px-4 border border-gray-400 rounded shadow mb-14">
              Start 14 Days Free Trial
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="border rounded shadow-xl sm:w-4/5 flex flex-col items-center">
            <div className="mt-10 mb-14 sm:mb-28 py-6 sm:text-3xl text-white w-full text-center" style={{ backgroundColor: '#426E86', width: '100%' }}>Yearly Package</div>
            <span className="text-4xl sm:text-6xl" style={{ color: '#426E86' }}>$61.99 /M</span>
            <div className="py-10 sm:py-20 w-3/5 sm:text-3xl text-center" style={{ color: '#585856' }}>
              30 days trial Features Synced to cloud database 10 hours of support Social media integration 24/7 support</div>
            <button className="bg-white hover:bg-gray-100 sm:text-lg font-semibold py-4 px-4 border border-gray-400 rounded shadow mb-14">
              Start 14 Days Free Trial
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing;