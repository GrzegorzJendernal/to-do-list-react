import { StyledSection, Subheader } from "./styled";

const Section = ({ title, body, optionalContent }) => (
    <StyledSection>
        <Subheader>
            {title}
            {optionalContent}
        </Subheader>
        <div>
            {body}
        </div>
    </StyledSection>
);

export default Section;