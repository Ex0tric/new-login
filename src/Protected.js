import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Protected({Component}){

  const myState = useSelector((state)=>state);
  
  let navigate = useNavigate();

  useEffect(()=>{
    if(!myState?.user?.username){
      navigate('/')
    }
  })

  return(
    <>
      <Component/>
    </>
  )
} 

export default Protected;