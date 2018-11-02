import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import { withStyles } from "@material-ui/core/styles";

import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const styles = {
    media: {
        height: "300px",
        width: "300px"
    },
    card: {
        maxWidth: "272px",
        margin: "10px 14px"
    }
};

class RecipeListItem extends Component {
    render() {
        const { classes, title, description } = this.props;
        return (
            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image="http://placekitten.com/g/300/300"
                    title={title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography component="p">{description}</Typography>
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles)(RecipeListItem);
