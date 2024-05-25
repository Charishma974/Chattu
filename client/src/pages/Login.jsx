import React, { useState } from 'react'
import { Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography } from "@mui/material";
import { CameraAlt as CameraAltIcon } from "@mui/icons-material"
import { VisuallyHiddenInput } from "../components/styles/StyledComponents.jsx";
import { useFileHandler, useInputValidation } from "6pp";
import { usernameValidator } from '../utils/validators.js';

const Login = () => {

    const [isLogin, setIsLogin] = useState(true);

    const toggleLogin = () => setIsLogin(prev => !prev);

    const name = useInputValidation("");
    const bio = useInputValidation("");
    const username = useInputValidation("", usernameValidator);
    const password = useInputValidation();

    const avatar = useFileHandler("single");

    const handleLogin = (e)=>{
        e.preventDefault();
    }

    const handleSignUp = (e)=>{
        e.preventDefault();
    }

    return (
        <div style={{
            backgroundImage: "linear-gradient(rgb(255 255 209), rgb(249 159 159))"
        }}>
        <Container component={"main"} maxWidth="xs" sx={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Paper elevation={3}
                sx={{
                    padding: 4,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                {isLogin ? <>
                    <Typography variant="h5">Login</Typography>
                    <form onSubmit={handleLogin} style={{ width: "100%", marginTop: "1rem" }}>
                        <TextField value={username.value} onChange={username.changeHandler} required fullWidth label="Username" margin="normal" variant="outlined" />
                        <TextField value={password.value} onChange={password.changeHandler} required fullWidth label="Password" type="password" margin="normal" variant="outlined" />
                        <Button type="submit" variant="contained" color="primary" sx={{ marginTop: "1rem" }} fullWidth>Login</Button>
                        <Typography textAlign="center" m={"1rem"}>OR</Typography>
                        <Button variant="text" onClick={toggleLogin} fullWidth>Sign Up Instead</Button>
                    </form>
                </> : <>
                    <Typography variant="h5">Sign Up</Typography>
                    <form onSubmit={handleSignUp} style={{ width: "100%", marginTop: "1rem" }}>
                        <Stack position="relative" width="10rem" margin="auto">
                            <Avatar sx={{
                                width: "10rem",
                                height: "10rem",
                                objectFit: "contain"
                            }} src={avatar.preview} />
                            <IconButton sx={{
                                position: "absolute",
                                bottom: 0,
                                right: 0,
                                color: "white",
                                bgcolor: "rgba(0,0,0,0.5)",
                                ":hover": {
                                    bgcolor: "rgba(0,0,0,0.7)",
                                }
                            }} component="label">
                                <CameraAltIcon />
                                <VisuallyHiddenInput type="file" onChange={avatar.changeHandler} />
                            </IconButton>
                        </Stack>
                        {avatar.error && <Typography m={"1rem auto"} width="fit-content" display="block" variant="caption" color="error">{avatar.error}</Typography>}
                        <TextField value={name.value} onChange={name.changeHandler} required fullWidth label="Name" margin="normal" variant="outlined" />
                        <TextField value={bio.value} onChange={bio.changeHandler} required fullWidth label="Bio" margin="normal" variant="outlined" />
                        <TextField value={username.value} onChange={username.changeHandler} required fullWidth label="Username" margin="normal" variant="outlined" />
                        {username.error && <Typography variant="caption" color="error">{username.error}</Typography>}
                        <TextField value={password.value} onChange={password.changeHandler} required fullWidth label="Password" type="password" margin="normal" variant="outlined" />
                        <Button type="submit" variant="contained" color="primary" sx={{ marginTop: "1rem" }} fullWidth>Sign Up</Button>
                        <Typography textAlign="center" m={"1rem"}>OR</Typography>
                        <Button variant="text" onClick={toggleLogin} fullWidth>Login Instead</Button>
                    </form>
                </>}
            </Paper>
        </Container>
        </div>
    )
}

export default Login