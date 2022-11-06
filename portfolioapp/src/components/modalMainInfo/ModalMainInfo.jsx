import React, { useState } from 'react';
import { AddWorkContainer, FormaCastom, ButtonWrapper } from '../modalAddWork/ModalAddWork.styled';
import { GeneralButton } from 'components/generalButton/GeneralButton.styled';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { useUpdateMainInfoMutation } from 'redux/mainInfoAPI';
import TextField from '@mui/material/TextField';

const ModalMainInfo = ({ onModalClose }) => {
    const [disabled, setDisabled] = useState(false);
    const [updateMainInfo] = useUpdateMainInfoMutation();

    const formik = useFormik({
        initialValues: {
            name: 'Vlad Tretyak',
            special: 'SEO-specialist',
            h1: '',
            tel: '',
        },
        onSubmit: async values => {
            setDisabled(true);
            try {
                const respons = await updateMainInfo(values);
                if (respons.error) {
                    toast.error(respons.error.data.message);
                    setDisabled(false);
                    return;
                }
                if (respons.data) {
                    toast.success('new Work ADDED! Please restart pages');
                }
            } catch (error) {
                toast.error(error);
            }

            values.name = '';
            values.special = '';
            values.h1 = '';
            values.tel = '';
            setDisabled(false);
            onModalClose();
        },
    });
    return (
        <AddWorkContainer>
            Modal Main Info
            <FormaCastom onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
                    variant="standard"
                    margin="normal"
                    id="name"
                    name="name"
                    type="string"
                    label="name"
                    placeholder="Vlad Tretyak"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    variant="standard"
                    id="special"
                    name="special"
                    type="string"
                    label="special"
                    onChange={formik.handleChange}
                    value={formik.values.special}
                    placeholder="SEO"
                />
                <TextField
                    fullWidth
                    margin="normal"
                    variant="standard"
                    id="h1"
                    name="h1"
                    type="string"
                    label="Heroy"
                    onChange={formik.handleChange}
                    value={formik.values.h1}
                    placeholder="do something"
                />
                <TextField
                    fullWidth
                    margin="normal"
                    variant="standard"
                    id="tel"
                    name="tel"
                    type="string"
                    label="tel"
                    onChange={formik.handleChange}
                    value={formik.values.tel}
                    placeholder="097"
                />
                <ButtonWrapper>
                    <GeneralButton disabled={disabled} fullWidth variant={'contained'} bts={'submit'} type="submit">
                        Send
                    </GeneralButton>
                    <GeneralButton fullWidth variant={'outlined'} bts={'link'} onClick={onModalClose} type="button">
                        Cancel
                    </GeneralButton>
                </ButtonWrapper>
            </FormaCastom>
        </AddWorkContainer>
    );
};

export default ModalMainInfo;
