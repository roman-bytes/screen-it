import React from 'react';
import { FunctionComponent } from 'react';
import { ReactElement } from 'react';
// import { useStateValue } from '../state';

import Layout from '../components/layout';
import MovieList from '../components/MovieList';

const IndexPage: FunctionComponent = (): ReactElement => {
    // const [{ movies }, dispatch] = useStateValue();
    // const movies = [
    //     // {
    //     //     name: 'Star Wars',
    //     //     category: 'Sci-Fi',
    //     //     rating: 5,
    //     // },
    // ];
    return (
        <Layout>
            <MovieList/>
        </Layout>
    );
};

export default IndexPage;
