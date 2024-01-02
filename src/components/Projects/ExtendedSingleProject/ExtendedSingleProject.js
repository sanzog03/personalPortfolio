import React from 'react';

import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';

import './ExtendedSingleProject.css';

import placeholder from '../../../assets/png/placeholder.png';


/**
 * Description
 * @param {any} {id
 * @param {string} name
 * @param {arr[string]} desc
 * @param {arr[string]} tags
 * @param {arr[string]} code
 * @param {arr[string]} demo
 * @param {string} image
 * @param {any} theme}
 * @returns {any}
 */
function ExtendedSingleProject({ id, name, desc, tags, codes, demos, moreDesc, image }) {
    return (
        <>
            <Card style={{width: "100%", marginBottom: "50px", height: "450px"}}>
                <Grid 
                    container 
                    spacing={4} 
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Grid item md={4} xs={12}
                        sx={{height: "100vh"}}
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                    >
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Typography variant="h4" component="h4">{name}</Typography>
                    </Box>
                    <Box sx={{width: "100%", height: "300px"}}>
                            <CardMedia
                            image={image}
                            style={{width:"100%", height: "100%"}}/>
                    </Box>
                    </Grid>
                    <Grid item md={8} xs={12}>
                        <CardContent>
                            <Typography variant="h6" component="h6">Description: </Typography>
                            <Typography paragraph>
                                {moreDesc ? desc +  " Details: " : desc}
                                {moreDesc && (
                                    <Box>
                                        <ul>
                                        {moreDesc.map((more, id) => <li>{more}</li>)}
                                        </ul>
                                    </Box>
                                )}    
                            </Typography>
                            
                            <Typography paragraph>
                                <Typography variant="h6" component="h6">Tools:</Typography>
                                <Box>
                                    <ul>
                                    {tags.map((tag, id) => <li>{tag}</li>)}
                                    </ul>
                                </Box>
                            </Typography>

                            <Typography paragraph>
                                <Typography variant="h6" component="h6">Demo:</Typography>
                                <Box>
                                    <ul>
                                    {demos.map((demo, id) => <li><a href={demo}>{demo}</a></li>)}
                                    </ul>
                                </Box>
                            </Typography>

                            <Typography paragraph>
                                <Typography variant="h6" component="h6">Code:</Typography>
                                <Box>
                                    <ul>
                                    {codes.map((code, id) => <li><a href={code}>{code}</a></li>)}
                                    </ul>
                                </Box>
                            </Typography>

                        </CardContent>
                    </Grid>
                </Grid>
            </Card>
        </>        
    );
}

export default ExtendedSingleProject;
