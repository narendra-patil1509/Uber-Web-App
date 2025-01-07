import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import RidePopUp from '../components/RidePopUp';
import FinishRide from '../components/FinishRide';

const CaptainRiding = () => {

    const [finishRidePanel, setFinishRidePanel] = useState(false);
    const finishRidePanelRef = useRef(null);
    useGSAP(function () {
        if (finishRidePanel) {
          gsap.to(finishRidePanelRef.current, {
            transform: 'translateY(0)'
          })
        } else {
          gsap.to(finishRidePanelRef.current, {
            transform: 'translateY(100%)'
          })
        }
      },[finishRidePanel])

  return (
    <div className='h-screen'>
      <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
        <img className='w-16' src="https://upload.wikimedia.org/wikimedia/commas/c/cc/Uber_logo_2018.png" alt="" />
        <Link to='/home' className='h-10 w-10 bg-white flex items-center justify-center rounded-full'>
          <i className='text-lg font-medium ri-home-5-line'></i>
        </Link>
      </div>
      <div className='h-4/5'>
        <img className='h-full w-full object-cover' src="" alt="" />
      </div>
      <div onClick={()=>{
        setFinishRidePanel(true)
      }} className='h-1/5 p-6 flex items-center justify-between relative bg-yellow-400'>
      <h5 className='p-1 text-center w-[90%] absolute top-0' onClick={() => {}}>
        <i className='text-3xl text-gray-200 ri-arrow-up-wide'></i>
      </h5>
        <h4 className='font-semibold'>4 Km</h4>
        <button className='bg-green-600 text-white font-semibold p-3 px-10 rounded-lg'>Complete Ride</button>
      </div>
      <div ref={finishRidePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12'>
        <FinishRide setFinishRidePanel={setFinishRidePanel}/>
      </div>
    </div>
  )
}

export default CaptainRiding