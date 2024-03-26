import { Button, IconButton } from "@mui/material";
import { Outlet } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ExporterDashboard from "./Exporter-Dashboard/ExporterDashboard";



const ExporterHome = () => {

 


    return <div className="bg-white-500 min-w-full min-h-screen flex " >

        <div className=" basis-1/8 bg-[#1C2536] flex flex-col py-10 px-5 sideBar">

            <h1 className="font-poppins text-3xl text-white font-medium ml-5"> AVM Traders </h1>

            <div className="options-container gap-10 p-5 text-left !items-start  flex flex-col">

                <Button startIcon={<DashboardIcon />} sx={{
                    color: "White",
                    gap:"3px"
                }} > <h1 className="text-lg capitalize">Dashboard</h1> </Button>

                <Button startIcon={<InventoryIcon />} sx={{
                    color: "White",
                    gap:"3px"
                }} > <h1 className="text-lg capitalize">Inventory</h1> </Button>

                <Button startIcon={<LocalShippingIcon />} sx={{
                    color: "White",
                    gap:"3px"
                }} > <h1 className="text-lg capitalize">Exports</h1> </Button>

                <Button startIcon={<AccountCircleIcon />} sx={{
                    color: "White",
                    gap:"3px"
                }} > <h1 className="text-lg capitalize">Profile</h1> </Button>



            </div>
        </div>

        <ExporterDashboard/>          
        <Outlet />

    </div>
}

export default ExporterHome;