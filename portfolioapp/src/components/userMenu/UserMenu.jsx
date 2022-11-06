import { useState } from 'react';
import { useSelector } from 'react-redux';
import LogoutIcon from '@mui/icons-material/Logout';
import Modal from 'components/modal/Modal';
import ModalLogOut from 'components/modalLogOut/ModalLogOut';
import { Greeeting, LogOutBtn, Wrapper, TextBtn } from './UserMenu.styled';
import { Settings } from '@mui/icons-material';
import ModalMainInfo from 'components/modalMainInfo/ModalMainInfo';

const UserMenu = () => {
    const [modal, setModal] = useState(false);
    const [modalSet, setModalSet] = useState(false);

    const admin = useSelector(state => state.admin);

    return (
        <Wrapper>
            {admin ? (
                <LogOutBtn
                    onClick={() => {
                        setModalSet(true);
                    }}
                >
                    <TextBtn> Settings </TextBtn>
                    <Settings />
                </LogOutBtn>
            ) : null}
            <Greeeting>admin</Greeeting>
            <LogOutBtn
                onClick={() => {
                    setModal(true);
                }}
            >
                <LogoutIcon />
                {admin ? <TextBtn> Exit </TextBtn> : <TextBtn> Enter </TextBtn>}
            </LogOutBtn>
            {modal ? (
                <Modal
                    onModalClose={() => {
                        setModal(false);
                    }}
                >
                    <ModalLogOut
                        onModalClose={() => {
                            setModal(false);
                        }}
                    />
                </Modal>
            ) : null}
            {modalSet ? (
                <Modal
                    onModalClose={() => {
                        setModalSet(false);
                    }}
                >
                    <ModalMainInfo
                        onModalClose={() => {
                            setModalSet(false);
                        }}
                    />
                </Modal>
            ) : null}
        </Wrapper>
    );
};

export default UserMenu;
