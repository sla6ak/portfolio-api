import styled from '@emotion/styled';

export const AddWorkContainer = styled.div`
    width: 300px;
    padding: 20px;
    border-radius: 20px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    @media (min-width: 768px) {
        width: 650px;
        min-height: 308px;
        padding: 40px;
        box-shadow: none;
    }
    @media (min-width: 1200px) {
        width: 900px;
        min-height: 508px;
        padding: 40px;
        box-shadow: none;
    }
`;
export const ButtonWrapper = styled.div`
    display: block;
    width: 100%;
    @media (min-width: 768px) {
        display: flex;
        justify-content: space-evenly;
        margin-left: auto;
        margin-right: auto;
        margin-top: 20px;
    }
`;
export const FormaCastom = styled.form`
    min-width: 100%;
    margin-top: 10px;
    @media (min-width: 768px) {
    }
`;
