import React from 'react'
import { usePageTitleStyles } from './PageTitle.styles'


interface props {
    title: string;
}
export function PageTitle({title}: props) {
        
    const { classes } = usePageTitleStyles();
    return (
        <div className={classes.h1}>
            <h1>{title}</h1>
        </div>
        )
    }
    