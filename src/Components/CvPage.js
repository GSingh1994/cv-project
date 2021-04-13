import { ImMail4 } from "react-icons/im";
import { AiFillGithub } from "react-icons/ai";
import { TiLocationOutline } from "react-icons/ti";
const CvPage = ({ name, website, address, email }) => {
  return (
    <div className="CvPage">
      <div className="cv-header">
        <div className="name">{name}</div>
        <div className="website">
          <AiFillGithub /> {website}
        </div>
        <div className="address">
          <TiLocationOutline />
          {address}
        </div>
        <div className="email">
          <ImMail4 />
          {email}
        </div>
      </div>
    </div>
  );
};

export default CvPage;
