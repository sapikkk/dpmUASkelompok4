import FrameComponent8 from "../components/frame-component8";
import DropOff1 from "../components/drop-off1";
import CardFluent from "../components/card-fluent";
import FrameComponent7 from "../components/frame-component7";
import Catalogue3 from "../components/catalogue3";
import Catalogue2 from "../components/catalogue2";
import Catalogue1 from "../components/catalogue1";
import Catalogue from "../components/catalogue";
import FrameComponent6 from "../components/frame-component6";
import styles from "./home-screen.module.css";

const HomeScreen = () => {
  return (
    <div className={styles.homeScreen}>
      <FrameComponent8 />
      <main className={styles.dropOffParent}>
        <DropOff1 />
        <section className={styles.cardFluent2Parent}>
          <CardFluent />
          <FrameComponent7 />
        </section>
        <div className={styles.recomendationCleaningWrapper}>
          <div className={styles.recomendationCleaning}>
            Recomendation Cleaning
          </div>
        </div>
        <section className={styles.catalogRecomendation}>
          <Catalogue3 />
          <Catalogue2 />
          <Catalogue1
            premiumWash="Premium Wash "
            sportcarSUVCoupe="Sportcar, SUV, Coupe"
            carWash="/carwash@2x.png"
            vuesaxlinearheart="/vuesaxlinearheart.svg"
            vuesaxboldgasStation="/vuesaxboldgasstation.svg"
            car="/car-1.svg"
            vuesaxboldprofile2user="/vuesaxboldprofile2user.svg"
            propGap="25px"
            propWidth="121px"
            propWidth1="121px"
            propColor="#1a202c"
          />
          <Catalogue />
          <Catalogue1
            premiumWash=" Eco-Friendly Wash"
            sportcarSUVCoupe="All Vehicle"
            carWash="/ecofriendly@2x.png"
            vuesaxlinearheart="/vuesaxlinearheart.svg"
            vuesaxboldgasStation="/vuesaxboldgasstation.svg"
            car="/car-1.svg"
            vuesaxboldprofile2user="/vuesaxboldprofile2user.svg"
            propGap="20px"
            propWidth="unset"
            propWidth1="unset"
            propColor="#000"
            propWidth2="96px"
            propHeight="unset"
          />
        </section>
        <FrameComponent6 />
      </main>
    </div>
  );
};

export default HomeScreen;
