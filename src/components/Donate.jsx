import {
  Typography,
  TextField,
  TextareaAutosize,
  InputAdornment,
  Button,
} from "@material-ui/core";
import React, { useState } from "react";
import SimpleMap from "./elements/Maps";
import { useStyles } from "./styles/Write";
import { announceSale } from "../integration";

const Donate = (props) => {
  const classes = useStyles();

  const [inputValues, setInputValues] = useState({
    shop: "",
    food: "food",
    quantity: 0,
    discount: 0,
    discountedPrice: 0,
    type: "",
    details: "",
  });
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleOnChange = (event) => {
    const value = event.target.value;
    setInputValues({ ...inputValues, [event.target.name]: value });
  };

  const OnhandleSale = async (e) => {
    console.log(
      inputValues.food +
        "AND" +
        inputValues.quantity +
        "AND" +
        inputValues.type +
        "AND" +
        inputValues.discount +
        "AND" +
        inputValues.discountedPrice
    );
    await announceSale(
      inputValues.food,
      inputValues.quantity,
      inputValues.type,
      inputValues.discount,
      inputValues.discountedPrice
    );
  };

  return (
    <div className={classes.writePageContent}>
      <Typography>Add Announcements</Typography>
      {/* <div className={classes.successSubmit}>
        <div>Successfully Submitted!</div>
      </div> */}
      <div className={classes.uploadContent}>
        <form
          action=''
          noValidate
          autoComplete='off'
          className={classes.writerForm}>
          <div className={classes.formContent}>
            <div className={classes.textFields}>
              <TextField
                id='bookTitle'
                label={<label style={{ color: 'orange' }}>Vendor's name</label>}
                variant='outlined'
                name='shop'
                value={inputValues.shop}
                onChange={handleOnChange}
                className={classes.textField}
              />
              <div style={{ display: "flex" }}>
                <TextField
                  id='author'
                  label={<label style={{ color: 'orange' }}>Food to donate</label>}
                  variant='outlined'
                  name='food'
                  value={inputValues.food}
                  onChange={handleOnChange}
                  className={classes.textField}
                  style={{
                    width: "80%",
                  }}
                />
                <TextField
                  id='number'
                  label={<label style={{ color: 'orange' }}>Quantity</label>}
                  variant='outlined'
                  type='number'
                  name='quantity'
                  className={classes.textField}
                  onChange={handleOnChange}
                />
                <input
                  type='button'
                  value='+'
                  className={` ${classes.chooseFile}`}
                  style={{
                    margin: "10px 5px",
                    padding: "5px 10px",
                    color: "#000",
                    fontWeight: 800,
                  }}
                />
              </div>
              <div style={{ display: "flex" }}>
                <TextField
                  id='discount'
                  label={<label style={{ color: 'orange' }}>Discount</label>}
                  variant='outlined'
                  name='discount'
                  type='number'
                  value={inputValues.discount}
                  onChange={handleOnChange}
                  className={classes.textField}
                />
                <TextField
                  id='discountedPrice'
                  label={<label style={{ color: 'orange' }}>Discounted price</label>}
                  variant='outlined'
                  type='number'
                  name='discountedPrice'
                  onChange={handleOnChange}
                  className={classes.textField}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>Rs.</InputAdornment>
                    ),
                  }}
                />
                <TextField
                  id='type'
                  label={<label style={{ color: 'orange' }}>Type of retailer</label>}
                  variant='outlined'
                  type='text'
                  name='type'
                  onChange={handleOnChange}
                  className={classes.textField}
                />
              </div>
              <Typography
                style={{
                  margin: "10px 0px 0px 10px",
                  fontSize: "1rem",
                  color: "orange",
                }}>
                Details
              </Typography>
              <TextareaAutosize
                id='description'
                aria-label='Description'
                minRows={10}
                placeholder='A short description about your product'
                name='description'
                style={{ overflow: "auto" }}
                value={inputValues.description}
                onChange={handleOnChange}
              />

              <Button
                className={`${classes.submitButton} ${classes.chooseFile}`}
                onClick={(e) => OnhandleSale(e)}>
                Submit
              </Button>
            </div>
            <div className={classes.rightContent}>
              <SimpleMap />
              <Typography
                style={{
                  margin: "40px 150px 0px 0px",
                  fontSize: "2rem",
                }}>
                Upload Shop Image
              </Typography>
              <div className={classes.chooseFile}>
                Choose Image
                <input
                  type='file'
                  accept='image/*'
                  onChange={(event) => {
                    const file = event.target.files[0];
                    if (file && file.type.substring(0, 5) === "image") {
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        setPreview(reader.result);
                      };
                      reader.readAsDataURL(file);
                      setImage(file);
                    } else {
                      setImage(null);
                      setPreview(null);
                    }
                  }}
                  className={classes.inputFile}
                />
              </div>
              <img src={preview} alt='' className={classes.uploadedImage} />
              {/* <p>{file}</p> */}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Donate;