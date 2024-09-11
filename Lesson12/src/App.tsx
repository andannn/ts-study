import { ReactNode, useState } from "react"
import Counter from "./components/Counter"
import Heading from "./components/Heading"
import { Section } from "./components/Section"
import List from "./components/List"

function App() {
  const [count, setCount] = useState<number>(1)
  return (
    <>
      <Heading title={"Title"}></Heading>
      <Section title={'Rep'} >Some Children</Section>
      <Counter setCount={setCount}> Count is {count}</Counter>
      <List
        items={
          ['A', 'B', 'C']
        }
        createItem={
          function (item: String): ReactNode {
            return <span>{item}</span>
          }
        } />
    </>
  )
}

export default App
