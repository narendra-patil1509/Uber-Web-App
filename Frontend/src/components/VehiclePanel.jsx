import React from 'react'

const VehiclePanel = (props) => {
    return (
        <div>
            <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={() => {
                props.setVehiclePanel(false)
            }}><i className='text-3xl text-gray-200 ri-arrow-down-wide'></i></h5>
            <h3 className='text-2xl font-semibold mb-5'>
                Choose a Vehicle
            </h3>
            <div onClick={() => {
                props.setConfirmRidePanel(true)
            }} className='flex border-2 active:border-black mb-2 rounded-xl w-full items-center p-3 justify-between'>
                <img className='h-12' src="" alt="" />
                <div className='w-1/2'>
                    <h4 className='font-medium text-base'>UberGo<span><i className='ri-user-3-fill'></i>4</span></h4>
                    <h5 className='font-medium text-sm'>2 mins away</h5>
                    <p className='text-normal text-xs text-gray-600'>Affordable, compact rides</p>
                </div>
                <h2 className='text-lg font-semibold'>193.20</h2>
            </div>

            <div onClick={() => {
                props.setConfirmRidePanel(true)
            }} className='flex border-2 active:border-black mb-2 rounded-xl w-full items-center p-3 justify-between'>
                <img className='h-10' src="" alt="" />
                <div className='ml-2 w-1/2'>
                    <h4 className='font-medium text-base'>Moto<span><i className='ri-user-3-fill'></i>4</span></h4>
                    <h5 className='font-medium text-sm'>3 mins away</h5>
                    <p className='text-normal text-xs text-gray-600'>Affordable, motorcycle rides</p>
                </div>
                <h2 className='text-lg font-semibold'>65</h2>
            </div>

            <div onClick={() => {
                props.setConfirmRidePanel(true)
            }} className='flex border-2 active:border-black mb-2 rounded-xl w-full items-center p-3 justify-between'>
                <img className='h-10' src="" alt="" />
                <div className='ml-2 w-1/2'>
                    <h4 className='font-medium text-base'>UberAuto<span><i className='ri-user-3-fill'></i>4</span></h4>
                    <h5 className='font-medium text-sm'>3 mins away</h5>
                    <p className='text-normal text-xs text-gray-600'>Affordable, Auto rides</p>
                </div>
                <h2 className='text-lg font-semibold'>65</h2>
            </div>
        </div>
    )
}

export default VehiclePanel