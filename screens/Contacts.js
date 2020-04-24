//@ts-check

import React, { useState, useEffect } from 'react';
import {
	StyleSheet,
	Text,
	View,
	FlatList,
	ActivityIndicator,
} from 'react-native';

import ContactListItem from '../components/ContactListItem';
import { fetchContacts } from '../utils/api';

const keyExtractor = (login) => login.sha256;

const Contacts = ({ navigation }) => {
	const [contacts, setContacts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		(async () => {
			try {
				setContacts(await fetchContacts());
				setLoading(false);
			} catch (error) {
				setLoading(false);
				setError(true);
			}
		})();
	}, []);

	const renderContact = (item) => {
		const { name, avatar, phone } = item.item;

		return (
			<ContactListItem
				name={name}
				avatar={avatar}
				phone={phone}
				onPress={() => navigation.navigate('Profile')}
			/>
		);
	};

	return (
		<View>
			{loading && <ActivityIndicator size="large" />}
			{error && <Text>Error ...</Text>}
			{!loading && !error && (
				<FlatList
					data={contacts}
					keyExtractor={keyExtractor}
					renderItem={renderContact}
				/>
			)}
		</View>
	);
};

Contacts.displayName = 'Contacts';

export default Contacts;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		justifyContent: 'center',
	},
});
