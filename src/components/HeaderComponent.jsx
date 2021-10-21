import React from 'react'
import {AppBar, Link, Toolbar,Container, Avatar,Hidden,IconButton} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'

const navigationLinks = [
    {name: "About",href:""},
    {name: "Projects",href:""},
    {name: "Resume",href:""},
    {name: "Contact Me",href:""},
]
const useStyles = makeStyles((theme)=> ({
    link:{
        marginRight:20,
    },
    avatar:{
        marginRight:"auto"
    }

}))
export default function HeaderComponent() {
    const styles = useStyles();
    return (
        <AppBar position="sticky" color="default">
            <Container maxWidth="ld">
            <Toolbar disableGutters>
                <Avatar className={styles.avatar}>E</Avatar>
                <Hidden xsDown>
                    {navigationLinks.map((item)=>(
                        <Link className={styles.link} 
                        color="textPrimary" 
                        variant="button" 
                        underline="none" 
                        href={item.href}> 
                        
                        {item.name}</Link>
                    ))}
                </Hidden>
                <Hidden smUp>
                    <IconButton>
                        <MenuIcon/>
                    </IconButton>
                </Hidden>
            </Toolbar>
            </Container>
        </AppBar>
    )
}
