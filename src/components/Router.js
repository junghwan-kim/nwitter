
import {HashRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import Home from "../routes/Home";
import Auth from "../routes/Auth";
import Navigation from "./Navigation";
import Profile from "../routes/Profile";


const AppRouter=({isLoggedIn, userObj})=>{    
    return (
        <Router>
            {isLoggedIn && <Navigation />}
            <Routes>
                {isLoggedIn ? (
                    <>
                        <Route exact path="/" element={<Home userObj={userObj} />}></Route>
                        <Route exact path="/profile" element={<Profile />}></Route>
                        <Route path="*" element={<Navigate replace to ="/" />}></Route>
                    </>
                ):(
                    <>
                        <Route exact path="/" element={<Auth />}></Route>
                        <Route path="*" element={<Navigate replace to ="/" />}></Route>
                    </>
                )}
                
            </Routes>
        </Router>
    )
};

export default AppRouter;