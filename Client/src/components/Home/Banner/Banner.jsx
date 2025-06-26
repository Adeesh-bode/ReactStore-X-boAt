import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";
const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>Cruise with Boat</h1>
          <p>
            Welcome to ReactStore - your ultimate destination for exclusive Boat
            electronics deals! Discover unbeatable discounts on the latest audio
            gear, smartwatches, and more. Don&apos;t miss out - shop now and upgrade
            your lifestyle with cutting-edge tech!
          </p>
          <div className="ctas">
            <div className="banner-cta">Read More</div>
            <div className="banner-cta v2">Shop Now</div>
          </div>
        </div>
        <img alt="" src={BannerImg} className="banner-img" />
      </div>
    </div>
  );
};

export default Banner;
