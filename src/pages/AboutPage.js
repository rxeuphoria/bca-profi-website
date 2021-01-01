import React from 'react';

import BigTitle from '../components/BigTitle';

function AboutPage (props){

    return(
        <div>
        <BigTitle title= {props.title} subTitle={props.subTitle} flavorText={props.flavorText} />
        </div>
    );
}

export default AboutPage;