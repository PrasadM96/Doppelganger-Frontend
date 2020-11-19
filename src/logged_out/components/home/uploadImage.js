import React, { useCallback, Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
    Grid,
    Typography,
    withWidth,
    withStyles, Card, Button, Box
} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/DeleteForever';
import calculateSpacing from "./calculateSpacing";
import DropImage from '../../../shared/components/Dropzone';
import ZoomImage from "../../../shared/components/ZoomImage";

const styles = theme => ({
    containerFix: {
        [theme.breakpoints.down("md")]: {
            paddingLeft: theme.spacing(6),
            paddingRight: theme.spacing(6)
        },
        [theme.breakpoints.down("sm")]: {
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4)
        },
        [theme.breakpoints.down("xs")]: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2)
        },
        overflow: "hidden",
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1)
    },
    card: {
        boxShadow: theme.shadows[4],
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("xs")]: {
            paddingTop: theme.spacing(3),
            paddingBottom: theme.spacing(3),
        },
        [theme.breakpoints.up("sm")]: {
            paddingTop: theme.spacing(5),
            paddingBottom: theme.spacing(5),
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4),
        },
        [theme.breakpoints.up("md")]: {
            paddingTop: theme.spacing(5.5),
            paddingBottom: theme.spacing(5.5),
            paddingLeft: theme.spacing(5),
            paddingRight: theme.spacing(5),
        },
        [theme.breakpoints.up("lg")]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
            paddingLeft: theme.spacing(6),
            paddingRight: theme.spacing(6),
        },
        [theme.breakpoints.down("lg")]: {
            width: "auto",
        },
    },
    cardWrapper: {
        [theme.breakpoints.down("xs")]: {
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: 340
        }
    },
    cardWrapperHighlighted: {
        [theme.breakpoints.down("xs")]: {
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: 360
        }
    }
});

class UploadImage extends Component {
    state = {
        files: null
    }


    onDrop = (acceptedFiles) => {
        acceptedFiles.forEach((file) => {
            const tmp = Object.assign(file, {
                preview: URL.createObjectURL(file)
            });

            this.setState({
                files: tmp
            });
            const reader = new FileReader()
            reader.onabort = () => console.log('file reading was aborted')
            reader.onerror = () => console.log('file reading has failed')
            reader.onload = () => {
                // Do whatever you want with the file contents
                const binaryStr = reader.result
                console.log(binaryStr)
            }
            reader.readAsArrayBuffer(file)
        })

    }

    deleteImage = () => {
        this.setState({
            files: null
        });
    }

    render() {
        const { width, classes } = this.props;

        return (
            <div className="lg-p-top" style={{ backgroundColor: "#FFFFFF" }}>
                <Typography variant="h3" align="center" className="lg-mg-bottom">
                Upload Your Image !
          </Typography>
                <div className={classNames("container-fluid", classes.containerFix)}>
                    <Card
                        className={classes.card}
                        data-aos-delay="200"
                        data-aos="zoom-in-up"

                    >
                        <Grid
                            container
                            spacing={calculateSpacing(width)}
                            className={classes.gridContainer}
                            direction='row'
                            justify='space-evenly'
                            spa
                        >
                            <Grid
                                item
                                xs={12}
                                sm={6}
                                lg={3}
                                className={classes.cardWrapper}

                            // data-aos="zoom-in-up"
                            >
                                <div style={{ width: '100%', textAlign: '-webkit-center' }}>
                                    {this.state.files === null ?
                                        <DropImage onDrop={this.onDrop} style={{ height: '200px', width: '200px' }} >
                                            Drag n drop an image, or click to an images
                      </DropImage>

                                        :

                                        <div style={{ position: 'relative', width: '200px', height: '200px', }}>
                                            <div onClick={this.deleteImage}> <DeleteIcon color='error' style={{ position: 'absolute', right: '5px', top: '5px' }} /></div>
                                            <ZoomImage
                                                src={this.state.files.preview}
                                                className={classes.image}
                                                style={{ width: '100%', height: '100%', objectFit: "cover" }}
                                                alt="uploaded a image"
                                            />
                                        </div>
                                    }
                                </div>

                            </Grid>
                            <Grid
                                item
                                className={classes.cardWrapperHighlighted}
                                xs={12}
                                sm={6}
                                lg={3}
                                // data-aos="zoom-in-up"
                                data-aos-delay="200"

                            >
                                <div style={{ textAlign: 'left' }} >

                                    <Typography variant='h5' color='primary' >Tips to cosider for best results</Typography>
                                    <br />
                                    <ul style={{ padding: '0% 10%', marginTop: '0%' }}>
                                    <li><Typography align='left' display='inline'> Photo with only face</Typography></li>
                                        <li><Typography align='left' display='inline'>No hair across your face or eyes</Typography></li>
                                        <li> <Typography align='left' display='inline'>Look directly at the camera </Typography></li>
                                        <li><Typography align='left' display='inline'>Tips to cosider</Typography>  </li>

                                    </ul>

                                </div>
                            </Grid>
                            <Grid
                                item
                                className={classes.cardWrapperHighlighted}
                                xs={12}
                                sm={6}
                                lg={3}
                                // data-aos="zoom-in-up"
                                data-aos-delay="200"
                                justify='center'

                            >
                                <Box style={{ textAlign: 'center' }}>

                                    <ZoomImage
                                        src={`${process.env.PUBLIC_URL}/images/logged_out/io.jpg`}
                                        className={classes.image}
                                        style={{ width: '100px', height: '100px' }}
                                        alt="header example"
                                    />
                                    &nbsp;&nbsp; &nbsp;&nbsp;

                                    <ZoomImage
                                        src={`${process.env.PUBLIC_URL}/images/logged_out/ib.jpg`}
                                        className={classes.image}
                                        style={{ width: '100px', height: '100px' }}
                                        alt="header example"
                                    />
                                    <br></br>
                                    <ZoomImage
                                        src={`${process.env.PUBLIC_URL}/images/logged_out/v2.png`}
                                        className={classes.image}
                                        style={{ width: '30px', height: '30px' }}
                                        alt="header example"
                                        align = "center"
                                    />

                                    &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;

                                    <ZoomImage
                                        src={`${process.env.PUBLIC_URL}/images/logged_out/x2.png`}
                                        className={classes.image}
                                        style={{ width: '30px', height: '30px' }}
                                        alt="header example"
                                        align="center"
                                    />

                                </Box>
                            </Grid>
                        </Grid>
                        <br></br>
                        <div style={{ textAlign: 'center' }}>
                            <Button
                                style={{ width: '250px' }}
                                variant="contained"
                                color="secondary"
                                // onClick={ }
                                className={classes.extraLargeButton}
                                classes={{ label: classes.extraLargeButtonLabel }}
                            >
                                Proceed
                            </Button>
                        </div>
                    </Card>
                </div>
            </div >
        );
    }


}


UploadImage.propTypes = {
    width: PropTypes.string.isRequired
};

export default withStyles(styles, { withTheme: true })(
    withWidth()(UploadImage)
);
