import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import { Box } from '@mui/material';

const app = () => {
    return (
        <Router>
            <Box sx={{ backgroudColor: '#000' }}>
                <Navbar />
                <Routes>
                    {/* Exact used because react does partial matching, so we use exact to prevent it from happening */}
                    <Route path='/' exact element={<Feed />} />
                    <Route path='/video/:id' element={<VideoDetail />} />
                    <Route path='/channel/:id' element={<ChannelDetail />} />
                    <Route path='/search/:searchTerm' element={<SearchFeed />} />
                </Routes>
            </Box>
        </Router>
    )
}

export default app