import React from 'react';
import {Link, useMatch} from "react-router-dom";
import Button from "@mui/material/Button";

const MegaLink = ({to, children}) => {
	const match = useMatch(to);

	return (<Button className={match ? 'active' : ''}>
		<Link to={to} className={match ? 'active' : ''}>
			{children}
		</Link>
	</Button>);
};

export default MegaLink;