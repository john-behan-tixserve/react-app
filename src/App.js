import './App.css';

const App = () => {
  const name = 'User';

  return (
    <div className="app">
      <header className="main-header">
        <h1>Hi there {name}</h1>
      </header>
      <main>
        <p>How are things with you {name}?</p>
      </main>
      <footer className="main-footer">
        &copy; 2021 - {name}
      </footer>
    </div>
  );
}

export default App;
