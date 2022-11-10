import React from 'react';
import { ModalBackgr, TekstAv, BtAv, ShellInputs, ImgS } from './ModalAvatar.styled';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useUpdateAvatarMutation } from 'redux/mainInfoAPI';

const ModalAvatar = ({ impg, onModalClose }) => {
    const admin = useSelector(state => state.admin);
    const [imgNew, setImgNew] = useState(null);
    const [updateAvatar] = useUpdateAvatarMutation();

    const handleSubmit = async e => {
        const formData = new FormData();
        formData.append('image', imgNew);
        const res = await updateAvatar({ formData }); // и фетчь запрос отрабатывает раз сервер его принимает
        if (res.data?.message) {
            toast.success('Avatar is update');
        }
        if (res.error)
            if (res) {
                toast.error('Avatar dont update');
            }
        onModalClose(false);
    };
    const upload = event => {
        event.preventDefault();
        if (event.target.files[0]) {
            setImgNew(event.target.files[0]);
        }
    };

    return (
        <ModalBackgr>
            <ImgS src={impg} alt="ava" />
            {admin ? (
                <ShellInputs>
                    <TekstAv>Select square img please</TekstAv>
                    <input multiple type="file" onChange={upload} id="contained-button-content" name="customFile" />
                    <BtAv onClick={handleSubmit} type="submit" disabled={!imgNew}>
                        Send
                    </BtAv>
                </ShellInputs>
            ) : null}
        </ModalBackgr>
    );
};

export default ModalAvatar;
