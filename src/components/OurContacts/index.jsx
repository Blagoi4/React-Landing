import "./OurContacts.css";
import SectionTitle from "../SectionTitle";
import GoogleIcon from "../../images/googleIcon.svg";
const OurContacts = ({ title, subTitle }) => {
  return (
    <section className="container">
      <div>
        <SectionTitle title={title} subTitle={subTitle} />
      </div>
      <div className="contacts-google">
        <iframe className="google-map"
          src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d20309.075323923767!2d30.4721233!3d50.4851493!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1709996290261!5m2!1sru!2sua"
          width="800"
          height="600"
          //   style="border:0;"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="contacts-google__text">
        <img src={GoogleIcon} width="35px" height="35px" alt="" />
        <span>
          356800, Днепропетровская область, Криворожский район г. Кривой рог,
          Днепропетровское шоссе, дом 40
        </span>
      </div>
    </section>
  );
};

export default OurContacts;
