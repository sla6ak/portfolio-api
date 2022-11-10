import { object, string } from 'yup';

export const newWorkSchema = object().shape({
    title: string().required('Title is required'),
    link: string(),
    task: string().required('task is required'),
    problems: string().required('problems is required'),
    result: string().required('result is required'),
});

export const updateWorkSchema = object().shape({
    title: string(),
    link: string(),
    task: string(),
    problems: string(),
    result: string(),
});

export const updateMainInfo = object().shape({
    name: string().required('Name is required'),
    special: string().required('Specialisation is required'),
    h1: string().required('H1 is required'),
    tel: string().required('Tel is required'),
});
