import { Divider } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Dashboard = () => {
  const { user} = useContext(AuthContext);
  // TODO : load data from the server to have dynamic isAdmin based on Data
  const isAdmin = true;
  return (
    <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center mt-5">
    <Outlet />
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-amber-500 text-base-content py-10">
      {/* Sidebar content here */}
      <Link to="/">
              <h2 className="text-black font-bold text-2xl text-center">Global Speak School</h2>
            </Link>
            <br /><br /><br />
      {isAdmin ? <>
        <li><Link to='' className='text-center font-bold'>User Home</Link></li>
      <li><Link to='' className='text-center font-bold'>Selected Classes</Link></li>
      <li><Link to='' className='text-center font-bold'>Enrolled Classes</Link></li>
      <li><Link to='' className='text-center font-bold'>Payment History</Link></li>
      <li><Link to='/dashboard/allUsers' className='text-center font-bold'>All Users</Link></li>
      <br />
      <Divider bg='black' />
      </> : <>
      <br />
      <li><Link to='/' className='text-center font-bold'>Home</Link></li>
      <li><Link to='/instructors' className='text-center font-bold'>Instructors</Link></li>
      <li><Link to='/classes' className='text-center font-bold'>Classes</Link></li>
      </>}
        
      
    </ul>
  
  </div>
</div>
  );
};

export default Dashboard;