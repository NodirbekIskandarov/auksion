import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Card from './pages/Card'
import About from './pages/About'
import News from './pages/news/News'
import Contact from './pages/Contact'
import Interactive from './pages/interactive/Interactive'
import RegisterSign from './pages/RegisterSign'
import RegisterSignIn from './pages/RegisterSignIn'
import Cabinet from './pages/cabinet/Cabinet'
import Register from './pages/Register'
import { Provider } from 'react-redux'
import { persistor, store } from './store/store'
import Login from './pages/Login'
import NewsDetail from './pages/news/NewsDetail'
import PrivateRoutes from './components/PrivateRoutes'
import WebSocketPage from './pages/socket/WebSocketPage'
import Auction from './pages/auction/Auction'
import { PersistGate } from 'redux-persist/integration/react'

function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <HashRouter>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/card" element={<Card />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/news" element={<News />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/interactive" element={<Interactive />} />
                        <Route path="/registration" element={<Register />} />
                        <Route
                            path="/registration-sign"
                            element={<RegisterSign />}
                        />
                        <Route
                            path="/registration-sign-in"
                            element={<RegisterSignIn />}
                        />

                        <Route element={<PrivateRoutes />}>
                            <Route path="/cabinet" element={<Cabinet />} />
                        </Route>

                        <Route path="/login" element={<Login />} />
                        <Route path="/news-detail" element={<NewsDetail />} />

                        <Route path="/socket" element={<WebSocketPage />} />

                        <Route element={<PrivateRoutes />}>
                            <Route path="/auction" element={<Auction />} />
                        </Route>
                    </Routes>
                    <Footer />
                </HashRouter>
            </PersistGate>
        </Provider>
    )
}

export default App
