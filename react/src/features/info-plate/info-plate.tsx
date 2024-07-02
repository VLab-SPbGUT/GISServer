import React from 'react';

import { bem } from '../../shared/lib';
import './info-plate.scss';

const b = bem('info-plate')

export const InfoPlate = () => {
    return <div className={b()}>InfoPlate</div>;
};
