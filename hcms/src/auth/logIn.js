import React ,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { postDataToAPI } from '../HelperMethods/APiMethods';
import RootUrl from '../URL';
import "../Styles/Login.css";


 function LogIn() {
    const redirect = useNavigate();
        let [user ,setUser] = useState({email:'' ,password:''});
     
        const changeHandler =e=>{
            const {name , value}=e.target;
            setUser((user) =>({
                ...user,  [name]: value 
            }));
    
        };
    
    
        const clickHandler =(e)=>{
            e.preventDefault();
            postDataToAPI(`${RootUrl}/login`,user).then((res)=>{
                if(res.isUserLoggedIn){
                    alert('user succesfully Logged-In') 
                     setUser ({email:'' ,password:''})
                    redirect("/");
                }
                else{
                    alert('something went wrong try again');
                }
            }).catch((err)=>{
                    alert('something went wrong try again');
            })
            
        }
    
        return (
          <div className='form-box'>
            <form className="auth-form">
                <label htmlFor="email" >Email : <input type="email" name="email" id='email' value={user.email} onChange={changeHandler}/>  </label><br/>
                <label htmlFor="password" > Password : <input type='password' name="password" id='password' value={user.password}  onChange={changeHandler}/> </label><br />
                <button type='submit' onClick={clickHandler}>logIn</button>
            </form>
            </div>
           
        );  
 }
 
 export default LogIn;