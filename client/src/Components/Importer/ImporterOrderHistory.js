import React from 'react'
import { TableContainer, TableBody, Table, TableCell, TableRow, TableFooter, TablePagination, TableHead } from '@mui/material';
import TablePaginationActions from '@mui/material/TablePagination/TablePaginationActions';
import { IconButton } from '@mui/material';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { Box } from '@mui/material';
import { useTheme, Paper, } from '@mui/material';
import PropTypes from 'prop-types';
import Pagination from '@mui/material';

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
            align: 'right',
            format: (value) => value.toFixed(2),
        },
    ];


    function createData(ORDER_ID, STATUS, DATE, TOTAL) {

        return { ORDER_ID, STATUS, DATE, TOTAL, ACTION: 'View Details ->' };
    }

    const rows = [
        createData('#96459761', 'IN PROGRESS', 'Dec 7 2019 23:26', '$70 (4 Products)'),
        createData('#96459761', 'COMPLETED', 'Dec 7 2019 23:26', '$70 (4 Products)'),
        createData('#96459761', 'CANCELLED', 'Dec 7 2019 23:26', '$70 (4 Products)'),
        createData('#96459761', 'COMPLETED', 'Dec 7 2019 23:26', '$70 (4 Products)'),
        createData('#96459761', 'CANCELLED', 'Dec 7 2019 23:26', '$70 (4 Products)'),
        createData('#96459761', 'COMPLETED', 'Dec 7 2019 23:26', '$70 (4 Products)'),
        createData('#96459761', 'CANCELLED', 'Dec 7 2019 23:26', '$70 (4 Products)'),
        createData('#96459761', 'COMPLETED', 'Dec 7 2019 23:26', '$70 (4 Products)'),
        createData('#96459761', 'COMPLETED', 'Dec 7 2019 23:26', '$70 (4 Products)'),
        createData('#96459761', 'COMPLETED', 'Dec 7 2019 23:26', '$70 (4 Products)'),
        createData('#96459761', 'COMPLETED', 'Dec 7 2019 23:26', '$70 (4 Products)'),
        createData('#96459761', 'COMPLETED', 'Dec 7 2019 23:26', '$70 (4 Products)'),
        createData('#96459761', 'COMPLETED', 'Dec 7 2019 23:26', '$70 (4 Products)'),

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
            <div id='order-table' className=' w-[95%] py-2 px-4 mx-auto my-4'>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead >
                            <TableRow>
                                <TableCell align="left" sx={{ fontFamily: 'Poppins' }} colSpan={5}>
                                    Order History
                                </TableCell>

                            </TableRow>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ top: 57, minWidth: column.minWidth, fontFamily: 'Poppins' }}
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
                                                            <span style={{ color: 'blue' }}>{value}</span>
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