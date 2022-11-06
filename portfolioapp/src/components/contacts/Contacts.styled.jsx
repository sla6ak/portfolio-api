import styled from '@emotion/styled';
import { Link } from '@mui/material';

export const IconBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`;
export const NumberT = styled.p`
    margin-left: 5px;
    color: #3d3d3d;
    font-size: ${({ sizeSVG }) => (sizeSVG > 25 ? '24px' : '15px')};
    transition: transform 300ms cubic-bezier(0.165, 0.84, 0.44, 1);
    :hover {
        transform: scale(1.038);
        color: #428b4e;
    }
`;
export const TelLink = styled(Link)`
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
