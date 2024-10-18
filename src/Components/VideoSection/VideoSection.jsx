// import PropTypes from "prop-types";
// import "./VideoSection.css";

// const VideoSection = ({ className = "" }) => {
//   return (
//     <div className={`videosection ${className}`}>
//       <div className="background">
//         <video 
//           className="background-video"
//           src="https://www-cdn.djiits.com/reactor/assets/_next/static/videos/a2b84b06-115f-4333-ac9c-f7893c4ebafe.mp4" 
//           autoPlay 
//           loop 
//           muted 
//           playsInline
//         />
//         <div className="text-overlay">
//           D Aerospace
//           <div className="slogan">Giving you freedom to fly higher</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// VideoSection.propTypes = {
//   className: PropTypes.string,
// };

// export default VideoSection;



import PropTypes from "prop-types";
import "./VideoSection.css";

const VideoSection = ({ className = "" }) => {
  return (
    <div className={`videosection ${className}`}>
      <div className="background">
        <img
          className="viber-image"
          alt=""
          src="/viber-image-20240225-233129517-1@2x.png"
        />
        <div className="text-overlay">
          D Aerospace
          <div className="slogan">Giving you freedom to fly higher</div>
        </div>
      </div>
    </div>
  );
};

VideoSection.propTypes = {
  className: PropTypes.string,
};

export default VideoSection;
