import { Box, useMediaQuery } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import Widgets from 'scenes/Widgets/widgets';

const HomePage = () => {
    const {_id, picture} = useSelector((state) => state.user);
    const isMobileView = useMediaQuery("(min-width : 1000px)");
    return (
        <Box>
            <Box
                width="100%"
                padding="2rem 6%"
                display={isMobileView ? "flex" : "block"}
                gap = "0.5rem"
                justifyContent="space-between">
                <Box flexBasis={isMobileView ? "26%" : undefined}> 
                    <Widgets userId={_id} picture={picture} />
                </Box>
               
            </Box>

        </Box>
    );
}

export default HomePage;
