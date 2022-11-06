import React from 'react';
import { Container } from '../container/Container';
import { BlokFooter, Reklama } from './LastInfo.styled';
import { TelLink } from 'components/contacts/Contacts.styled';
import { ReactComponent as Telegram } from '../../svg/icons8-telegram-app.svg';

const LastInfo = () => {
    return (
        <BlokFooter>
            <Container>
                <Reklama>
                    <p>This site was developed</p>
                    <TelLink sx={{ ml: '5px' }} target="blank" href="https://t.me/Tor_Ya">
                        <p>Viktor</p>
                        <Telegram height={'25px'} />
                    </TelLink>
                </Reklama>
            </Container>
        </BlokFooter>
    );
};

export default LastInfo;
