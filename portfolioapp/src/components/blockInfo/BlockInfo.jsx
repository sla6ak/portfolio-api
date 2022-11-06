import React from 'react';
import { BlokHeroy, HeroyText, BlokContacts, HeroyFlex } from './BlockInfo.styled';
import { Container } from '../container/Container';
import Contacts from 'components/contacts/Contacts';

const BlockInfo = () => {
    return (
        <BlokHeroy>
            <Container>
                <HeroyFlex>
                    <HeroyText>
                        Профессиональное продвижение <br /> сайтов в поиске Yandex и Google
                    </HeroyText>
                    <BlokContacts>
                        <Contacts size={32} /> <div>кейсы</div>
                    </BlokContacts>
                </HeroyFlex>
            </Container>
        </BlokHeroy>
    );
};

export default BlockInfo;
