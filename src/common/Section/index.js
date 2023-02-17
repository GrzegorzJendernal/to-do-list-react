import { StyledSection, Subheader } from "./styled";

const Section = ({title, body, optionalContent}) => (
	<StyledSection>
		<Subheader>
			{title}
			{optionalContent}
		</Subheader>
		{body}
	</StyledSection>
);

export default Section;