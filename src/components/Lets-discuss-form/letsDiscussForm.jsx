import React, { useEffect } from "react";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { useFormik, Field, Formik, Form } from 'formik';
import { ContactUsSchema, getFormikInitialValues, formData, CustomTextField } from './validationSchema'
import { useDispatch,useSelector } from "react-redux";
import {saveClientInfoApi} from '../../Redux/intercepter/intercepter'
import {toastNotify} from '../../common-components/toaster/toastNotify'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import {saveClientInfo} from '../../Redux/intercepter/config'

const menuItems = [{ id: 1, tp: 'Not/Sure to be determined' }, { id: 2, tp: 'In 1 months' }, { id: 3, tp: 'In 2 months' }, { id: 4, tp: 'In 3 months' }, { id: 5, tp: 'In 4 months or above' }]



const LetsDiscussForm = () => {
    const selectorData = useSelector(data=> data)
    const errMsg =  selectorData?.clientDetails?.error?.errors
    console.log('errMsg123---->>',errMsg)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [err, setErr] = React.useState(undefined);

    // const handleSubmit = (values) => {
    //     alert("1234")
    //     console.log("values---------------", values)
    // };

    // useEffect(()=>{
     
    // },[])
    console.log('err---->>',err)

    const handleBlur = async (e) => {
        const {value} = e.target;       
        try {
       const res = await axios.post(saveClientInfo.uniqueEmailAPi, {email:value});
              console.log("res=========>",res)
               setErr("")
               return res;
        }
        catch (err) {
            const msg = err?.response?.data?.msg
            console.log("message error--------->",err?.response)
            setErr(msg)
           console.log(msg)
        }
    }

    const handleSubmit = async values => {
            const msgData = await saveClientInfoApi(values, dispatch);
             
               if(msgData?.length > 0){
                setErr(msgData?.errors[0]?.msg)
            } else {
                messageCall(msgData)
            }
       
        //    navigate('/')
           
    };
    const messageCall = (msg) =>{
        if(msg?.data){
          toastNotify(msg?.data);
        } else {

        }
        }
      
        console.log("err234------------->>>>",err)
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: '',
            email: '',
            projDesc: '',
            contactMethod: '',
            compTime: '',
            timeZone: '',
            budget: '',
            msg: ''
        },
        // validationSchema: ContactUsSchema,
        onSubmit: (values) => {
            console.log("submitted values-------->",values)
            handleSubmit(values)
        },
        validate: (values) => {
            const emailReg = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
            const errors = {};
            //     if (!values.no_of_days) {
            //         errors.no_of_days = "required";
            //     }
            if (!values.name) {
                errors.name = "required";
            }
          
            if (!values.email) {
                errors.email = "required";
            } 
            if(!(emailReg.test(values.email))){
                errors.email = 'please enter the valid email'
            }
            if (!values.projDesc) {
                errors.projDesc = "required";
            }
            if (!values.contactMethod) {
                errors.contactMethod = "required";
            }
            if (!values.compTime) {
                errors.compTime = "required";
            }
            if (!values.budget) {
                errors.budget = "required";
            }
            if (!values.msg) {
                errors.msg = "required";
            }
            return errors;
        },

    })

    console.log("values formik=====", formik.values)




    {console.log("kljkl------------",formik.errors.email )}


    return (
        <Box
            sx={{
                paddingTop: '20px'
            }}
            noValidate
            autoComplete="off"
        >
            {/* <form onSubmit={formik.handleSubmit}  */}


            {/* <formik> */}
                
                    <form onSubmit={formik.handleSubmit}>
                      
                        <CustomTextField
                            // required
                            id="name"
                            label="Your Name"
                            value={formik.values.name}
                            onChange={(e) => {
                                const { value } = e.target;
                                formik.setFieldValue('name', value);
                            }}
                        />
                      {/* <span style={{ color: "red" }}>
                                                {formik.errors.name &&
                                                    formik.touched.name &&
                                                    formik.errors.name}
                                            </span>  */}
                        <CustomTextField
                            // required
                            id="email"
                            label="Email"
                            // type='email'
                            name='email'
                            value={formik.values.email}
                            onBlur={(e)=>handleBlur(e)}
                            onChange={(e) => {
                                const { value } = e.target;
                                formik.setFieldValue('email', value);
                            }}
                        />
                         <span style={{ color: "red" }}>
                                              {err && err}
                                            </span> 
                      {/* <span style={{ color: "red" }}>
                                                {formik.errors.email &&
                                                    formik.touched.email &&
                                                    formik.errors.email}
                                            </span>  */}
                        <CustomTextField
                            id="projDesc"
                            label="Project Description"
                            placeholder="Briefly describe your project"
                            multiline
                            rows={4}
                            value={formik.values.projDesc}
                            onChange={(e) => {
                                const { value } = e.target;
                                formik.setFieldValue('projDesc', value);
                            }}
                        />
                       
                        <Box sx={{ marginTop: '20px' }} component='div'>
                            <Grid container justifyContent='space-around' spacing={1}>
                                <CustomTextField
                                    sx={{ width: '50%', paddingRight: '10px' }}
                                    // required
                                    id="budget"
                                    placeholder="Eg, $1500"
                                    label="Your budget"
                                    value={formik.values.budget}
                                    onChange={(e) => {
                                        const { value } = e.target;
                                        formik.setFieldValue('budget', value);
                                    }}

                                />
                               {/* <span style={{ color: "red" }}>
                                                {formik.errors.budget &&
                                                    formik.touched.budget &&
                                                    formik.errors.budget}
                                            </span>  */}
                                <FormControl sx={{ width: '50%' }} >
                                    <InputLabel id="demo-simple-select-label">Your Ideal Completion Time</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="compTime"
                                        label="Your Ideal Completion Time"
                                        value={formik.values.compTime}
                                        onChange={(e) => {
                                            const { value } = e.target;
                                            formik.setFieldValue('compTime', value);
                                        }}
                                    >
                                          {/* <span style={{ color: "red" }}>
                                                {formik.errors.completionTime &&
                                                    formik.touched.completionTime &&
                                                    formik.errors.completionTime}
                                            </span>  */}

                                        {menuItems?.map(items => (
                                            <MenuItem value={10}>{items.tp}</MenuItem>
                                        ))}

                                    </Select>
                                  
                                </FormControl>
                            </Grid>

                        </Box>
                        <Box sx={{ display: 'flex' }} component='div'>
                            <Grid container justifyContent='space-around' spacing={1}>

                                <CustomTextField
                                    sx={{ width: '50%', paddingRight: '10px' }}
                                    // required
                                    id="contactMethod"
                                    placeholder="Eg, phone no, skypee username"
                                    label="Best contact method"
                                    value={formik.values.contactMethod}
                                    onChange={(e) => {
                                        const { value } = e.target;
                                        formik.setFieldValue('contactMethod', value);
                                    }}
                                />
                                 {/* <span style={{ color: "red" }}>
                                                {formik.errors.contactMethod &&
                                                    formik.touched.contactMethod &&
                                                    formik.errors.contactMethod}
                                            </span>  */}
                                <CustomTextField
                                    sx={{ width: '50%' }}
                                    // required
                                    id="timeZone"
                                    placeholder="Eg, GMT, ET"
                                    label="Time Zone"
                                    value={formik.values.timeZone}
                                    onChange={(e) => {
                                        const { value } = e.target;
                                        formik.setFieldValue('timeZone', value);
                                    }}
                                />
                                
                                
                            </Grid>

                        </Box>
                        <CustomTextField
                            id="outlined-multiline-static"
                            label="Message"
                            placeholder="Message"
                            multiline
                            rows={4}
                            sx={{ marginTop: '25px' }}
                            name='msg'
                            value={formik.values.msg}
                            onChange={(e) => {
                                const { value } = e.target;
                                formik.setFieldValue('msg', value);
                            }}
                        />
                       
                        <Button type='submit' variant="contained" sx={{ backgroundColor: '#00bcd4' }}>Contact</Button>
                       
                    </form>

                

            {/* </formik> */}

            {/* </form> */}
            <ToastContainer backgroundColor='#00bcd4' theme='colored' />
        </Box>
    )
}


export default LetsDiscussForm;