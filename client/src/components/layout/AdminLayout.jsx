import { Box, Drawer, Grid, IconButton, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { grayColor } from '../../constants/color'
import { Close as CloseIcon, Dashboard as DashboardIcon, Groups as GroupsIcon, ManageAccounts as ManageAccountsIcon, Menu as MenuIcon, Message as MessageIcon } from "@mui/icons-material"
import { useLocation } from 'react-router-dom'
import { Link } from '../styles/StyledComponents'

const adminTabs = [
    {
        name: "Dashboard",
        path: "/admin/dashboard",
        icon: <DashboardIcon />
    },
    {
        name: "Users",
        path: "/admin/users-management",
        icon: <ManageAccountsIcon />
    },
    {
        name: "Chat",
        path: "/admin/chats-management",
        icon: <GroupsIcon />
    },
    {
        name: "Messages",
        path: "/admin/messages",
        icon: <MessageIcon />
    },
]

const Sidebar = ({ w = "100%" }) => {

    const location = useLocation();

    return <Stack width={w} direction="column" p="3rem" spacing="3rem">
        <Typography variant="h5" textTransform="uppercase">Chattu</Typography>
        <Stack spacing="1rem">
            {adminTabs.map((tab) => (
                <Link direction="row" alignItems="center" key={tab.path} to={tab.path}>
                    <Stack direction="row" alignItems="center" spacing={"1rem"}>
                        {tab.icon}
                    </Stack>
                    <Typography>{tab.name}</Typography>
                </Link>
            ))}
        </Stack>
    </Stack>
}

const AdminLayout = ({ children }) => {

    const [isMobile, setIsMobile] = useState(false)

    const handleMobile = () => setIsMobile(prev => !prev);

    const handleClose = () => setIsMobile(false);

    return (
        <Grid container minHeight="100vh">
            <Box sx={{
                display: { xs: "block", md: "none" },
                position: "fixed",
                right: "1rem",
                top: "1rem"
            }}>
                <IconButton onClick={handleMobile}>
                    {isMobile ? <CloseIcon /> : <MenuIcon />}
                </IconButton>
            </Box>
            <Grid item md={4} lg={3} sx={{ display: { xs: "none", md: "block" } }}>
                <Sidebar />
            </Grid>
            <Grid item xs={12} md={8} lg={9} sx={{ bgcolor: grayColor }}>
                {children}
            </Grid>

            <Drawer open={isMobile} onClose={handleClose}>
                <Sidebar w="50vw" />
            </Drawer>

        </Grid>
    )
}

export default AdminLayout