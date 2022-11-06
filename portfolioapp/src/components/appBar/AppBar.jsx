import UserMenu from '../userMenu/UserMenu';
import { Container } from '../container/Container';
import { Header, HeaderBox, Avatar, AvatarCircl, Geroy, GeroyName, Specialisation } from './AppBar.styled';

const AppBar = () => {
    return (
        <>
            <Header>
                <Container>
                    <HeaderBox>
                        <Geroy>
                            <AvatarCircl>
                                <Avatar />
                            </AvatarCircl>
                            <div>
                                <GeroyName>Влад Третьяк</GeroyName>
                                <Specialisation>seo-специалист</Specialisation>
                            </div>
                        </Geroy>
                        <UserMenu />
                    </HeaderBox>
                </Container>
            </Header>
        </>
    );
};

export default AppBar;
