import React, { useState, useEffect } from 'react';
import { serverCalls } from '../api';

let token = localStorage.getItem('userId')

export const useGetData = () => {
    const [taskData, setData] = useState<any>([]);
    async function handleDataFetch(){
        const result = await serverCalls.get(token);
        setData(result)
    };
    useEffect ( () => {
        handleDataFetch();;
    }, [])
    return {taskData, getData:handleDataFetch}
};