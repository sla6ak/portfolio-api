import styled from '@emotion/styled';

export const Header = styled.header`
    background-color: white;
    width: 100%;
    z-index: 2;
`;

export const HeaderBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    min-height: 100px;
    /* outline-color: tomato; */
    @media (min-width: 768px) {
        min-height: 150px;
    }
`;

export const Avatar = styled.div`
    background-color: #9b9b9b;
    width: 60px;
    height: 60px;
    border-radius: 50%;
`;

export const AvatarCircl = styled.div`
    background-color: #87cca4;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
`;
export const GeroyName = styled.div`
    font-size: 30px;
    font-weight: 800;
`;
export const Geroy = styled.div`
    display: flex;
    /* margin-top: 40px; */
`;

export const Specialisation = styled.div`
    font-size: 25px;
    font-weight: 400px;
`;
