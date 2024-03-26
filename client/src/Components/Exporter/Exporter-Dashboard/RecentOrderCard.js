import { Button, Divider } from "@mui/material";

const RecentOrderCard = ({ props }) => {
    return (

        <div>
            <div className='flex flex-row gap-3 my-2 justify-between'>
                <div >

                    <h1 className='text-green-600 font-medium'>{props.orderId}</h1>
                    <h1 className='text-sm'>{props.customerName}</h1>
                </div>

                <div >


                    <h1 className='text-sm'>{props.orderDate}</h1>
                </div>

                <div >


                    <Button variant='contained' size='small' disableElevation>{props.orderAmount}</Button>
                </div>

            </div>
            <Divider sx={{
                marginTop: "9px"
            }} />
        </div>
    )
}

export default RecentOrderCard;