import React from 'react';
import { BlokHeroy, HeroyText, BlokContacts, HeroyFlex } from './BlockInfo.styled';
import { Container } from '../container/Container';
import Contacts from 'components/contacts/Contacts';

const BlockInfo = ({ mainInfo }) => {
    return (
        <BlokHeroy>
            <Container>
                <HeroyFlex>
                    <HeroyText>{mainInfo?.h1}</HeroyText>
                    <BlokContacts>
                        <Contacts mainInfo={mainInfo} size={32} /> <div>keys</div>
                    </BlokContacts>
                </HeroyFlex>
            </Container>
        </BlokHeroy>
    );
};

export default BlockInfo;
