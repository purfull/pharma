import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Slide,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaPlus, FaSave } from "react-icons/fa";
import { avatarColors, avatarLightColors, Div, port } from "../../utils/StyledCompoenents";
import { MdCancel, MdOutlineCancel } from "react-icons/md";
import { LuSave } from "react-icons/lu";

const ContactCE = ({ editData, getData, currentColor, currentPage, setCurrentPage, setMessage }) => {
  const token = localStorage.getItem("accesstoken");
  const header = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  const [contactDetails, setContactDetails] = useState({
    "ContactName": "",
    "MobileNo": "",
    "EmailId": "",
    "DateofBirth": "",
    "Age": "",
    "Qualification": "",
    "Country": "",
    "State": "",
    "City": "",
    "Designation": "",
    "Address": ""
  });
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentPage == "Create") {
      let Payload = {
        "contactName": contactDetails?.ContactName,
        "age": contactDetails?.Age,
        "emailId": contactDetails?.EmailId,
        "designation": contactDetails?.Designation,
        "country": contactDetails?.Country,
        "state": contactDetails?.State,
        "city": contactDetails?.City,
        "dateOfBirth": contactDetails?.DateofBirth,
        "mobileNo": contactDetails?.MobileNo,
        "address": contactDetails?.Address,
        "qualification": contactDetails?.Qualification
      }
      await axios.post(`${port}/addContact/`, Payload, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }).then(async (res) => {
        console.log("ContactCECRUD", res.data);
        setMessage("Created")
        getData()
        setCurrentPage("")
      }).catch((error) => {
        console.log(error);
      });
    } else {
      let Payload = {
        "contactName": contactDetails?.ContactName,
        "age": contactDetails?.Age,
        "emailId": contactDetails?.EmailId,
        "designation": contactDetails?.Designation,
        "country": contactDetails?.Country,
        "state": contactDetails?.State,
        "city": contactDetails?.City,
        "dateOfBirth": contactDetails?.DateofBirth,
        "mobileNo": contactDetails?.MobileNo,
        "address": contactDetails?.Address,
        "qualification": contactDetails?.Qualification
      }
      await axios.put(`${port}/updateContact/?id=${editData?.Id}`, Payload, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }).then(async (res) => {
        console.log("ContactCECRUD", res.data);
        setMessage("Edited")
        getData()
        setCurrentPage("")
      }).catch((error) => {
        console.log(error);
      });
    }
  };

  useEffect(() => {
    if (currentPage == "Edit") {
      setContactDetails({
        "ContactId": editData?.Id,
        "ContactName": editData?.contactName,
        "MobileNo": editData?.mobileNo,
        "EmailId": editData?.emailId,
        "DateofBirth": editData?.dateOfBirth,
        "Age": editData?.age,
        "Country": editData?.country,
        "State": editData?.state,
        "City": editData?.city,
        "Designation": editData?.designation,
        "Address": editData?.address,
        "Qualification": editData?.qualification
      })
    }
  }, [editData]);

  console.log("contactDetailsssss", contactDetails);


  return (
    <Dialog
      open={Boolean(currentPage)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth={{ xs: "md", md: false }}
      fullWidth={{ xs: "", md: false }}
      sx={{ "& .MuiDialog-paper": { width: { xs: "", md: "1000px" }, height: { xs: "", md: "600px" } } }}
      onClose={() => setCurrentPage("")}
    >
      <DialogTitle sx={{ bgcolor: "#f4f4f4", height: "40px", fontSize: "17px", p: 1, pl: 3 }}>
        {currentPage} Contact
      </DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ pt: 5 }}>
          <Grid container spacing={2.1}>
            {Boolean(currentPage == "Edit") && (
              <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: "center" }}>
                <Typography sx={{ fontWeight: 500, fontSize: "15px" }} className="col-md-5">Contact Id</Typography>
                <Div className="col-md-7">
                  <TextField
                    sx={{
                      "& fieldset": { borderRadius: "5px" },
                      width: "100%",
                    }}
                    value={contactDetails?.ContactId}
                    placeholder="Contact Id"
                    className={`col-12 input-box`}
                    id="outlined-basic"
                    variant="outlined"
                    disabled
                  />
                </Div>
              </Grid>
            )}
            <Slide
              direction={Boolean(currentPage == "Edit") ? "down" : "right"}
              in={true}
              timeout={{ enter: 500 * (2) }}
            >
              <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: "center" }}>
                <Typography sx={{ fontWeight: 500, fontSize: "15px" }} className="col-md-5">Contact Name</Typography>
                <Div className="col-md-7">
                  <TextField
                    sx={{
                      "& fieldset": { borderRadius: "5px" },
                      width: "100%",
                    }}
                    value={contactDetails?.ContactName}
                    onChange={(e) => setContactDetails(prev => ({ ...prev, ContactName: e.target.value || "" }))}
                    placeholder="Contact Name"
                    className={`col-12 input-box`}
                    id="outlined-basic"
                    variant="outlined"
                  />
                  {errors?.ContactName && (
                    <Div style={{ color: "red" }}>{errors?.ContactName}</Div>
                  )}
                </Div>
              </Grid>
            </Slide>
            <Slide
              direction={Boolean(currentPage == "Edit") ? "down" : "left"}
              in={true}
              timeout={{ enter: 500 * (2) }}
            >
              <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: "center" }}>
                <Typography sx={{ fontWeight: 500, fontSize: "15px" }} className="col-md-5">Mobile No</Typography>
                <Div className="col-md-7">
                  <TextField
                    sx={{
                      "& fieldset": { borderRadius: "5px" },
                      width: "100%",
                    }}
                    value={contactDetails?.MobileNo}
                    onChange={(e) => setContactDetails(prev => ({ ...prev, MobileNo: Number(e.target.value) || 0 }))}
                    placeholder="Mobile No"
                    className={`col-12 input-box`}
                    id="outlined-basic"
                    variant="outlined"
                  />
                  {errors?.MobileNo && (
                    <Div style={{ color: "red" }}>{errors?.MobileNo}</Div>
                  )}
                </Div>
              </Grid>

            </Slide>
            <Slide
              direction={Boolean(currentPage == "Edit") ? "down" : "right"}
              in={true}
              timeout={{ enter: 500 * (2) }}
            >
              <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: "center" }}>
                <Typography sx={{ fontWeight: 500, fontSize: "15px" }} className="col-md-5">Employee Email</Typography>
                <Div className="col-md-7">
                  <TextField
                    sx={{
                      "& fieldset": { borderRadius: "5px" },
                      width: "100%",
                    }}
                    value={contactDetails?.EmailId}
                    onChange={(e) => setContactDetails(prev => ({ ...prev, EmailId: e.target.value || "" }))}
                    placeholder="Employee Email"
                    className={`col-12 input-box`}
                    id="outlined-basic"
                    variant="outlined"
                  />
                  {errors?.EmailId && (
                    <Div style={{ color: "red" }}>{errors?.EmailId}</Div>
                  )}
                </Div>
              </Grid>
            </Slide>
            <Slide
              direction={Boolean(currentPage == "Edit") ? "down" : "left"}
              in={true}
              timeout={{ enter: 500 * (2) }}
            >
              <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: "center" }}>
                <Typography sx={{ fontWeight: 500, fontSize: "15px" }} className="col-md-5">Date of Birth</Typography>
                <Div className="col-md-7">
                  <TextField
                    sx={{
                      "& fieldset": { borderRadius: "5px" },
                      width: "100%",
                    }}
                    type="date"
                    value={contactDetails?.DateofBirth}
                    onChange={(e) => setContactDetails(prev => ({ ...prev, DateofBirth: e.target.value || "" }))}
                    placeholder="Date of Birth"
                    className={`col-12 input-box`}
                    id="outlined-basic"
                    variant="outlined"
                  />
                  {errors?.DateofBirth && (
                    <Div style={{ color: "red" }}>{errors?.DateofBirth}</Div>
                  )}
                </Div>
              </Grid>
            </Slide>
            <Slide
              direction={Boolean(currentPage == "Edit") ? "down" : "right"}
              in={true}
              timeout={{ enter: 500 * (2) }}
            >
              <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: "center" }}>
                <Typography sx={{ fontWeight: 500, fontSize: "15px" }} className="col-md-5">Employee Age</Typography>
                <Div className="col-md-7">
                  <TextField
                    sx={{
                      "& fieldset": { borderRadius: "5px" },
                      width: "100%",
                    }}
                    value={contactDetails?.Age}
                    onChange={(e) => setContactDetails(prev => ({ ...prev, Age: Number(e.target.value) || 0 }))}
                    placeholder="Employee Age"
                    className={`col-12 input-box`}
                    id="outlined-basic"
                    variant="outlined"
                  />
                  {errors?.Age && (
                    <Div style={{ color: "red" }}>{errors?.Age}</Div>
                  )}
                </Div>
              </Grid>
            </Slide>
            <Slide
              direction={Boolean(currentPage == "Edit") ? "down" : "left"}
              in={true}
              timeout={{ enter: 500 * (2) }}
            >
              <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: "center" }}>
                <Typography sx={{ fontWeight: 500, fontSize: "15px" }} className="col-md-5">Employee Qualification</Typography>
                <Div className="col-md-7">
                  <TextField
                    sx={{
                      "& fieldset": { borderRadius: "5px" },
                      width: "100%",
                    }}
                    value={contactDetails?.Qualification}
                    onChange={(e) => setContactDetails(prev => ({ ...prev, Qualification: e.target.value || "" }))}
                    placeholder="Employee Qualification"
                    className={`col-12 input-box`}
                    id="outlined-basic"
                    variant="outlined"
                  />
                  {errors?.Qualification && (
                    <Div style={{ color: "red" }}>{errors?.Qualification}</Div>
                  )}
                </Div>
              </Grid>
            </Slide>
            <Slide
              direction={Boolean(currentPage == "Edit") ? "down" : "right"}
              in={true}
              timeout={{ enter: 500 * (2) }}
            >
              <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: "center" }}>
                <Typography sx={{ fontWeight: 500, fontSize: "15px" }} className="col-md-5">Country</Typography>
                <Div className="col-md-7">
                  <TextField
                    sx={{
                      "& fieldset": { borderRadius: "5px" },
                      width: "100%",
                    }}
                    value={contactDetails?.Country}
                    onChange={(e) => setContactDetails(prev => ({ ...prev, Country: e.target.value || "" }))}
                    placeholder="Country"
                    className={`col-12 input-box`}
                    id="outlined-basic"
                    variant="outlined"
                  />
                  {errors?.Country && (
                    <Div style={{ color: "red" }}>{errors?.Country}</Div>
                  )}
                </Div>
              </Grid>
            </Slide>
            <Slide
              direction={Boolean(currentPage == "Edit") ? "down" : "left"}
              in={true}
              timeout={{ enter: 500 * (2) }}
            >
              <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: "center" }}>
                <Typography sx={{ fontWeight: 500, fontSize: "15px" }} className="col-md-5">State</Typography>
                <Div className="col-md-7">
                  <TextField
                    sx={{
                      "& fieldset": { borderRadius: "5px" },
                      width: "100%",
                    }}
                    value={contactDetails?.State}
                    onChange={(e) => setContactDetails(prev => ({ ...prev, State: e.target.value || "" }))}
                    placeholder="State"
                    className={`col-12 input-box`}
                    id="outlined-basic"
                    variant="outlined"
                  />
                  {errors?.State && (
                    <Div style={{ color: "red" }}>{errors?.State}</Div>
                  )}
                </Div>
              </Grid>
            </Slide>
            <Slide
              direction={Boolean(currentPage == "Edit") ? "down" : "right"}
              in={true}
              timeout={{ enter: 500 * (2) }}
            >
              <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: "center" }}>
                <Typography sx={{ fontWeight: 500, fontSize: "15px" }} className="col-md-5">City</Typography>
                <Div className="col-md-7">
                  <TextField
                    sx={{
                      "& fieldset": { borderRadius: "5px" },
                      width: "100%",
                    }}
                    value={contactDetails?.City}
                    onChange={(e) => setContactDetails(prev => ({ ...prev, City: e.target.value || "" }))}
                    placeholder="City"
                    className={`col-12 input-box`}
                    id="outlined-basic"
                    variant="outlined"
                  />
                  {errors?.City && (
                    <Div style={{ color: "red" }}>{errors?.City}</Div>
                  )}
                </Div>
              </Grid>
            </Slide>
            <Slide
              direction={Boolean(currentPage == "Edit") ? "down" : "left"}
              in={true}
              timeout={{ enter: 500 * (2) }}
            >
              <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: "center" }}>
                <Typography sx={{ fontWeight: 500, fontSize: "15px" }} className="col-md-5">Designation</Typography>
                <Div className="col-md-7">
                  <TextField
                    sx={{
                      "& fieldset": { borderRadius: "5px" },
                      width: "100%",
                    }}
                    value={contactDetails?.Designation}
                    onChange={(e) => setContactDetails(prev => ({ ...prev, Designation: e.target.value || "" }))}
                    placeholder="Designation"
                    className={`col-12 input-box`}
                    id="outlined-basic"
                    variant="outlined"
                  />
                  {errors?.Designation && (
                    <Div style={{ color: "red" }}>{errors?.Designation}</Div>
                  )}
                </Div>
              </Grid>
            </Slide>
            <Slide
              direction={Boolean(currentPage == "Edit") ? "down" : "right"}
              in={true}
              timeout={{ enter: 500 * (2) }}
            >
              <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: "center" }}>
                <Typography sx={{ fontWeight: 500, fontSize: "15px" }} className="col-md-5">Address</Typography>
                <Div className="col-md-7">
                  <TextField
                    sx={{
                      "& fieldset": { borderRadius: "5px" },
                      width: "100%",
                    }}
                    multiline
                    rows={Boolean(currentPage != "Edit") && 4}
                    value={contactDetails?.Address}
                    onChange={(e) => setContactDetails(prev => ({ ...prev, Address: e.target.value || "" }))}
                    placeholder="Address"
                    className={`col-12 ${Boolean(currentPage == "Edit") && "input-box"}`}
                    id="outlined-basic"
                    variant="outlined"
                  />
                  {errors?.Address && (
                    <Div style={{ color: "red" }}>{errors?.Address}</Div>
                  )}
                </Div>
              </Grid>
            </Slide>
          </Grid>
        </DialogContentText>
        <DialogActions sx={[{ display: "flex" }, { justifyContent: "center", mt: Boolean(currentPage == "Edit") ? 15 : 5 }]}>
          <Button sx={{ bgcolor: currentColor, height: "34px", minWidth: "110px" }}
            variant="contained"
            endIcon={<FaSave size={18} />}
            onClick={handleSubmit}
          >
            {Boolean(currentPage == "Edit") ? "Update" : "Save"}
          </Button>
          <Button sx={{ bgcolor: currentColor, height: "34px", minWidth: "110px" }}
            variant="contained"
            endIcon={<MdCancel size={21} />}
            onClick={() => setCurrentPage("")}>
            Cancel
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};
export default ContactCE;