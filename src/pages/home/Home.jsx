
import Banner from './Banner'
import TopSellers from './TopSellers'
import '../../App.css'
import Recommened from './Recommended'
import News from './News'

const Home = () => {
  return (
    <>
        <Banner/>
        <TopSellers/>
        <Recommened/>
        <News/>
    </>
  )
}

export default Home