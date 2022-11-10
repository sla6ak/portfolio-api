import styled from '@emotion/styled';

export const BlokHeroy = styled.section`
    min-height: 200px;
    margin-top: 25px;
    margin-bottom: 35px;
`;
export const HeroyFlex = styled.div`
    height: 100%;
    display: flex;
    /* align-items: center; */
    justify-content: space-around;
    flex-direction: column;
`;

export const HeroyText = styled.h1`
    font-weight: 600;
    font-size: 30px;
    margin-bottom: 35px;
    @media (min-width: 768px) {
        font-size: 50px;
        width: 80%;
        line-height: 1.3;
        padding-left: 30px;
    }
`;
export const BlokContacts = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;
