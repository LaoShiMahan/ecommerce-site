import React from 'react';

export const PageTitle = (props) => {
    const { className, title } = props;
    return (
        <div className={ `${ className } page-title` }>
            { title }
        </div>
    );
}