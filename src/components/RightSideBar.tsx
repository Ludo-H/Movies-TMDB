import React from 'react';
import Input from './UI/Input';

const RightSideBar = () => {
    return (
        <div className='right-side-bar'>
            <Input input={{type: 'search', placeholder: 'Recherche'}}/>
            <div className='popular-list'>
                <p>Popular 'famille de film'</p>
                <div>item 1</div>
                <div>item 2</div>
                <div>item 3</div>
                <div>item 4</div>
            </div>
        </div>
    );
};

export default RightSideBar;