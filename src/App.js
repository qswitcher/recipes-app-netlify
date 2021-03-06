import React, { Component } from "react";
import RecipeList from "./RecipeList/RecipeList";
import Recipe from "./Recipe/Recipe";
import RecipesAppBar from "./RecipesAppBar/RecipesAppBar";
import EditRecipe from "./EditRecipe/EditRecipe";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
    app: {
        backgroundColor: "#e6e6e6"
    },
    siteContent: {
        backgroundColor: "white",
        // maxWidth: "1270px",
        // margin: "0 auto",
        padding: "10px 20px",
        minHeight: "100vh",

        [theme.breakpoints.up("sm")]: {
            padding: "10px 80px"
        }
    }
});

class App extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.app}>
                <Router>
                    <div>
                        <RecipesAppBar />
                        <div className={classes.siteContent}>
                            <Route exact path="/" component={RecipeList} />
                            <Route path="/recipes/:id" component={Recipe} />
                            <Route path="/edit-recipe" component={EditRecipe} />
                        </div>
                    </div>
                </Router>
            </div>
        );
    }
}

export default withStyles(styles)(App);
