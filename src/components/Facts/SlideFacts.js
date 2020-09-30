import React from 'react';

const SlideFacts = ({item}) => {
    return (
        <div className="facts-slide">
            <img src={item.imgUrl} alt="slide facts"/>
            <p className="facts-slide-desc">
                {item.desc}
            </p>
        </div>
    );
};

export default SlideFacts;
