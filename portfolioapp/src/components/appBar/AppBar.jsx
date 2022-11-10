import UserMenu from '../userMenu/UserMenu';
import { Container } from '../container/Container';
import { Header, HeaderBox, Avatar, AvatarCircl, Geroy, GeroyName, Specialisation, AvatarBtn } from './AppBar.styled';
import { useState } from 'react';
import Modal from 'components/modal/Modal';
import ModalAvatar from 'components/modalAvatar/ModalAvatar';
import BASE_URL from 'redux/testURL';

const AppBar = ({ mainInfo }) => {
    const [modal, setModal] = useState(false);
    const impg = `${BASE_URL}avatar/${mainInfo?.img}`;

    return (
        <>
            <Header>
                <Container>
                    <HeaderBox>
                        <Geroy>
                            <AvatarCircl>
                                <AvatarBtn
                                    onClick={() => {
                                        setModal(true);
                                    }}
                                >
                                    <Avatar src={impg} />
                                </AvatarBtn>
                                {modal ? (
                                    <Modal
                                        onModalClose={() => {
                                            setModal(false);
                                        }}
                                    >
                                        <ModalAvatar
                                            impg={impg}
                                            onModalClose={() => {
                                                setModal(false);
                                            }}
                                        />
                                    </Modal>
                                ) : null}
                            </AvatarCircl>
                            <div>
                                <GeroyName>{mainInfo?.name}</GeroyName>
                                <Specialisation>{mainInfo?.special}</Specialisation>
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
