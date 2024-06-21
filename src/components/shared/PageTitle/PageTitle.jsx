'use client';

import React from 'react';
import { Helmet } from 'react-helmet';

const PageTitle = ({title}) => {

    console.log('helmet get');

    return (
        <Helmet>
            <title>{title}</title>
        </Helmet>
    );
};

export default PageTitle;