import Credits from "./Components/Credits";
import Footer from "./Components/Footer";
import FormC from "./Components/FormC";
import Header from "./Components/Header";
import JoinUs from "./Components/Join_us";
import MissionSection from "./Components/Misson";
import SectionCta from "./Components/SectionCta";
import Services from "./Components/Services";
import Vsl from "./Components/Vls_Section";

export default function App() {
  return (
    <>
      <Header></Header>
      <SectionCta></SectionCta>
      <MissionSection></MissionSection>
      <Services></Services>
      <Vsl></Vsl>
      <FormC></FormC>
      <JoinUs></JoinUs>
      <Footer></Footer>
      <Credits></Credits>
    </>
  );
}
