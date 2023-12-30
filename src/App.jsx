import "./App.css";
import { gql, useQuery } from "@apollo/client";
const query = gql`
  query getAllTodos {
    getTodos {
      id
      title
      user {
        name
        email
      }
    }
  }
`;
function App() {
  const { data, loading } = useQuery(query);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return <div>{JSON.stringify(data)}</div>;
}

export default App;
