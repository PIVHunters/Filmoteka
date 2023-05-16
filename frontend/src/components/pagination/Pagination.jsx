import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";

const Pagination = (props) => {

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)

        return function () {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [])

    const history = useLocation()

    useEffect(() => {
        props.setItems([])
        props.setCurrentPage(1)
        props.setFetching(true)
    }, [history.pathname])

    useEffect(() => {
        if (props.fetching) {
            fetchNews()
                .finally(() => props.setFetching(false))
        }
    }, [props.fetching])

    async function fetchNews() {
        const response = await props.service.getAll(props.currentPage)
        props.setItems([...props.items, ...response])
        props.setCurrentPage(prevState => prevState + 1)
    }

    const scrollHandler = (e) => {
        if (e.target.documentElement.scrollHeight -
            (e.target.documentElement.scrollTop + window.innerHeight) < 150) {
            props.setFetching(true)
        }
    }

    return (
        <div>

        </div>
    );
};

export default Pagination;