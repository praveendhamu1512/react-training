
import { Outlet, NavLink } from "react-router-dom";
import './Style.css';

const Layout = () => {
  return (
    <>
      <nav className='nav'>
        
        <div className='nav-left'>
        <ul>
        
          <li>
            <NavLink to="/" style={({ isActive }) => ({color: isActive ? 'blue' : 'white'})}> Home </NavLink>
          </li>
          <li>
            <NavLink to="/apidata" style={({ isActive }) => ({color: isActive ? 'blue' : 'white'})}>Api data</NavLink>
          </li>
          <li>
              <NavLink to="/todolist" style={({ isActive }) => ({color: isActive ? 'blue' : 'white'})}>ToDoList</NavLink>
            </li>
            <li>
            <NavLink to="/contact" style={({ isActive }) => ({color: isActive ? 'blue' : 'white'})}>Lifecycle</NavLink>
          </li>        
          <li>
            <NavLink to="/page" style={({ isActive }) => ({color: isActive ? 'blue' : 'white'})}> Eventbind </NavLink>
          </li>
          <li>
            <NavLink to="/form" style={({ isActive }) => ({color: isActive ? 'blue' : 'white'})}> Forms</NavLink>
          </li>

          <li>
            <NavLink to="/formik" textstyle={({ isActive }) => ({color: isActive ? 'blue' : 'white'})}> Formik</NavLink>
          </li>
          <li>
            <NavLink to="/usecontext" style={({ isActive }) => ({color: isActive ? 'blue' : 'white'})}>UseContext</NavLink>
          </li>
          <li>
            <NavLink to="/formvalidate" style={({ isActive }) => ({color: isActive ? 'blue' : 'white'})}>validate</NavLink>
          </li>
        </ul>
        </div>
        <div className='nav-right'>
        <ul>
          <li >

            <NavLink to="/login" style={({ isActive }) => ({color: isActive ? 'blue' : 'white'})}> Login</NavLink>
          </li>          
        </ul>
       
        </div>     
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;


