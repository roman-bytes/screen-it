import React from 'react';
import { FunctionComponent } from 'react';
import { ReactElement } from 'react';

import Layout from '../components/layout';
import MovieList from '../components/MovieList';

const IndexPage: FunctionComponent = (): ReactElement => {
    return (
        <Layout>
            <MovieList />
        </Layout>
    );
};

export default IndexPage;
