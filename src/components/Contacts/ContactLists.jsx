import React, { useEffect, useState } from 'react'
import { Div, header, port } from '../../utils/StyledCompoenents'
import { Alert, Button, ButtonGroup, Grid, IconButton, InputAdornment, Slide, Snackbar, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from '@mui/material'
import { BiFilterAlt } from 'react-icons/bi'
import { HiOutlineSearch } from 'react-icons/hi'
import { FaPlus } from 'react-icons/fa'
import { useThemeContext } from '../../contexts/MainContext'
import { BsThreeDotsVertical } from 'react-icons/bs'
import ContactCE from './ContactCE'
import axios from 'axios'
import { Delete, Edit } from '@mui/icons-material'

const ContactLists = () => {
    const { currentColor, message, setMessage, handleClose } = useThemeContext()
    let [currentPage, setCurrentPage] = useState("")
    let [datas, setDatas] = useState([])
    let [currentOverview, setCurrentOverview] = useState({})
    let [count, setCount] = useState(0)

    let tablesHeaders = ["Contact Id", "Contact Name", "Mobile No", "Email", "Addresss", "Designation", "Qualification", "Action"]

    const getData = async () => {
        try {
            let resposne = await axios.get(`${port}/getContactLists`, header)
            console.log("responseeeee", resposne);
            if (resposne?.data?.length > 0) {
                setDatas(resposne?.data)
                setCount(resposne?.data?.length)
            }
        } catch (error) {
            console.log(error);
        }
    }


    const handleSearch = async (search) => {
        try {
            let resposne = await axios.get(`${port}/searchContact/?search=${search}`, header)
            console.log("responseeeee", resposne);
            if (resposne?.data?.length > 0) {
                setDatas(resposne?.data)
                setCount(resposne?.data?.length)
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleEdit = async (item) => {
        setCurrentOverview(item)
        setCurrentPage("Edit")
    }
    const handleDelete = async (id) => {
        try {
            let resposne = await axios.delete(`${port}/deleteContact/?id=${id}`, header)
            console.log("responseeeee", resposne);
            if (Boolean(resposne?.data?.message)) {
                setMessage("Deleted")
                getData()
            }
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        getData()
    }, [])

    return (
        <Div>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Contact List - Count : <span style={{ color: currentColor }}>{count || 0}</span>
            </Typography>
            <Typography sx={{ fontWeight: 500, mt: 1 }}>
                Lists all Contacts view and action
            </Typography>

            <Grid container spacing={1} sx={{ mt: 2, mb: 1, display: "flex", flexDirection: "row", alignItems: "center" }}>

                <Grid
                    item
                    xs={12}
                    md={12}
                    lg={5}
                    xl={8}

                    sx={{ display: "flex", alignItems: "center" }}                    >
                    <IconButton sx={{ color: currentColor, mr: 1 }}>
                        <BiFilterAlt />
                    </IconButton>
                    Filter
                </Grid>

                <Grid item xs={12} md={7} lg={3} xl={2.5} sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <TextField
                        className="col-12 input-box"
                        id="outlined-search"
                        type="search"
                        placeholder="Search..."
                        autoComplete="off"
                        onChange={(e) => {
                            if (Boolean(e.target.value)) {
                                handleSearch(e.target.value)
                            } else {
                                console.log("search failed");
                                getData()
                            }
                        }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <HiOutlineSearch size={20} />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>

                <Grid
                    item
                    xs={12}
                    md={5}
                    lg={4}
                    xl={1.5}
                    sx={{ display: "flex", justifyContent: "flex-end" }}
                >
                    <Button sx={{ bgcolor: currentColor, height: "34px" }}
                        variant="contained"
                        endIcon={<FaPlus size={17} />}
                        onClick={() => setCurrentPage("Create")}
                    >
                        Create
                    </Button>
                </Grid>
            </Grid>

            <Table className="table">
                <TableHead className="table-head">
                    <TableRow>
                        {tablesHeaders?.map((head, idx) => (
                            <TableCell key={idx + 10}>{head}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>

                <TableBody>
                    {datas?.length > 0 ? datas?.map((item, idx) => {
                        return (
                            <Slide
                                key={idx * 10}
                                direction="right"
                                in={true}
                                timeout={{ enter: 500 * (idx + 1) }}
                            >
                                <TableRow>
                                    <TableCell>
                                        {item?.Id}.
                                    </TableCell>
                                    <TableCell>
                                        {item?.contactName}
                                    </TableCell>
                                    <TableCell>
                                        {item?.mobileNo}
                                    </TableCell>
                                    <TableCell>
                                        {item?.emailId || ""}
                                    </TableCell>
                                    <TableCell>
                                        {item?.address || ""}
                                    </TableCell>
                                    <TableCell>
                                        {item?.designation || ""}
                                    </TableCell>
                                    <TableCell>
                                        {item?.qualification || ""}
                                    </TableCell>
                                    <TableCell>
                                        <IconButton sx={{ fontSize: "18px", color: currentColor }} onClick={() => handleEdit(item)}>
                                            <Edit fontSize='10px' />
                                        </IconButton>
                                        <IconButton sx={{ fontSize: "18px", color: "red" }} onClick={() => handleDelete(item?.Id)}>
                                            <Delete fontSize='10px' />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            </Slide>
                        )
                    }) :
                        <TableRow>
                            <TableCell className="col-12 text-center" colSpan={10}>
                                <div class="spinner-border" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                            </TableCell>
                        </TableRow>
                    }
                </TableBody>
            </Table>

            {Boolean(currentPage) && <Div>
                <ContactCE
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    editData={currentOverview}
                    currentColor={currentColor}
                    getData={getData}
                    setMessage={setMessage}
                />
            </Div>}

            <Snackbar open={Boolean(message)} autoHideDuration={2500} onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    severity={(Boolean(message == "Created") || Boolean(message == "Edited")) && "success" || "error"}
                    variant="filled"
                    sx={{ width: '100%', zIndex: 9999999 }}
                >
                    {Boolean(message == "Created") ? "Contact Created" : Boolean(message == "Deleted") ? "Contact Deleted" : "Contact Edited"} Successfully.
                </Alert>
            </Snackbar>

        </Div>
    )
}

export default ContactLists
