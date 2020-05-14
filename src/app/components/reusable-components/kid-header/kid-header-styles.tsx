import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
// import cityscape from '../../child-dashboard/kid-progress/icons/cityscape.svg;
export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
            height: '26vh',
            width: '100%',
            backgroundColor: '#6CEAE6',
            // backgroundImage: `url(${cityscape})`,
            backgroundRepeat: 'no-repeat',
            border: '7px solid #292929',
            // backgroundSize: '101% 103%',
            display: 'flex',

            justifyContent: 'center',
        },
        h2Styling: {
            'fontFamily': 'Bangers',
            'color': '#FFFFFF',
            'fontSize': '70px',
            'fontWeight': 'bold',
            '-webkit-text-stroke-width': '1px',
            '-webkit-text-stroke-color': '#000000',
        },
        headerMenuDiv: {
            display: 'flex',
            flexDirection: 'column',
            height: '26vh',
            justifyContent: 'flex-end',
            alignItems: 'center',
        },
        upperHeaderButtonDiv: {
            display: 'flex',
            height: '23vh',
            alignItems: 'flex-start',
            width: '10%',
        },
        upperTitleDiv: {
            display: 'flex',
            height: '25vh',
            justifyContent: 'flex-end',
            alignItems: 'flex-start',
            width: '60%',
            marginRight: '25%',
        },
        imgContainer: {
            'width': '100%',
            'overflow': 'hidden',
            '&& img': {
                width: '100%',
            },
        },
    })
);
