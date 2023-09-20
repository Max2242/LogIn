import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Link } from "react-router-dom"
import * as yup from "yup";


const LoginSchema = yup.object({
  username: yup.string().required("Username is required"),
  
  Password: yup.string().required("Password is required").min(8,"Password is too short- should be 8 characters minimum")
  }); 

const Login = () => (
  <> 
    <Formik
      initialValues={{
        username: '',
        Password: '',
      }}

      validationSchema={LoginSchema}
      onSubmit={(values,{resetForm}) => {
        alert("Successfully logged in");
        resetForm({values:""});
      }}
    >
      

<div className='w-full'>
    <div className='py-12 flex-1'>
      <div className='flex flex-col rounded-lg shadow-2xl overflow-hidden mx-auto max-w-sm lg:max-w-4l'>
        
       <div className=' p-7 lg:w-[100%]'>
           <h1 className=' w-5/6 text-center text-3xl text-gray-600 font-bold'>
           Log In 
           </h1>
         </div>
         <div className='px-8 pb-7'>
      <Form>
        <label className="text-black mx-2" htmlFor='name'>
          Username<span className='text-[#ff0000]'>*</span>
        </label>
        <div>
          <Field className="text-black pl-2 border border-gray rounded" id='username' name='username' />
        </div>
        <ErrorMessage className="text-[#ff0000] text-[12px]" component='a' name='username' />
        <div><label className="text-black mx-2" htmlFor='Password'>
          Password<span className='text-[#ff0000]'>*</span>
        </label>
        </div>
        <div>
        <Field className="text-black pl-2 border border-gray rounded " type="password" id='Password' name='Password' />
        </div>
        <ErrorMessage
          component='a'
          className="text-[#ff0000] text-[12px]" 
          name='Password'
        />
        <div className='my-3'>
          <button type='submit' className="cursor-pointer text-center px-3 py-1.5 text-white bg-gray-800 rounded-lg shadow-md w-45"> 
            Login
         </button> 
        </div>

        <h4>Not a member? <Link to='/registration'><span className='font-bold'>Register Now</span></Link></h4>
      </Form>
      </div>
      </div>
      </div>
      </div>
    </Formik>
  </>
)

export default Login