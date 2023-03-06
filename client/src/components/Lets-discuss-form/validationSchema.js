import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';


export const ContactUsSchema = Yup.object().shape({
    name: Yup.string()
    .min(2, 'Too short!')
    .max(30,  'Too Long')
    .required('required'),
    email: Yup.string().email('Invalid Email Address').required('required'),
    projDesc: Yup.string()
    .required('required')
    .min(2, 'Please write at least 50 word')
    .max(2, 'More than 500 words are not allowed'),
    // budget: Yup.number()
    // .required('required'),
    // completionTime: Yup.string()
    // .required('required'),
    // timezone: Yup.string(),
    // contactMethod: Yup.number()
    // .required('required'),
    //  msg: Yup.string()
})

export const CustomTextField = styled(TextField)(({ theme }) => ({
    width: '100%',
    marginBottom: '25px',
}))

export const formData = [
    {
        name: 'name',
        label: 'Your Name',
        id:'name',
        value: null,
        type: 'text',    
        required:true,

    },
    {
        name: 'email',
        label: 'Email',
        id:'email',
        value: null,
        type: 'email',
        required:true,    
    },
    {
        name: 'desc',
        label: 'Project Description',
        id:'desc',
        value: null,
        type: 'text',    
        required:false,

    },
    {
        name: 'budget',
        label: 'Your budget',
        id:'budget',
        value: null,
        type: 'text',
        required:true,
    
    },
    {
        name: 'completionTime',
        label: 'Your Ideal Completion Time',
        id:'compTime',
        required:true,
        dropdownValueKey: 'compTime',
        value: null,
        type: 'dropdown',    
    },
    {
        name: 'contactMethod',
        label: 'Eg, phone no, skypee username',
        id:'conMethod',
        value: null,
        type: 'number',
        required:true,
    
    },
    {
        name: 'timeZone',
        label: 'Time Zone',
        id:'timeZone',
        value: null,
        type: 'text',
        required:false,
    
    },
    {
        name: 'msg',
        label: 'Message',
        id:'msg',
        value: null,
        type: 'text',
        required:false,
    
    },
]


export const getFormikInitialValues = () => {
    const initialValues = {};
     formData?.forEach(data=>(
        initialValues[data.id] = data.value
     ))
     return initialValues;
}
