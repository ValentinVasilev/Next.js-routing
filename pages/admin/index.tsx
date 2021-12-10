import React from 'react';
import { Grid, Typography } from '@mui/material';
import styles from './admin.module.css';

function HelloAdmin() {
    return (
        <Grid container className={styles.mainGrid}>
            <Grid item xl={12} className={styles.header}>
                <p className={styles.headerTitle}>Hello from Admin page!</p>
            </Grid>
            <Grid container>
                <Grid item xl={2} className={styles.leftSideBar}>
                    <p>Left side Bar</p>
                </Grid>
                <Grid item xl={10} className={styles.mainContent}>
                    <p>Main content</p>
                    <Grid container>
                        <Grid item xl={4} className={styles.items}>1</Grid>
                        <Grid item xl={4} className={styles.items}>2</Grid>
                        <Grid item xl={4} className={styles.items}>3</Grid>
                        <Grid item xl={8} className={styles.items}>4</Grid>
                        <Grid item xl={4} className={styles.items}>5</Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default HelloAdmin;