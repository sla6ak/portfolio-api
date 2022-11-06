import React from 'react';
import { ReactComponent as Telegram } from '../../svg/icons8-telegram-app.svg';
import { ReactComponent as Viber } from '../../svg/icons8-viber.svg';
import { ReactComponent as WatsUp } from '../../svg/whatsapp-svgrepo-com.svg';
import { IconBox, NumberT, TelLink } from './Contacts.styled';

const Contacts = ({ size }) => {
    return (
        <IconBox>
            <TelLink sx={{ ml: '5px' }} target="blank" href="https://t.me/vladlen_seo_service">
                <Telegram width={size} height={size} />
            </TelLink>
            <Viber width={size} height={size} />
            <WatsUp width={size - 2} height={size - 2} />

            <TelLink underline="none" target="blank" href="tel:+380971731201">
                <NumberT sizeSVG={size}>097 173 12 01</NumberT>
            </TelLink>
        </IconBox>
    );
};

export default Contacts;
