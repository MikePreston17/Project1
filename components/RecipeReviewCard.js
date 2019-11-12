import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LinkIcon from '@material-ui/icons/Link';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import ShareIcon from '@material-ui/icons/Share';
// import MoreVertIcon from '@material-ui/icons/MoreVert';

import RecipeLink from './RecipeLink';
import { Link } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

let loremRecipe = {
    url: "http://www.pbs.org/food/recipes/poached-eggs/",
    title: "Shrimp and Chorizo Paella",
    description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
    image: "/static/images/cards/paella.jpg",
    instructions: [
        "Method:",
        "Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.",
        "Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly                        browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken                        and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and                        pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.",
        "Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook        without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to        medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook        again without stirring, until mussels have opened and rice is just tender, 5 to 7        minutes more. (Discard any mussels that don’t open.)",
        "Set aside off of the heat to let rest for 10 minutes, and then serve."
    ],
    ingredients: [
        {
            text: "4 eggs",
            weight: 172
        },
        {
            text: "1 tablespoon vinegar (cheap stuff will do)",
            weight: 14.9
        },

    ]
}

export default function RecipeReviewCard({ recipe } = {}) {

    const {
        url, title, description,
        ingredients, instructions,
        source, date, image } = recipe;

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    console.log(recipe);

    const onExpand = () => {
        setExpanded(!expanded);
    };

    //  const preventDefault = event => event.preventDefault();

    return (
        <Card className={classes.card}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        {title.slice(0, 1)}
                    </Avatar>
                }
                // action={
                //     <IconButton aria-label="settings">
                //         <MoreVertIcon />
                //     </IconButton>
                // }
                title={title}
                subheader="September 14, 2016"
            />
            <CardMedia
                className={classes.media}
                image={image}
                title="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                {/* <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton> */}
                <IconButton>
                    <LinkIcon>
                        {/* TODO: link to given recipe url */}
                        {/* <Link href={url} onClick={preventDefault} /> */}
                    </LinkIcon>
                </IconButton>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={onExpand}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    {ingredients.map(line => <Typography paragraph>{line.text}</Typography>)}
                </CardContent>
                <CardContent>
                    {instructions.map(line => <Typography paragraph>{line}</Typography>)}
                </CardContent>
            </Collapse>
        </Card>
    );
}