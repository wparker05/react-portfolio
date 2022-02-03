
import Header from './components/Header';
import Footer from './components/Footer';

const main = {
    position: 'relative',
    minHeight: '100vh',
    backgroundColor: '#50808E'
}

const footer = {
    position: 'absolute',
    bottom: 0,
    width: '100%'
}
const App = () => {
    return (
        <div style={main}>
            <div>
                <Header />
            </div>
            <div style={footer}>
                <Footer />
            </div>
        </div>
    )
};

export default App;
