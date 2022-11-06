import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const GeneralButton = styled(Button)(
    ({ theme, bts }) => `
    border-radius: 20px;
    font-weight: 400;
    max-width: 280px;
    font-size: 18px;
    line-height: 27px;
    height: 50px;
    margin-bottom: 20px;
    color: ${bts === 'link' ? theme.colors.accent : theme.colors.white};
    border-color:${bts === 'link' ? theme.colors.accent : theme.colors.accent};
    background-color: ${bts === 'link' ? theme.colors.white : theme.colors.accent};
     :hover {
        background-color: ${bts === 'link' ? theme.colors.hoverWhite : theme.colors.hoverAccent};
    }
    @media (min-width: 768px) {
        max-width: 230px;
    }
`
);
