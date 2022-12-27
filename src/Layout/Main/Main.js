import { Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftSide from '../../Pages/LeftSide/LeftSide';
import RightSide from '../../Pages/RightSide/RightSide';
import Footer from '../../Pages/Shared/Footer/Footer';
import Navbar from '../../Pages/Shared/Navbar/Navbar';

const Main = () => {
    return (
        <Grid
            templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
            gridTemplateRows={'50px 1fr 30px'}
            gridTemplateColumns={'250px 1fr'}
            h='200px'
            gap='1'
            color='blackAlpha.700'
            fontWeight='bold'
        >
            <GridItem area={'header'}>
                <Navbar/>
            </GridItem>
            <GridItem area={''}>
                <LeftSide/>
            </GridItem>
            <GridItem area={'main'}>
                <Outlet/>
            </GridItem>
            <GridItem  area={'footer'}>
                <Footer/>
            </GridItem>
        </Grid>
    );
};

export default Main;