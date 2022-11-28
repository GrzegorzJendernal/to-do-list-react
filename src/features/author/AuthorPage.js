import Header from '../../common/Header';
import { Main } from '../../common/Main/styled';
import Section from '../../common/Section';
import AboutMe from './AboutMe';

const AuthorPage = () => (
    <Main>
        <Header
            title="O autorze"
        />
        <Section
            title="Grzegorz Jendernal"
            body={<AboutMe />}
        />
    </Main>
);

export default AuthorPage;