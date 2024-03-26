import React from 'react'

const ImporterCheckout = () => {
    return (
        <div>
            <section id='checkout-title' className=' flex flex-row md:h-16 sm:h-14 text-xl md:text-3xl font-medium  bg-[#2181f8] text-[#FFFFFF] px-2 py-4 my-4 mx-2 rounded-md justify-center items-center'>
                CHECK OUT
            </section>
            <section id='checkout-hero' className=' h-[85vh] mx-2 my-1 bg-[#FAFAFA] flex items-center'>

            <div id='chkout-ship-card' className=' h-[85%] bg-[#FFFFFF] w-1/2 mx-4 flex flex-col'>
            <h3 className=' px-4 py-2 font-medium text-[#000000] text-lg md:text-xxl'>Shipping Address</h3>
            </div>
            </section>

        </div>
    )
}

export default ImporterCheckout;