import React, { PropsWithChildren } from 'react';
import cx from 'classnames';

import { Layout } from '../layout';
import { SupportPlate } from '../support-plate';

import './page.scss';

interface Props extends PropsWithChildren {
    mix?: string;
}

export const Page = ({ children, mix }: Props) => (
    <div className={cx('page', mix)}>
        <Layout>
            {children}

            <SupportPlate mix="page__support-plate" />
        </Layout>
    </div>
);
