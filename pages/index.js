import Head from 'next/head'
import PacientItem from '../components/PacientItem';
import { Container } from './styles';

export default function Home() {

  return (
    <Container>
      <Head>
        <h1>Pharma Inc</h1>
      </Head>

      <main> 
         
      <div>
      
      <PacientItem />

      </div>
        
      </main>

      <footer>
       
      </footer>
    </Container>
  )
}
