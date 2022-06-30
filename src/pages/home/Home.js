import MainPage from '../../components/jsx/body/mainPage';
import ItemListContainer from '../../components/jsx/body/ItemListContainer';
import NavBar from '../../components/jsx/navbar/navbar';

function Home() {

    return(
            <div>
                <NavBar />
                <MainPage />
                
                <h1>Esto es el home bitches.</h1>
        <ItemListContainer />

                

            </div>
    )
}
export default Home;