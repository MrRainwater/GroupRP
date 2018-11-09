import * as React from 'react'
import Drawer from '@material-ui/core/Drawer'
import Person from '@material-ui/icons/Person'
import Grid from '@material-ui/core/Grid'
import { withStyles, createStyles, WithStyles } from '@material-ui/core';

const drawerWidth = 400

const styles = createStyles({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth
    },
    container: {
        paddingTop: 20
    },
    userIcon: {
        width: 75,
        height: 75,
        color: 'white',
    },
    userIconCell: {
        borderRadius: '100%',
        background: '#379096',
        padding: 5
    }
})

interface Props extends WithStyles<typeof styles> {}
interface State {}

class Main extends React.Component<Props, State>{
    render() {
        const { classes } = this.props

        return (
            <React.Fragment>
                <Drawer className={classes.drawer} classes={{paper: classes.drawerPaper}} variant='permanent'>
                    <Grid container alignItems="center" direction="column" className={classes.container}>
                        <Grid className={classes.userIconCell} item>
                            <Person className={classes.userIcon} />
                        </Grid>
                    </Grid>
                </Drawer>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(Main)