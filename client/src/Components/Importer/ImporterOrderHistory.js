import React from 'react'
import { TableContainer, TableBody, Table, TableCell, TableRow, TableFooter, TablePagination, TableHead } from '@mui/material';


const ImporterOrderHistory = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const columns = [
        { id: 'ORDER_ID', label: 'ORDER_ID', minWidth: 170 },
        { id: 'STATUS', label: 'STATUS', minWidth: 100 },
        {
            id: 'DATE',
            label: 'DATE',
            minWidth: 170,
            align: 'center',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'TOTAL',
            label: 'TOTAL',
            minWidth: 170,
            align: 'center',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'ACTION',
            label: 'ACTION',
            minWidth: 170,
            align: 'center',
            format: (value) => value.toFixed(2),
        },
    ];


    function createData(ORDER_ID, STATUS, DATE, TOTAL) {

        return { ORDER_ID, STATUS, DATE, TOTAL, ACTION: 'View Details ->' };
    }

    const rows = [
        createData('#96459761', 'IN PROGRESS', 'Dec 7 2019 23:26', '$70 (4 Products)'),
        createData('#96459761', 'COMPLETED', 'Dec 7 2019 23:26', '$70 (4 Products)'),
        createData('#96459762', 'CANCELLED', 'Dec 8 2019 12:45', '$80 (5 Products)'),
        createData('#96459763', 'COMPLETED', 'Dec 9 2019 09:10', '$90 (3 Products)'),
        createData('#96459764', 'CANCELLED', 'Dec 10 2019 16:30', '$100 (6 Products)'),
        createData('#96459765', 'COMPLETED', 'Dec 11 2019 10:55', '$110 (2 Products)'),
        createData('#96459766', 'CANCELLED', 'Dec 12 2019 14:20', '$120 (7 Products)'),
        createData('#96459767', 'COMPLETED', 'Dec 13 2019 20:05', '$130 (8 Products)'),
        createData('#96459768', 'COMPLETED', 'Dec 14 2019 17:40', '$140 (4 Products)'),
        createData('#96459769', 'COMPLETED', 'Dec 15 2019 11:15', '$150 (3 Products)'),
        createData('#96459770', 'COMPLETED', 'Dec 16 2019 09:30', '$160 (5 Products)'),
        createData('#96459771', 'COMPLETED', 'Dec 17 2019 13:00', '$170 (6 Products)'),
        createData('#96459772', 'COMPLETED', 'Dec 18 2019 22:45', '$180 (2 Products)'),
        createData('#96459773', 'COMPLETED', 'Dec 19 2019 19:20', '$190 (4 Products)'),

    ];


    return (
        <div className=' h-[100vh]'>
            <div id='current-order-progress' className='h-[25%] border-black w-[95%] my-6 mx-auto px-6 py-3 bg-[#FFFFFF] flex flex-col justify-between shadow-md'>
                <h2 className=' px-4 py-2 bg-[#FBF4CE] w-fit text-[#191C1F] uppercase font-semibold rounded-sm'>In Progress</h2>

                <ul className='flex flex-col gap-2 md:text-sm font-poppins '>
                    <li>
                        Order ID : <span className='text-[#191C1F] font-semibold '>#71667167</span>
                    </li>
                    <li className=' text-sm font-regular text-[#77878F]'>
                        Dec 7, 2019 23:26 . <span className='text-sm font-regular text-[#77878F]'>2 Products</span>
                    </li>
                    <li>
                        <span className='text-[#2DA5F3] font-semibold'> $160.00 USD</span>
                    </li>
                </ul>

            </div>
            <div id='order-table' className=' w-[95%] py-2 px-4 mx-auto my-6 rounded-sm shadow-md'>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead >
                            <TableRow>
                                <TableCell align="left" sx={{ fontFamily: 'Poppins'  }} colSpan={5} className='uppercase sm:text-md md:text-lg'>
                                    Order History
                                </TableCell>

                            </TableRow>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        className='font-bold'
                                        style={{ top: 57, minWidth: column.minWidth, fontFamily: 'Poppins',fontStyle:'bold'}}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        {column.id === 'STATUS' && value === 'COMPLETED' ? (
                                                            <span style={{ color: 'green' }}>{value}</span>
                                                        ) : column.id === 'ACTION' && value.startsWith('View Details') ? (
                                                            <span style={{ color: '#2DA5F3' }}>{value}</span>
                                                        ) :
                                                            column.id === 'STATUS' && value === 'CANCELLED' ? (
                                                                <span style={{ color: 'red' }}>{value}</span>
                                                            ) :
                                                                column.id === 'STATUS' && value === 'IN PROGRESS' ? (
                                                                    <span style={{ color: '#FA8232' }}>{value}</span>
                                                                ) :
                                                                    (
                                                                        value
                                                                    )}
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 15]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </div>
        </div>
    )
}

export default ImporterOrderHistory;