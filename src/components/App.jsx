import "../styles/index.scss";
import Persons from './Persons';

const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>Oh Hai, React</h1>
        </section>
      </main>

      <Persons />
    </>
  )
}

export default App;
