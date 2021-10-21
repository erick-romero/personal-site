import { Container, Grid, Paper, Typography,Button,Box,Hidden,Zoom } from '@material-ui/core'
import React,{useState, useEffect} from 'react'
import { makeStyles, StylesContext,zIndex } from '@material-ui/styles'
import SocialsComponents from './SocialsComponents'


const useStyles = makeStyles((theme) => ({
    section:{
        height:"90vh",
        backgroundImage:"url(https://images.unsplash.com/photo-1516870463970-23a76d9b1da0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1033&q=80)",
        backgroundSize:"cover",
        backgroundPosition:"center"
    },
    content:{
        height:"100%",
        zIndex:100,
        position:"relative"
    },
    container:{
        height:"100%"
    },
    overlay:{
        backgroundColor:"rgba(0,0,0,0.5)",
        height:"100%",
        width:"100%",
        position:"absolute",
        zIndex: 2
    },
    heroImage:{
        height:"100%",
        width:"100%",
        position:"absolute",
        zIndex: 0
    }

}))

export default function HeroComponent() {
    const styles = useStyles()
    const [shouldShow, setShouldShow] = useState(false)
    useEffect(()=> setShouldShow(true))
    return (
        <Paper className={styles.section}>
            <div className={styles.overlay}> </div>
            <Container className={styles.container} maxWidth="md">
                <Grid container className={styles.content} alignItems="center" justifyContent="space-between">
                    <Zoom in={shouldShow}>
                    <Grid item sm={8}>
                         <Typography component="h1" variant="h3">Hi, my name is Erick Romero. I am a software engineer.</Typography> 
                         <Typography variant="h5">I build web applications and data science solutions.</Typography>
                         <Box my={3}>
                         <Button href="mailto:erick.romeroar@gmail.com"variant="outlined" color="secondary"> Contact me! </Button>
                         </Box>
                    </Grid>
                    </Zoom>
                    <Hidden xsDown>
                    <Grid item> <SocialsComponents direction="column"/> </Grid>
                    </Hidden>
                </Grid>   
            </Container>      
        </Paper>
    )
}
