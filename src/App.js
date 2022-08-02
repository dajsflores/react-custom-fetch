import logo from './logo.svg';
import './App.css';
import useFetch from './hooks/CustomFetch/useFetch';

function App() {
  const { responseData } = useFetch('https://rickandmortyapi.com/api/character');
  console.log('data: ', responseData.data);
  console.log('loading: ', responseData.loading);
  console.log('error: ', responseData.error);
  console.log('response data: ', responseData);

  if (responseData.loading) return <h1>LOADING...</h1>
  if (responseData.error) console.log(responseData.error);
  return (
    <div className="App">
      <h1>Custom Hook</h1>
      { responseData.data?.map( (character) => <p key={character.id}>{character.name}</p> ) }
    </div>
  );
}

export default App;
