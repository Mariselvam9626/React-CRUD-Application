import { Routes,Route,} from "react-router-dom";
import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Missing from "./Missing";
import Nav from "./Nav";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import EditPost from "./EditPost";
import { DataProvider } from "./context/DataContext";

function App() {

  
  return(
    <div className="App">
      <DataProvider>
      {/* <nav>
        <ul>
          <li><Link to ="/">{<Home />}</Link></li>
          <li><Link to ="/about">{<About />}</Link></li>
          <li><Link to ="/postpage">{<PostPage />}</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
       
       {/* it is called nested route */}
{/*        
        <Route path='/postpage' element={<PostLayout />}>    
          <Route index element={<PostPage />} />
          <Route path='newpost' element={<NewPost />} />
          <Route path=":id" element={<Post />} />
          <Route path="newpage" element={<Post />} />
        </Route>
        <Route path='*' element={<Missing />} />
        
      </Routes> */} 
      
        <Header title="CRUD APPLICATION" />
        <Nav  />
        <Routes>
            <Route path="/" element ={
              <Home />} />
      
            <Route path="post"> 
              <Route index element ={<NewPost />} />
              <Route path=":id" element={<PostPage />}            
            /> 
            </Route>
            <Route path ="/edit/:id" element = {<EditPost />}
            />
        
            <Route path="about" element={<About />} />
            <Route path="*" element={<Missing />} />
        </Routes>
        <Footer /> 
      </DataProvider>

    </div>
  );
}

export default App;
