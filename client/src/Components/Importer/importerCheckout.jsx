import React from 'react'
import Navbar from './Navbar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import dummyImg from '../../public/image 6.png';

import './Navbar.css'

const ImporterCheckout = () => {
    return (
        <div >
            <Navbar />

            <div id="chechout-title" style={{
                marginTop: '35px',
                background: '#2181F8',
                width: '100%',
                height: '65px',
                color: '#f3f3f3',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
                className='poppins-regular'>
                C H E C K   O U T
            </div>

            <div id="main-content-checkout" style={{
                marginTop: '25px',
                display: 'flex',
                justifyContent: 'space-between'
            }}>

                <div id="shipping-add" style={{
                    width: '45%',
                    marginLeft: '40px',
                    padding: '10px 5px',
                    border: '0.75px solid black',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-evenly'
                }}>

                    <h3 style={{
                        marginBottom: '10px',
                    }} className='poppins-regular'>Shipping Address</h3>
                    <TextField
                        style={{
                            marginTop: '10px',
                            width: '100%',
                            fontSize: '10px',
                            marginBottom: '12px'
                        }}
                        id='Flat/House No/Builing/Company/Apartment'
                        label='Flat/House/Office/Apartment'
                        outlined
                        value={' '}
                        type='text'
                    />
                    <TextField
                        style={{
                            marginTop: '5px',
                            width: '100%',
                            marginBottom: '12px'

                        }}
                        id='Area/Street/Sector/Village'
                        label='Area/Street/Sector/Village'
                        outlined
                        value={' '}
                        type='text'
                    />
                    <TextField
                        style={{
                            marginTop: '5px',
                            width: '100%',
                            marginBottom: '12px'
                        }}
                        id='Flat/House No/Builing/Company/Apartment'
                        label='Flat/House/Office/Apartment'
                        outlined
                        value={' '}
                        type='text'
                    />
                    <TextField
                        style={{
                            marginTop: '5px',
                            width: '100%',
                            marginBottom: '12px'
                        }}
                        id='Landmark(if any)'
                        label='Landmark(if any)'
                        outlined
                        value={' '}
                        type='text'
                    />

                    <TextField
                        style={{
                            marginTop: '5px',
                            width: '100%',

                        }}
                        id='Contact'
                        label='Contact'
                        outlined
                        value={' '}
                        type='text'
                        margin='normal'
                    />

                    <div id="tp" style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginBottom: '12px',
                    }}>
                        <TextField
                            style={{
                                marginTop: '5px',
                                width: '45%',

                            }}
                            id='Pin Code'
                            label='Pin Code'
                            outlined
                            value={' '}
                            type='text'

                        />
                        <TextField
                            style={{
                                marginTop: '5px',
                                width: '45%',


                            }}
                            id='Pin Code'
                            label='Pin Code'
                            outlined
                            value={' '}
                            type='text'

                        />
                    </div>

                    <Button variant="contained">Confirm Address</Button>

                </div>

                <div id="order-summary" style={{
                    width: '45%',
                    border: '0.75px solid black',
                    marginRight: '10px'
                    }}>
                    <h4 className='poppins-regular' style={{
                        marginTop: '10px',
                        marginLeft: '12px'
                    }}>Order Summary</h4>

                    <div className="summary-pic-info poppins-regular" style={{
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}>
                        <img src={dummyImg} alt=".." />
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-evenly',
                            marginRight: '12px'
                        }} >
                            <p>
                                Quantity
                            </p>
                            <p>
                                Quantity
                            </p>
                           
                        </div>
                    </div>
                    <div className="summary-pic-info poppins-regular" style={{
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}>
                        <img src={dummyImg} alt=".." />
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-evenly',
                            marginRight: '12px'
                        }} >
                            <p>
                                Quantity
                            </p>
                            <p>
                                Quantity
                            </p>

                        </div>

                    </div>
                    <hr />

                    <div className='poppins-regular' style={
                        {display : 'flex',
                        justifyContent : 'space-evenly',
                        alignItems : 'center',
                        marginTop : '10%',
                        marginBottom : '5%',
                        }
                    }>
                    <div className="items poppins-light">
                        <p>Total</p>
                        <p>Shopping Cost</p>
                        <p>Discount</p>
                        <hr />
                        <p><span className='poppins-regular' style={{color : '#2181F8'}}>Total</span></p>
                    </div>
                    <div className="items">
                        <p>$840</p>
                        <p>$50</p>
                        <p>$<span style={{color : '#2181F8'}}>40</span> </p>
                        <hr />
                        <p><span className='poppins-regular' style={{color : '#000000'}}>$850</span></p>
                    </div>
                    </div>
                    <Button variant="contained" style={{width : '100%'}}>Complete Purchase</Button>
                </div>
            </div>

        </div>
    )
}

export default ImporterCheckout;