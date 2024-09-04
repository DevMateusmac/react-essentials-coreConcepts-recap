import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import { CORE_CONCEPTS as Concepts, EXAMPLES as examples } from "./data.js";
import TabButton from "./components/TabButton.jsx";
import { useState } from "react";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  let tabContent = <p>Please select a topic</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{examples[selectedTopic].title}</h3>
        <p>{examples[selectedTopic].description}</p>
        <pre>
          <code>{examples[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  function handleSelect(selectedButton) {
    //selectedButton = 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {Concepts.map((concept) => (
              <CoreConcepts key={concept.title} {...concept} />
            ))}
            {/* 
              formas de renderizar a lista 
              
            {Concepts.map((concept) => (
              <CoreConcepts
                key={concept.title}
                src={concept.image}
                title={concept.title}
                description={concept.description}
              />
            ))} */}
            {/* 
              <CoreConcepts
                key={concept[0].title}
                src={concept[0].image}
                title={concept[0].title}
                description={concept[0].description}
              />
              <CoreConcepts
                {...concept[0]}
              />

             */}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabButton>
          </menu>
          {tabContent}
          {/* 
            3 maneiras de renderizar condicionalmente: a primeira abaixo usando o operador de curto circuito, a segunda é o ternário normal, e a terceira é a que está acima, usando a variável

            {!selectedTopic && <p>Please select a topic</p>}
            {selectedTopic && 
            <div id="tab-content">
              <h3>{examples[selectedTopic].title}</h3>
              <p>{examples[selectedTopic].description}</p>
              <pre>
                <code>{examples[selectedTopic].code}</code>
              </pre>
            </div>} 
            
            */}
        </section>
      </main>
    </div>
  );
}

export default App;
