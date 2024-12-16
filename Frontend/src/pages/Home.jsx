import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css';
import LocationSearchPanel from '../components/LocationSearchPanel';

const Home = () => {
  const [pickup, setPickup] = useState('');
  const [destinattion, setDestinattion] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);

  // need to install npm i gsap
  // remixicon npm install remixicon --save
  const submitHandler = (e) => {
    e.preventDefault();
  }

  useGSAP(function () {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '70%',
        padding: 24,
        opacity: 1,
      })
      gsap.to(panelCloseRef.current, {
        opacity: 1,
      })
    } else {
      gsap.to(panelRef.current, {
        height: '0%',
        opacity: 0,
      })
      gsap.to(panelCloseRef.current, {
        opacity: 0,
      })
    }
  }, [panelOpen, panelCloseRef])

  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-16 absolute left-5 top-5' src="" alt="" />
      <div className='h-screen w-screen'>
        {/* Image for temporary use */}
        <img src="" alt="" />
      </div>
      <div className='flex flex-col justify-end h-screen absolute top-0 w-full'>
        <div className='h-[30%] p-6 bg-white'>
          <h5
            ref={panelCloseRef}
            className='absolute opacity-0 right-6 top-6 text-2xl'
            onClick={() => {
              setPanelOpen(false)
            }} >
            <i className='ri-arrow-down-wide-line'></i>
          </h5>
          <h4 className='text-2xl font-semibold'>Find a trip</h4>
          <form onSubmit={(e) => {
            submitHandler(e);
          }}>
            <div className="line absolute h-16 w-1 top[45%] bg-gray-700 rounded-full"></div>
            <input className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5'
              type="text"
              placeholder='Add a pick-up location'
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value)
              }}
              onClick={() => {
                setPanelOpen(true)
              }} />
            <input
              className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3'
              type="text"
              placeholder='Enter your destinattion'
              value={destinattion}
              onChange={(e) => {
                setDestinattion(e.target.value)
              }}
              onClick={() => {
                setPanelOpen(true)
              }} />
          </form>
        </div>
        <div ref={panelRef} className=' bg-white h-0'>
          <LocationSearchPanel />
        </div>
      </div>
      <div className='fixed w-full z-10 bottom-0 bg-white px-3 py-6'>
        <h3 className='text-2xl font-semibold mb-5'>
          Choose a Vehicle
        </h3>
        <div className='flex border-2 border-black mb-2 rounded-xl w-full items-center p-3 justify-between'>
          <img className='h-12' src="" alt="" />
          <div className='w-1/2'>
              <h4 className='font-medium text-base'>UberGo <span><i className='ri-user-3-fill'></i>4</span></h4>
              <h5 className='font-medium text-sm'>2 mins away</h5>
              <p className='text-normal text-xs text-gray-600'>Affordable, compact rides</p>
          </div>
          <h2 className='text-xl font-semibold'>193.20</h2>
        </div>
      </div>
    </div>
  )
}

export default Home