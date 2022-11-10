import React, { useState } from 'react';
import {
    ElementWork,
    HeaderWork,
    WorkLink,
    TitleWork,
    Task,
    ProblemsWork,
    ResultWork,
    TitleTask,
    PunctTask,
    LinkBox,
} from './MyWork.styled';
import Contacts from 'components/contacts/Contacts';
// import { DoneOutline } from '@mui/icons-material';
import { DoneAll } from '@mui/icons-material';
import { ReportGmailerrorred } from '@mui/icons-material';
import Modal from 'components/modal/Modal';
import { Language } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import { ModalCloseBtn } from 'components/modal/Modal.styled';
import { useSelector } from 'react-redux';
import { GeneralButton } from 'components/generalButton/GeneralButton.styled';
import ModalDeleteWork from 'components/modalDeleteWork/ModalDeleteWork';
import ModalEditWork from 'components/modalEditWork/ModalEditWork';

const MyWork = ({ work, mainInfo }) => {
    const [modal, setModal] = useState(false);
    const [modalDel, setModalDel] = useState(false);
    const admin = useSelector(state => state.admin);

    return (
        <ElementWork>
            {admin ? (
                <ModalCloseBtn onClick={() => setModalDel(true)}>
                    <CloseIcon sx={{ color: '#be3952' }} />
                </ModalCloseBtn>
            ) : null}
            <HeaderWork>
                <TitleWork>{work.title}</TitleWork>
                <LinkBox>
                    <Language color="success" width={25} height={25} />
                    <WorkLink href={'https://' + work.link} target="_blank" rel="noreferrer" underline="hover">
                        {work.link}
                    </WorkLink>
                </LinkBox>
                <h3>Задача</h3>
                <Task>{work.task}</Task>
            </HeaderWork>
            <ProblemsWork>
                <TitleTask>Найденные проблемы в коде:</TitleTask>
                <>
                    {work.problems.map((el, ind, arr) => {
                        return (
                            <PunctTask key={ind}>
                                <ReportGmailerrorred sx={{ color: '#be3952', mr: '5px', mt: '-3px' }} />
                                {el}
                            </PunctTask>
                        );
                    })}
                </>
            </ProblemsWork>
            <ResultWork>
                <TitleTask>Решения и результаты:</TitleTask>
                {work.result.map((el, ind, arr) => {
                    return (
                        <PunctTask key={ind}>
                            <DoneAll color="success" sx={{ mr: '5px' }} />
                            {el}
                        </PunctTask>
                    );
                })}
                <Contacts size={21} mainInfo={mainInfo} />
            </ResultWork>
            {admin ? (
                <>
                    <GeneralButton
                        variant={'contained'}
                        bts={'link'}
                        onClick={() => {
                            setModal(true);
                        }}
                        type="button"
                    >
                        Edit my work
                    </GeneralButton>
                    {modal ? (
                        <Modal
                            onModalClose={() => {
                                setModal(false);
                            }}
                        >
                            <ModalEditWork
                                work={work}
                                onModalClose={() => {
                                    setModal(false);
                                }}
                            />
                        </Modal>
                    ) : null}
                    {modalDel ? (
                        <Modal
                            onModalClose={() => {
                                setModalDel(false);
                            }}
                        >
                            <ModalDeleteWork
                                workID={work.id}
                                onModalClose={() => {
                                    setModalDel(false);
                                }}
                            />
                        </Modal>
                    ) : null}
                </>
            ) : null}
        </ElementWork>
    );
};

export default MyWork;
