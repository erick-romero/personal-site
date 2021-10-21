import React from 'react'
import {Grid,Link,IconButton} from '@material-ui/core'
import GitHub from '@material-ui/icons/GitHub'
import LinkedIn from '@material-ui/icons/LinkedIn'

const socialItems = [
    {icon: GitHub, url:"https://github.com/erick-romero"},
    {icon: LinkedIn, url:"https://www.linkedin.com/in/erick-romero-701701218/"}
]


export default function SocialsComponents({direction}) {
    return (
        <Grid container direction={ direction || "row"} spacing={2}>
            {socialItems.map((item) => (
            <Grid item>
                <Link href={item.url}>
                <IconButton>
                    <item.icon />
                </IconButton>
                </Link>
            </Grid>
            ))}
        </Grid>
    )
}

