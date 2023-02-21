import Header from '../../common/Header';
import { Main } from '../../common/Main';
import Section from '../../common/Section';
import AboutMe from './AboutMe';
import React from "react";

const AuthorPage = () => (
	<Main>
		<Header
			title="O autorze"
		/>
		<Section
			title="Grzegorz Jendernal"
			body={<AboutMe/>}
		/>
	</Main>
);

export default AuthorPage;