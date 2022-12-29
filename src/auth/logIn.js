import React ,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { getDataFromAPI, postDataToAPI } from '../HelperMethods/APiMethods';
import RootUrl from '../URL';
import "../Styles/Login.css";


 function LogIn() {

        const redirect = useNavigate();
            let [hospital ,setHospital] = useState({email:'' ,password:''});
     
            const changeHandler =e=>{
                const {name , value}=e.target;
                    setHospital((hospital) =>({
                      ...hospital,  [name]: value 
                 }));   
        };
    
    
        const clickHandler =(e)=>{
            e.preventDefault();
            postDataToAPI(`${RootUrl}/login`,hospital).then((res)=>{
                if(res.isHospitalLoggedIn){
                    alert('hospital succesfully Logged-In') 
                    getDataFromAPI(`${RootUrl}/gethospital`).then((data)=>{ 
                    redirect(`/hospital/${res.id}`,{state : {data}})
                    }).catch(()=>redirect("/"));

                }
                else{
                    alert('something went wrong try again');
                }
            }).catch((err)=>{
                    alert('something went wrong try again');
            })
            
        }

    

    
        return (
          <form className='auth-form'>
            <label htmlFor="email" >Email : <input type="email" name='email' id='email' value={hospital.email} onChange={changeHandler}/>  </label><br />
            <label htmlFor="password" > Password : <input type='password' name='password' id='password' value={hospital.password}  onChange={changeHandler}/> </label><br />
            <button type='submit' onClick={clickHandler}>Login</button>
        </form>

        );  
 }
 
 export default LogIn;