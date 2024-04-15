
import Content from './Content';
import FileUpload from './components/FileUpload';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import ShowData from './components/ShowData';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Content />} />
            <Route path='/gallery' element={<ShowData />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
