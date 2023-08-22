import React from 'react'
import Child from './Child'

import { useState, useEffect } from 'react';

export default function Parent() {
    const age = '';

    const [data, setData] = useState('')
    function childToParent(info) {
        setData(info)
    }
    console.log(data);
    useEffect(() => {
        console.log(data);
},[data])

    return (
        <>
            <div>Parent To Child</div>
            <Child parentToChild={age} child={childToParent} />
        </>
    )
}
