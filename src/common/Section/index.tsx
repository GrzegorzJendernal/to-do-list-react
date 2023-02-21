import { StyledSection, Subheader } from "./styled";
import React from "react";

interface SectionProps {
	title: string,
	body: React.ReactNode,
	optionalContent?: React.ReactNode,
}
const Section = ({title, body, optionalContent}: SectionProps) => (
	<StyledSection>
		<Subheader>
			{title}
			{optionalContent}
		</Subheader>
		{body}
	</StyledSection>
);

export default Section;