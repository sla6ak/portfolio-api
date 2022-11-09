import React from 'react';
import { ModalBackgr } from './ModalAvatar.styled';
import { useSelector } from 'react-redux';
import { useState } from 'react';
// import BASE_URL from '../../redux/testURL';
// import { toast } from 'react-toastify';
import { useUpdateAvatarMutation } from 'redux/mainInfoAPI';
// import axios from 'axios';

const ModalAvatar = ({ impg }) => {
    const admin = useSelector(state => state.admin);
    const [imgNew, setImgNew] = useState(null);
    const [updateAvatar] = useUpdateAvatarMutation();

    const handleSubmit = async e => {
        const formData = new FormData();
        formData.append('image', imgNew);
        console.log(formData); // тут вот явно лежит выбранное юзером изображение!!!
        const respons = await updateAvatar({ formData }); // и фетчь запрос отрабатывает раз сервер его принимает
        console.log('respons:', respons);
    };
    const upload = event => {
        event.preventDefault();
        if (event.target.files[0]) {
            setImgNew(event.target.files[0]);
        }
    };

    return (
        <ModalBackgr>
            <img src={impg} alt="ava" />
            {admin ? (
                <>
                    <input multiple type="file" onChange={upload} id="contained-button-content" name="customFile" />
                    <button onClick={handleSubmit} type="submit">
                        send
                    </button>
                </>
            ) : null}
        </ModalBackgr>
    );
};

export default ModalAvatar;
