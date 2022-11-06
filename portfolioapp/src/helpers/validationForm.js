import { object, string } from 'yup';

export const newWorkSchema = object().shape({
    title: string().required('Title is required'),
    link: string().required('link is required'),
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
