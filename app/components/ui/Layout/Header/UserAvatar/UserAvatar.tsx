import React, {FC} from 'react';
import Image from 'next/image'

import styles from './UserAvatar.module.scss'
import DropDownWrapper from "@/ui/Layout/Header/DropDownWrapper/DropDownWrapper";
import Menu from "@/ui/Layout/Header/Menu/Menu";
import {UserAvatarProps} from "@/ui/Layout/Header/UserAvatar/userAvatar.interface";


const UserAvatar: FC<UserAvatarProps> = ({avatarPath}) => {

    return (
        <DropDownWrapper clickableElement={(toggleShow) =>
            <Image src={avatarPath || '/avatar.png'}
                   alt="Аватар"
                   className={styles.img}
                   width={'40px'}
                   height={'40px'}
                   onClick={toggleShow}
            />
        }>
            <Menu/>
        </DropDownWrapper>
    );
};

export default UserAvatar;