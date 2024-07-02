import React from 'react';

import { bem, markdown2html } from '../../lib';
import { Button } from '../button';

import sosIcon from './lib/sos.png';
import orgcomIcon from './lib/orgcom.png';
import techdepIcon from './lib/techdep.png';

import './support-plate.scss';

interface Props {
    mix?: string;
}

const b = bem('support-plate');

const text = `powered & designed by:  
- __Kuchinskii IST-261__
- __Rizov IST-261__`;

export const SupportPlate = ({ mix }: Props) => {
    return (
        <div className={b(null, null, mix)}>
            <span className={b('powered')} dangerouslySetInnerHTML={{ __html: markdown2html(text) }}></span>

            <div className={b('controls')}>
                <a href="https://vk.com/super-cereal" target="_blank">
                    <Button color="blue" size="s">
                        <img src={sosIcon} alt="sos" className={b('sos')} />
                    </Button>
                </a>
            </div>
        </div>
    );
};
