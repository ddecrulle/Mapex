import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import Divider from '@material-ui/core/Divider';
import ButtonIcon from '../icon-button/component';
import CloseIcon from '@material-ui/icons/Close';
import D from 'dictionary/app/order-filter';
import Order from './order';
import Survey from './survey';

// TODO get the labels of keys into db with properties

const useStyles = makeStyles((theme) => ({
	paper: {
		borderRadius: 10,
		backgroundColor: theme.palette.background.paper,
		padding: 0,
	},
	title: {
		color: theme.palette.text.primary,
		fontSize: 18,
	},
	list: {
		padding: 0,
	},
	top: {
		padding: 0,
		display: 'flex',
	},
	itemTitle: {
		flexBasis: 'calc(100% / 3)',
		textAlign: 'center',
		justifyContent: 'center',
	},
	buttonClose: {
		flexBasis: 'calc(100% / 3)',
		justifyContent: 'left',
	},
	item: {
		justifyContent: 'center',
	},
}));

const OrderFilter = (campaigns) => {
	const classes = useStyles();

	// const [loading, setLoading] = useState(true);
	// const [campaign, setCampaign] = useState(['test','test']);

	// useEffect(() => {
	// 	getValuesOfKey(DicDB.surveyUnitDB, 'campaign').then((camp) => {
	// 		setLoading(false);
	// 		setCampaign(camp);
	// 	});
	// }, []);

	return (
		<Paper className={classes.paper}>
			<List className={classes.list}>
				<ListItem className={classes.top}>
					<ButtonIcon className={classes.buttonClose} icon={<CloseIcon />} />
					<Typography className={classes.itemTitle}>{D.title}</Typography>
				</ListItem>
				<Divider variant="fullWidth" />
				<ListItem>
					<Order />
				</ListItem>
				<Divider variant="middle" />
				<ListItem>
					<Survey campaigns={campaigns}/>
					<Divider />
				</ListItem>
			</List>
		</Paper>
	);
};

OrderFilter.propTypes = {
	/**
	 * Content of the BottomBar
	 */
	campaigns: PropTypes.array,
};


export default OrderFilter;