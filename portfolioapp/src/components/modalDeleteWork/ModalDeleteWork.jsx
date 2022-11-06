import React from 'react';
import { LogOutContainer, ModalTitle, TitleAccent, ButtonWrapper } from 'components/modalLogOut/ModalLogOut.styled';
import { GeneralButton } from 'components/generalButton/GeneralButton.styled';
import { useSelector } from 'react-redux';
import { useDeleteWorkMutation } from 'redux/worksAPI';
import { toast } from 'react-toastify';

const ModalDeleteWork = ({ workID, onModalClose }) => {
    const admin = useSelector(state => state.admin);
    const [deleteWork] = useDeleteWorkMutation();

    const deletedWork = id => {
        if (admin) {
            deleteWork(workID);
            toast.success('Work DELETED!');
        }
        onModalClose(false);
    };
    return (
        <LogOutContainer>
            <ModalTitle>
                <TitleAccent>Delete</TitleAccent>Are you sure you want to delete?
            </ModalTitle>
            <ButtonWrapper>
                <GeneralButton fullWidth variant={'contained'} bts={'error'} onClick={deletedWork} type="button">
                    Deleted
                </GeneralButton>
                <GeneralButton fullWidth variant={'outlined'} bts={'link'} onClick={onModalClose} type="button">
                    No
                </GeneralButton>
            </ButtonWrapper>
        </LogOutContainer>
    );
};

export default ModalDeleteWork;
