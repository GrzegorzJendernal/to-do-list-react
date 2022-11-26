import Header from '../../common/Header';
import { Main } from '../../common/Main/styled';
import Section from '../../common/Section';

const AuthorPage = () => (
    <Main>
        <Header
            title="O autorze"
        />
        <Section
            title="Grzegorz Jendernal"
            body={<>huj</>}
        />
    </Main>
);

export default AuthorPage;