import './SuperAdminDashboard.css';
import Button from './LogeOut';
import { useSelector } from 'react-redux';

function SuperAdmin() {

  const myState = useSelector((state)=>state);

    return (
      <>
        {
          myState?.user?.username ? (<div className='main'><h1 className='text-center'>Welcome, {myState.user.username} </h1><Button></Button></div>) : <h1>Login First</h1>
        }
      </>
    )

}

export default SuperAdmin;
