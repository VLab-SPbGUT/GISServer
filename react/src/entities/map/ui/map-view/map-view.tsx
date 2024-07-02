import React from 'react';

import { bem } from '../../../../shared/lib';
import './map-view.scss';

const b = bem('map-view');

export const MapView = () => {
    return <div className={b()}>MapView</div>;
};
