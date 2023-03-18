import './PartnerDashboard.css';
import Button from './LogeOut';
import { useSelector } from 'react-redux';


function Partner() {

  const myState = useSelector((state)=>state);
  
    return (<>
      {
        myState?.user?.userType ? (<div className='main'><h1 className='text-center'>Welcome, {myState.user.userType } </h1><Button></Button></div>) : null
      }
    </>)
}

export default Partner;
