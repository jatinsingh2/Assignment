import React, { useState } from 'react';
import { Box, Drawer, List, ListItem, ListItemText, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import './App.css';
import { CiSearch } from "react-icons/ci";


const users = [
    { username: 'user1', status: 'Active', email: 'user1@example.com', lastAccess: 'Wed, Jul 10, 2024', created: 'Wed, Jul 10, 2024', riskScore: '-' },
    { username: 'user2', status: 'Active', email: 'user2@example.com', lastAccess: 'Wed, Jul 10, 2024', created: 'Wed, Jul 10, 2024', riskScore: '-' },
    { username: 'user3', status: 'Active', email: 'user3@example.com', lastAccess: 'Wed, Jul 10, 2024', created: 'Wed, Jul 10, 2024', riskScore: '-' },
    { username: 'user4', status: 'Active', email: 'user4@example.com', lastAccess: 'Wed, Jul 10, 2024', created: 'Wed, Jul 10, 2024', riskScore: '-' },
    { username: 'user5', status: 'Active', email: 'user5@example.com', lastAccess: 'Wed, Jul 10, 2024', created: 'Wed, Jul 10, 2024', riskScore: '-' },
    { username: 'user6', status: 'Active', email: 'user6@example.com', lastAccess: 'Wed, Jul 10, 2024', created: 'Wed, Jul 10, 2024', riskScore: '-' },
    { username: 'user7', status: 'Active', email: 'user7@example.com', lastAccess: 'Wed, Jul 10, 2024', created: 'Wed, Jul 10, 2024', riskScore: '-' },
    { username: 'user8', status: 'Active', email: 'user8@example.com', lastAccess: 'Wed, Jul 10, 2024', created: 'Wed, Jul 10, 2024', riskScore: '-' },
    { username: 'user9', status: 'Active', email: 'user9@example.com', lastAccess: 'Wed, Jul 10, 2024', created: 'Wed, Jul 10, 2024', riskScore: '-' },
    { username: 'user10', status: 'Active', email: 'user10@example.com', lastAccess: 'Wed, Jul 10, 2024', created: 'Wed, Jul 10, 2024', riskScore: '-' },
    { username: 'user11', status: 'Active', email: 'user11@example.com', lastAccess: 'Wed, Jul 10, 2024', created: 'Wed, Jul 10, 2024', riskScore: '-' },
    { username: 'user12', status: 'Active', email: 'user12@example.com', lastAccess: 'Wed, Jul 10, 2024', created: 'Wed, Jul 10, 2024', riskScore: '-' },
    { username: 'user12', status: 'Active', email: 'user12@example.com', lastAccess: 'Wed, Jul 10, 2024', created: 'Wed, Jul 10, 2024', riskScore: '-' },
    { username: 'user13', status: 'Active', email: 'user13@example.com', lastAccess: 'Wed, Jul 10, 2024', created: 'Wed, Jul 10, 2024', riskScore: '-' },
    { username: 'user14', status: 'Active', email: 'user14@example.com', lastAccess: 'Wed, Jul 10, 2024', created: 'Wed, Jul 10, 2024', riskScore: '-' },
    { username: 'user15', status: 'Active', email: 'user15@example.com', lastAccess: 'Wed, Jul 10, 2024', created: 'Wed, Jul 10, 2024', riskScore: '-' },
];

const drawerWidth = 240;

function App() {
  const [pointer, setPointer] = useState('Overview')
    return (
        <Box sx={{ display: 'flex' }}>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <List>
                    {['Overview', 'Users', 'Groups', 'Dynamic Groups', 'Integrated Applications', 'Oracle Cloud Services', 'Jobs', 'Reports', 'Security', 'Settings', 'Notifications', 'Branding'].map((text, index) => (
                        <ListItem button key={text} onClick= {()=>{setPointer(text)}}>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            >
              {pointer=='Overview' && (
                <Typography variant="h4" gutterBottom>
                Overview
            </Typography>
              )}
              {pointer=='Users' && (
                <Typography variant="h4" gutterBottom>
                Users in default domain
            </Typography>
              )}
              {pointer=='Groups' && (
                <Typography variant="h4" gutterBottom>
                Groups
            </Typography>
              )}
              {pointer=='Dynamic Groups' && (
                <Typography variant="h4" gutterBottom>
                Dynamic groups
            </Typography>
              )}
              {pointer=='Integrated Applications' && (
                <Typography variant="h4" gutterBottom>
                Integrated applications
            </Typography>
              )}
              {pointer=='Oracle Cloud Services' && (
                <Typography variant="h4" gutterBottom>
                Oracle cloud services
            </Typography>
              )}
              {pointer=='Jobs' && (
                <Typography variant="h4" gutterBottom>
                Jobs
            </Typography>
              )}
                <div className="div1">
                <input className="input1" type="text" placeholder="Search by user name, first name, last name or email address"/> 
                <CiSearch className="search" />
                </div>
                <TableContainer component={Paper}>
                <button>Create User</button>
                <button>More actions</button>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Username</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Last access</TableCell>
                                <TableCell>Created</TableCell>
                                <TableCell>Risk score</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map((user) => (
                                <TableRow key={user.username}>
                                    <TableCell>{user.username}</TableCell>
                                    <TableCell><span className="status-icon"></span>{user.status}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>{user.lastAccess}</TableCell>
                                    <TableCell>{user.created}</TableCell>
                                    <TableCell>{user.riskScore}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    );
}

export default App;
