import React, { useState } from 'react'
import { Alert,Snackbar,TextField } from '@mui/material';
import { useFormContext } from '../Contexts/FormContext';
import LoadingButton from '@mui/lab/LoadingButton';

const ImporterCheckout = () => {

    const [snackBarVisibility, setSnackBarVisibility] = useState(false);
    const [snackBarMessage, setSnackBarMessage] = useState("Test Message");
    const [snackBarType, setSnackBarType] = useState("success");
    const [nextButtonLoading, setNextButtonLoading] = useState(false);

    const { formValues, updateFormValue } = useFormContext();

        const handleFormValues = (e) => {
            const { name, value } = e.target;
            updateFormValue(name, value);
        };

    const customSnackBar = () => (
        <Snackbar open={snackBarVisibility} autoHideDuration={6000} onClose={() => setSnackBarVisibility(false)}>
            <Alert onClose={() => setSnackBarVisibility(false)} severity={snackBarType} sx={{ width: '100%' }}>
                {snackBarMessage}
            </Alert>
        </Snackbar>
    );

    return (

        <div>
        {customSnackBar()}
            <section id='checkout-title' className=' flex flex-row md:h-16 sm:h-14 text-xl md:text-3xl font-medium  bg-[#2181f8] text-[#FFFFFF] px-2 py-4 my-4 mx-2 rounded-md justify-center items-center'>
                CHECK OUT
            </section>
            <section id='checkout-hero' className=' h-[85vh] mx-2 my-1 bg-[#FAFAFA] flex items-center'>

                <div id='chkout-ship-card' className=' h-[95%] bg-[#FFFFFF] w-1/2 mx-4 flex flex-col gap-3 px-4 md:text-lg rounded-md'>
                    <h3 className=' px-4 py-2 font-medium text-[#000000] text-lg md:text-xl my-2 text-left'>Shipping Address</h3>
                    <TextField
                    className=' px-2 w-[100%] mx-8 text-sm'
                    type="text"
                    value={formValues.addLine1 || ''}
                    name="addLine1"
                    label="Flat/HouseNo/Building/Apartment"
                    onChange={handleFormValues}
                    required
                />
                <TextField
                    className='w-[100%] mx-8'
                    type="text"
                    value={formValues.addLine2 || ''}
                    name="addLine2"
                    label="Area, Street, Sector, Village"
                    onChange={handleFormValues}
                    
                />
                <TextField
                    className='w-[100%] mx-8'
                    type="text"
                    value={formValues.addLine3 || ''}
                    name="addLine3"
                    label="Landmark (If Any)"
                    onChange={handleFormValues}
                    required
                />
                <div className=' flex justify-between'>
                <TextField
                    className='w-[48%] '
                    type="text"
                    value={formValues.city || ''}
                    name="city"
                    label="City"
                    onChange={handleFormValues}
                    required
                />
                <TextField
                    className='w-[48%] '
                    type="text"
                    value={formValues.pinCode || ''}
                    name="pinCode"
                    label="Pin Code"
                    onChange={handleFormValues}
                    required
                />
                </div>
                <TextField
                    className='w-[100%] mx-8'
                    type="text"
                    value={formValues.contact || ''}
                    name="contact"
                    label="Contact"
                    onChange={handleFormValues}
                    required
                />
                <LoadingButton
                loading={nextButtonLoading}
                variant='contained'
                disableElevation
                size='large'
                onClick={()=>{
                    setNextButtonLoading(true);
                    if(!formValues.addLine1 || !formValues.addLine2 || !formValues.addLine3 || !formValues.contact || !formValues.city || !formValues.pinCode){
                        setSnackBarMessage("All fields are required");
                        setSnackBarType("warning");
                        setSnackBarVisibility(true);
                        setNextButtonLoading(false)
                    }
                }}
                >
                    confirm Address
                </LoadingButton>
                </div>
            </section>

        </div>
    )
}

export default ImporterCheckout;