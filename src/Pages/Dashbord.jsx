
import Inventorycard from "../Components/Inventorycard";
import Cardpass from "../Components/Cardpass";
import RecentProducts from"../Components/RecentProducts"
import UserTable from "../Components/UserTable";
import RecentActivities from "../Components/recentactivities";
import { Usetheme } from "../Hooks/Usetheme";

function Dashbord() {
  const{theme ,toggleTheme}=Usetheme()
  
  return (
    <div className={`p-0 m-0  ${theme==="light"?"bg-white":"bg-gray-900"}`} >
      <Inventorycard/>
      <Cardpass/>
      <RecentProducts/>
      <UserTable/>
      <RecentActivities/>
    </div>
  )
}

export default Dashbord
