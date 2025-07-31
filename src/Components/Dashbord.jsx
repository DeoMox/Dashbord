
import Inventorycard from "./Inventorycard";
import Cardpass from "../Components/Cardpass";
import RecentProducts from"../Components/RecentProducts"
import UserTable from "./UserTable";
import { Usetheme } from "../Hooks/Usetheme";

function Dashbord() {
  const{theme ,toggleTheme}=Usetheme()
  
  return (
    <div className={`p-0 m-0  ${theme==="light"?"bg-white":"bg-gray-900"}`} >
      <Inventorycard/>
      <Cardpass/>
      <RecentProducts/>
      <UserTable/>
    </div>
  )
}

export default Dashbord
