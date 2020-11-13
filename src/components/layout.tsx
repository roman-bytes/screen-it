/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { FunctionComponent } from 'react';
import { ReactElement } from 'react';
import { ReactNode } from 'react';
import { StateProvider } from '../state';

import Header from './header';
import './main.css';
import AddMovie from './addMovie';

interface LayoutProps {
    children: ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({
    children,
}: LayoutProps): ReactElement => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    const initialState = {
        movies: [],
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case 'addMovie':
                return {
                    movies: [...state.movies, action.movie],
                };

            default:
                return state;
        }
    };

    return (
        <StateProvider initialState={initialState} reducer={reducer}>
            <div>
                <Header siteTitle={data.site.siteMetadata.title} />
                <AddMovie />
                <div className="max-w-2xl mx-auto pt-0 px-4 pb-6">
                    <main>{children}</main>
                </div>
            </div>
        </StateProvider>
    );
};

export default Layout;
