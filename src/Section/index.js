import "./style.css";

const Section = ({ title, body, optionalContent }) => (
    <section className="section">
        <h2 className="section__subheader">
            {title}
            {optionalContent}
        </h2>
        <div>
            {body}
        </div>
    </section>
);

export default Section;