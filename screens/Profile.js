//@ts-check

import React, { useState, useEffect } from 'react';
//import PropTypes from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';

import ContactThumbnail from '../components/ContactThumbnail';
import DetailListItem from '../components/DetailListItem';
import { fetchRandomContact } from '../utils/api';
import colors from '../utils/colors';

const Profile = () => {
	// const [loading, setLoading] = useState(true);
	const [contact, setContact] = useState({
		avatar: '',
		name: '',
		email: '',
		phone: '',
		cell: '',
	});

	useEffect(() => {
		(async () => {
			const randomContact = await fetchRandomContact();
			setContact(randomContact);
			// setLoading(false);
		})();
	}, []);

	const { avatar, name, email, phone, cell } = contact;

	return (
		<View style={styles.container}>
			<View style={styles.container}>
				<View style={styles.avatarSection}>
					<ContactThumbnail
						avatar={avatar}
						name={name}
						phone={phone}
						onPress={() => console.log('Profile press')}
					/>
				</View>
				<View style={styles.detailsSection}>
					<DetailListItem
						icon="mail"
						title="Email"
						subtitle={email}
					/>
					<DetailListItem
						icon="phone"
						title="Work"
						subtitle={phone}
					/>
					<DetailListItem
						icon="smartphone"
						title="Personal"
						subtitle={cell}
					/>
				</View>
			</View>
		</View>
	);
};

Profile.displayName = 'Profile';

export default Profile;

// examples styles...modify or remove as needed
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	avatarSection: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: colors.rebeccaPurple,
	},
	detailsSection: {
		flex: 1,
		backgroundColor: 'white',
	},
});
