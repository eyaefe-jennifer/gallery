import Banner from "./components/Banner";
import Loader from "./components/Loader";
import NavBar from "./components/NavBar";
import Side from "./components/Side";
import SideBar from "./components/SideBar";
import SideColumn from "./components/SideColumn";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Loader />
      <SideColumn />
      
      <Banner />
   
    </main>
  );
}
