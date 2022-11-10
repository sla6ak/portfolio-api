import styled from '@emotion/styled';
import { Link } from '@mui/material';

export const ElementWork = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    min-height: 100px;
    margin-bottom: 25px;
    flex-wrap: wrap;
    border-radius: 10px;
    box-shadow: 3px 3px 9px #8a8a8a;
    padding: 30px 10px;
`;
export const HeaderWork = styled.div`
    min-width: 300px;
    display: flex;
    flex-direction: column;
    width: 30%;
    padding: 8px;
`;

export const TitleWork = styled.h2`
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 15px;
    text-indent: 15px;
    width: 85%;
`;
export const WorkLink = styled(Link)`
    /* margin-left: 5px; */
    font-size: 18px;
    color: #428040;
    margin-bottom: 20px;
`;
export const Task = styled.p`
    text-indent: 15px;
    font-size: 16px;
    color: #333333;
    margin-top: 10px;
`;
export const ProblemsWork = styled.div`
    font-size: 16px;
    color: #333333;
    width: 35%;
    padding: 8px;
    display: flex;
    flex-direction: column;
    min-width: 250px;
`;
export const ResultWork = styled.div`
    min-width: 250px;
    font-size: 16px;
    color: #333333;
    width: 35%;
    padding: 8px;
    display: flex;
    flex-direction: column;
`;
export const TitleTask = styled.div`
    text-indent: 15px;
    font-size: 18px;
    color: #161616;
    font-weight: 500;
    margin-bottom: 15px;
`;

export const PunctTask = styled.p`
    font-size: 16px;
    color: #2b2a2a;
    font-weight: 400;
    display: flex;
    margin-top: 5px;
    font-family: 'Poor Story', cursive;
`;
export const LinkBox = styled.p`
    text-indent: 20px;
    display: flex;
    /* align-items: center; */
`;
