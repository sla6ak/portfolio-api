import React from 'react';
import { ReactComponent as Telegram } from '../../svg/icons8-telegram-app.svg';
import { ReactComponent as Viber } from '../../svg/icons8-viber.svg';
import { ReactComponent as WatsUp } from '../../svg/whatsapp-svgrepo-com.svg';
import { IconBox, NumberT, TelLink } from './Contacts.styled';

const Contacts = ({ size, mainInfo }) => {
    const tel = `tel:+38${mainInfo?.tel}`;
    return (
        <IconBox>
            <TelLink sx={{ ml: '5px' }} target="blank" href="https://t.me/vladlen_seo_service">
                <Telegram width={size} height={size} />
            </TelLink>
            <TelLink sx={{ ml: '5px' }} target="blank" href="#">
                <Viber width={size} height={size} />
            </TelLink>
            <TelLink sx={{ ml: '5px' }} target="blank" href="#">
                <WatsUp width={size - 2} height={size - 2} />
            </TelLink>

            <TelLink sx={{ ml: '5px' }} underline="none" target="blank" href={tel}>
                <NumberT sizeSVG={size}>{mainInfo?.tel}</NumberT>
            </TelLink>
        </IconBox>
    );
};

export default Contacts;
