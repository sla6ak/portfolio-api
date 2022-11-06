import React, { useState } from 'react';
import { AddWorkContainer, FormaCastom, ButtonWrapper } from '../modalAddWork/ModalAddWork.styled';
import { GeneralButton } from 'components/generalButton/GeneralButton.styled';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { useUpdateWorkMutation } from 'redux/worksAPI';
import { newWorkSchema } from '../../helpers/validationForm';
import TextField from '@mui/material/TextField';

const ModalEditWork = ({ work, onModalClose }) => {
    const [disabled, setDisabled] = useState(false);
    const [updateWork] = useUpdateWorkMutation();

    const formik = useFormik({
        initialValues: {
            title: work.title,
            link: work.link,
            task: work.task,
            problems: work.problems.join('/'),
            result: work.result.join('/'),
        },

        validationSchema: newWorkSchema,
        onSubmit: async values => {
            values.problems = values.problems.split('/');
            values.result = values.result.split('/');
            setDisabled(true);
            try {
                const respons = await updateWork({ param: work.id, upWork: values });
                if (respons.error?.data?.message) {
                    toast.error(respons.error.data.message);
                    setDisabled(false);
                    return;
                }
                if (respons.data) {
                    toast.success('Work UPDATE! Please restart pages');
                }
            } catch (error) {
                toast.error(error);
            }

            values.title = '';
            values.link = '';
            values.task = '';
            values.problems = '';
            values.result = '';
            setDisabled(false);
            onModalClose();
        },
    });
    return (
        <AddWorkContainer>
            Modal Update Work
            <FormaCastom onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
                    variant="standard"
                    margin="normal"
                    id="title"
                    name="title"
                    type="string"
                    label="title"
                    placeholder="Title"
                    onChange={formik.handleChange}
                    value={formik.values.title}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    variant="standard"
                    id="link"
                    name="link"
                    type="string"
                    label="link"
                    onChange={formik.handleChange}
                    value={formik.values.link}
                    placeholder="link.ua"
                />
                <TextField
                    fullWidth
                    margin="normal"
                    variant="standard"
                    id="task"
                    name="task"
                    type="string"
                    label="task"
                    onChange={formik.handleChange}
                    value={formik.values.task}
                    placeholder="do something"
                />
                <TextField
                    fullWidth
                    margin="normal"
                    multiline
                    rows={4}
                    variant="outlined"
                    id="problems"
                    name="problems"
                    type="string"
                    label="problems"
                    onChange={formik.handleChange}
                    value={formik.values.problems}
                    placeholder="split to /"
                />
                <TextField
                    fullWidth
                    margin="normal"
                    multiline
                    rows={4}
                    variant="outlined"
                    id="result"
                    name="result"
                    type="string"
                    label="result"
                    onChange={formik.handleChange}
                    value={formik.values.result}
                    placeholder="split to /"
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

export default ModalEditWork;
