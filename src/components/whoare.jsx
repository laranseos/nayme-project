import pic1 from '../assets/pic1.png'

const Whoare = () => {
  return (
    <div className="flex justify-center">
      <div className="border shadow-lg xl:w-4/5 w-full flex xl:flex-row flex-col justify-center xl: items-center">
        <div className="w-full xl:w-2/5 flex flex-col items-center">
          <div className="w-11/12 flex flex-col items-center">
            <div className="w-full mt-6 sm:mt-6 xl:mt-1">
              <h1 className="text-base xl:text-xl font-medium" style={{ color: '#426E86' }}>Who We Are <br /><span className="text-xl xl:text-3xl font-bold">We Are Professional And We Are Very Creative</span></h1>
            </div>
            <div className="py-10">
              <p>Awesome Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum is simply dummy text
                of the printing and typesetting industry is the glory for company</p>
            </div>
            <div className="w-11/12 flex flex-col">
              <h1 className="text-lg xl:text-2xl font-semibold" style={{ color: '#666666' }}>Our Experience</h1>
              <div>
                <div className="py-4">
                  <h6 className="text-xs" style={{ color: '#666666' }}>Lorem Lpsum<span style={{marginLeft: '15%'}}>35%</span></h6>
                </div>
                <div className="h-1 w-full bg-neutral-200 dark:bg-neutral-600">
                  <div className="h-1" style={{ width: '35%', backgroundColor: '#426E86' }}></div>
                </div>
              </div>
              <div>
                <div className="py-4">
                  <h6 className="text-xs" style={{ color: '#666666' }}>Lorem Lpsum<span style={{marginLeft: '45%'}}>65%</span></h6>
                </div>
                <div className="h-1 w-full bg-neutral-200 dark:bg-neutral-600">
                  <div className="h-1" style={{ width: '65%', backgroundColor: '#426E86' }}></div>
                </div>
              </div>
              <div>
                <div className="py-4">
                  <h6 className="text-xs" style={{ color: '#666666' }}>Lorem Lpsum<span style={{marginLeft: '5%'}}>25%</span></h6>
                </div>
                <div className="h-1 w-full bg-neutral-200 dark:bg-neutral-600">
                  <div className="h-1" style={{ width: '25%', backgroundColor: '#426E86' }}></div>
                </div>
              </div>
              <div>
                <div className="py-4">
                  <h6 className="text-xs" style={{ color: '#666666' }}>Lorem Lpsum<span style={{marginLeft: '65%'}}>85%</span></h6>
                </div>
                <div className="h-1 w-full bg-neutral-200 dark:bg-neutral-600">
                  <div className="h-1" style={{ width: '85%', backgroundColor: '#426E86' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full xl:w-3/5 mt-8 mb-8 sm:mt-0 sm:mb-0">
          <img src={pic1}className="h-auto w-full"></img>
        </div>
      </div>
    </div>
  )
}

export default Whoare;