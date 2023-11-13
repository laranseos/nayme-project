import pic2 from '../assets/pic2.png'

const Whyare = () => {
  return (
    <div className="flex justify-center">
      <div className="border shadow-lg xl:w-4/5 w-full flex xl:flex-row flex-col justify-center xl: items-center">
        <div className="w-full xl:w-3/5 mt-8 mb-8 sm:mt-0 sm:mb-0">
          <img src={pic2} className="h-auto w-full"></img>
        </div>
        <div className="w-full xl:w-2/5 flex flex-col items-center">
          <div className="w-11/12 flex flex-col items-center">
            <div className="w-full mt-6 sm:mt-6 xl:mt-1">
              <h1 className="text-base xl:text-xl font-medium" style={{ color: '#426E86' }}>
                <span className="text-xl xl:text-3xl font-bold">Why We Are Different?</span>
              </h1>
              <div>
                <h1 className="mt-10 text-xl xl:text-2xl font-semibold" style={{ color: '#666666' }}>Our Company History</h1>
                <p className="py-4 text-xs sm:text-base font-medium" style={{ color: '#666666' }}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                </p>
              </div>
              <div>
                <h1 className="mt-4 text-xl xl:text-2xl font-semibold" style={{ color: '#666666' }}>Our Success Mission</h1>
                <p className="py-4 text-xs sm:text-base font-medium" style={{ color: '#666666' }}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
              </div>
              <div>
                <h1 className="mt-4 text-xl xl:text-2xl font-semibold" style={{ color: '#666666' }}>Our Future Plan</h1>
                <p className="py-4 text-xs sm:text-base font-medium" style={{ color: '#666666' }}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Whyare;