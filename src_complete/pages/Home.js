import React, { useState, useEffect, useCallback } from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  RefreshControl,
  Platform,
} from 'react-native';
import Logo from '../components/Logo';
import Loader from '../components/Loader';
import Card from '../components/Card';
import { SearchBar, Divider } from 'react-native-elements';
import { filterWithQuerySearch } from '../helpers';
import Icon from 'react-native-vector-icons/Feather';

import coffeesAPI from '../../assets/coffees.json';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    paddingTop: 40,
    marginHorizontal: 10,
  },
  contentContainer: {
    alignItems: 'center',
    paddingBottom: 100,
  },
  title: {
    marginTop: 10,
    fontSize: 18,
    textAlign: 'center',
  },
  total: {
    textAlign: 'center',
    marginBottom: 20,
  },
  searchContainer: {
    backgroundColor: '#f2f2f2',
  },
  divider: {
    marginVertical: 5,
  },
});

const renderCoffeeCard = ({ item, index }) => <Card {...item} />;

const loader = <Loader />;
const emptyList = <Text style={styles.total}>Nenhum café encontrado :/</Text>;
const searchIcon = <Icon name="search" size={18} color="#666" />;

const header = (total, searchText, setSeatchText) => (
  <>
    <Logo />
    <Divider style={styles.divider} />
    <Text style={styles.title}>Procurando cafés tops?</Text>
    <SearchBar
      containerStyle={styles.searchContainer}
      inputStyle={{ color: '#333' }}
      placeholderTextColor="#999"
      platform={Platform.OS}
      onChangeText={(value) => setSeatchText(value.trim())}
      searchIcon={searchIcon}
      cancelIcon={searchIcon}
      clearIcon={
        <Icon
          name="x-circle"
          size={18}
          color="#666"
          onPress={() => setSeatchText('')}
        />
      }
      cancelButtonTitle="Cancelar"
      placeholder="Busce por um tipo de café"
      value={searchText}
    />
    {total > 0 && <Text style={styles.total}>{`${total} cafés`}</Text>}
  </>
);

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [searchText, setSeatchText] = useState('');

  let { coffees } = { ...coffeesAPI };

  if (searchText !== '') {
    coffees = filterWithQuerySearch(searchText, coffees);
  }

  const total = coffees.length;

  // simula uma requisição na API, toda vez que o searchText mudar
  useEffect(() => {
    setLoading(true);
    let timer = setTimeout(() => setLoading(false), 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  const refresh = () => {
    setSeatchText('');
  };

  return (
    <FlatList
      keyboardDismissMode="on-drag"
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={header(total, searchText, setSeatchText)}
      ListEmptyComponent={!loading && emptyList}
      ListFooterComponent={loading && loader}
      numColumns={2}
      data={coffees}
      renderItem={renderCoffeeCard}
      refreshControl={
        <RefreshControl refreshing={false} onRefresh={() => refresh()} />
      }
    />
  );
};

export default Home;
