import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import './Navbar.css'

export default function Navbar() {
    return (
        <nav style={{ height: '80px', width: '100%', background: '#2181F8', marginTop: '0px', display: 'flex', alignItems: 'center',}}>


            <span className='cambay-bold' style={{ color: '#FFFFFF',width:'20%',marginLeft:'20px' }}>Company Logo</span>

            <div id="nav-search" style={{
                background: '#F3F3F3',
                height: '43px',
                width: '60%',
                display: 'flex',
                alignItems: 'center',
                borderRadius: '10px',
                justifyContent: 'space-between'
            }} >
                <div>
                    <label htmlFor="categories" className='poppins-regular' style={{ color: '#000000' }}>All Categories</label>
                    <select name="categories" id="categories" >
                        <option value="xyz" className='poppins-regular'>xyz</option>
                        <option value="abc" className='poppins-regular'>abc</option>
                    </select>
                </div>
                
                    <input type="text" className='poppins-regular' placeholder='Search for Products..' style={{
                        height:'90%',
                        border : 'none',
                        textAlign:'left',
                        background:'#F3F3F3',
                        width : '65%'
                    }} />
                

                <div id="search-icon" style={{
                    height:'60%',
                    borderRadius : '10px',
                    padding:'8px',
                    background: '#2181F8',
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                    border:'0.75px solid #FFFFFF',
                    width:'5%'
                }}>
                    <SearchIcon style={{
                        color: '#F3F3F3',
                        
                    }} />
                </div>
            </div>
            <div id="nav-icons" style={
                {
                    width:'20%'
                    
                }
            }>
                <FavoriteIcon style={{
                    color : '#F3F3F3',
                }}/>
                <ShoppingCartIcon style={{
                    color : '#F3F3F3',
                }}/>
                <PersonIcon style={{
                    color : '#F3F3F3',
                }}/>
            </div>
        </nav>
    )

}
