import { useSelector } from "react-redux"
import { Outlet ,Navigate} from "react-router-dom";

//Outlet is the children component if the user sign in the page renders the outlet if not navigate to the sign in page

//app.jsx me jo privateRoute ke andar <Route path='/dashboard' element={<Dashboard/>}/> ye hi outlet hai(matlab child component inside the privateRoute component)
const PrivateRoute = () => {
  const {currentUser}=useSelector((state)=>state.user);

  return currentUser? <Outlet/>:<Navigate to='/sign-in'/>;
  
}

export default PrivateRoute
