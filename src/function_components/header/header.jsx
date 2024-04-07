import React, { useEffect } from 'react';
import {Grid, Button} from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import LoupeIcon from '@mui/icons-material/Loupe';

import '../../css/clucion.css';

import Img from '../../images/mark.png'

function Header() {
    return (
        <div>
            <Grid container spacing={1} direction="row" className="header_left">
                <Grid justifyContent="flex-end" alignItems="center" item xs={3} display="flex">
                    <img src={Img} width="40%" height="60%" />
                </Grid>
                <Grid container direction="row" justifyContent="center" alignItems="center" xs={6} className="header_center">
                    <Grid item xs justifyContent="center" display="flex">
                        Home
                    </Grid>
                    <Grid item xs justifyContent="center" display="flex">
                        How to buy
                    </Grid>
                    <Grid item xs justifyContent="center" display="flex">
                        White Paper
                    </Grid>
                    <Grid item xs justifyContent="center" display="flex">
                        Roadmap
                    </Grid>
                    <Grid item xs justifyContent="center" display="flex">
                        Merch
                    </Grid>
                </Grid>
                <Grid item xs={3} justifyContent="center" alignItems="center" display="flex"  >
                    <Button justifyContent="center" alignItems="center" sx={{ ml: 2 }} variant="contained" size="small" startIcon={<LoginIcon />}>Log In</Button>
                    <Button justifyContent="center" alignItems="center" sx={{ ml: 2 }} variant="contained" size="small" startIcon={<LoupeIcon />}>Sign In</Button>
                </Grid>
            </Grid>
        </div>
    );
}

export { Header };