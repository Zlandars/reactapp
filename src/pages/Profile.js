import React, {useEffect} from 'react';
import {Token} from "../components/Token";

const Profile = () => {
	useEffect(()=>{
		document.title='ChangeProfile';
	},[])
	return (
		<div style={{display: 'flex', flexDirection: 'column'}}>
			This is Page Profile
			<Token></Token>
		</div>
	);
};

export default Profile;