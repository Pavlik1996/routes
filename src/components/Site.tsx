import React from 'react';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import { dataState } from '../data/dataState';
import { isActiveClass } from './isActive';
import { Error404 } from './pages/Error404';
import { Page } from './pages/Page';
import { PageOne } from './pages/PageOne';
import { PageThree } from './pages/PageThree';
import { PageTwo } from './pages/PageTwo';
import styles from './Site.module.css'


export const Site = () => {
    return (
        <>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <div><NavLink className={({ isActive }) => isActiveClass(isActive)} to={'/page/0'}>PAGE 1</NavLink></div>
                    <div><NavLink className={({ isActive }) => isActiveClass(isActive)} to={'/page/1'}>PAGE 2</NavLink></div>
                    <div><NavLink className={({ isActive }) => isActiveClass(isActive)} to={'/page/2'}>PAGE 3</NavLink></div>
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path={'/'} element={<Navigate to={'/page1'} />} />

                        <Route path={'/page/:id'} element={<Page pages={dataState.page}/>} />

                        {/* <Route path={'/page1'} element={<PageOne />} /> */}
                        {/* <Route path={'/page2'} element={<PageTwo />} /> */}
                        {/* <Route path={'/page3'} element={<PageThree />} /> */}

                        <Route path={'/*'} element={<Error404 />} />
                    </Routes>
                </div>
            </div>
        </>
    );
};

