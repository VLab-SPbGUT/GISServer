import React from 'react';

import { useFormattedTime } from '../../lib';
import { Layout } from '../layout';

import './header.css';

export const Header = () => {
    const time = useFormattedTime();

    return (
        <div className="header">
            <Layout>
                <div>Местное время: {time}</div>
            </Layout>
        </div>
    );
};
