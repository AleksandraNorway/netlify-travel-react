import '@styles/style.css'
import Card from '@components/Card'
import data from '@components/data'
import Navbar from '@components/Navbar'

export default function App() {
  const cards = data.map(item => {
      return (
          <Card
              key={item.id}
              {...item}
              
          />
      )
  })        
  
  return (
      <div>
          <Navbar />
    
          <section >
              {cards}
          </section>
      </div>
  )
}