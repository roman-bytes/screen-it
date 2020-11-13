import React from 'react';
import { FunctionComponent } from 'react';
import { ReactElement } from 'react';
import Button from './button';
import AddIcon from './addIcon';

interface HeaderProps {
    siteTitle: string;
}

const Header: FunctionComponent<HeaderProps> = ({
    siteTitle,
}: HeaderProps): ReactElement => (
    <header className="border-b mb-6">
        <div className="mx-auto container py-6 px-4 flex justify-between items-center">
            <h1 className="font-bold text-heading40">Screen It</h1>
            <Button>
                <AddIcon />
                {'Add movie'}
            </Button>
        </div>
    </header>
);

export default Header;
