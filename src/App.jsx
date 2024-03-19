
import './App.css'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Cards from './components/Cards/Cards'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

function App() {

  return (
    <>
      <Header></Header>

      <section className='px-3 bg-white my-6 md:my-20 text-[#150B2B]'>
        <div className='text-center text-[#150B2B] '>
          <h2 className='text-2xl md:text-5xl font-semibold'>Our Recipes</h2>
          <p className='my-4 md:my-6 mx-auto w-full text-justify md:text-center md:w-[700px]'>Indulge in a symphony of flavors with our tantalizing array of curry dishes, meticulously crafted to perfection. From traditional Indian curries to Thai-inspired delights, each bite will transport you to culinary paradise. </p>
        </div>
        <div className='mt-5 md:mt-12 flex flex-col md:flex-row gap-0 md:justify-between mx-auto'>
          <Cards></Cards>
          <Bookmarks></Bookmarks>
        </div>
      </section>

      <Footer></Footer>
    </>
  )
}

export default App
