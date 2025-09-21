import { UIAvatars } from './UIAvatars';
import * as fs from 'fs';

const Avatar = UIAvatars({
    text: 'Arabys UI',
    size: 512,
    rounded: true,
    bgColor: '#181818',
    textColor: '#FFFFFF',
    fontFamily: 'Manrope'
});

fs.writeFileSync('avatar.png', Avatar);