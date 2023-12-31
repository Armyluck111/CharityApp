import "./Home.scss";
import Nav from "../../Components/Nav/Nav";
import Services from "../Services/Services";
import FAQ from "../FAQ/FAQ";
import Contact from "../Contact_Us/Contact";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Statistics from "../../Components/Statistics/Statistic";
import Footer from "../../Components/Footer/Footer";
import Carousel from "../../Components/Carousel/Carousel";
export default function Home() {
  return (
    <div className="Main_Section col-12">
    <div className="col-12">
<Nav/>
<Carousel/>
    </div>
  
      <div className="col-12 allSstatistics">
        <Statistics Number="+٥" Title=" المطاعم المساهمة" />
        <Statistics Number="+٨" Title="الجمعيات الخيرية المساهمة" />
        <Statistics Number="+٨٩" Title="المتطوعين" />
      </div>

      <Footer />
    </div>
  );
}
