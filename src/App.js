import logo from './logo.svg';
import './App.css';
import useFetch from './hooks/CustomFetch/useFetch';

function App() {
  const { data, loading, error } = useFetch('https://rickandmortyapi.com/api/character');
  console.log('data: ', data);
  console.log('loading: ', loading);
  console.log('error: ', error);

  if (loading) return <h1>LOADING...</h1>
  if (error) console.log(error);
  return (
    <div className="App">
      <h1>Custom Hook</h1>
      { data?.map( (character) => <p key={character.id}>{character.name}</p> ) }
    </div>
  );
}

export default App;
