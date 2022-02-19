import React from 'react'
import Posts from './components/Posts.js'
import newHeader from './components/newHeader.js'
import Header from './components/Header.js'
import Email from './components/Email.js'
import Home from './components/Home.js'
import Model from './components/Model.js'
import PDF from './components/PDF.js'
import CalcTool from './components/CalcTool.js'
import NotFoundPage from './components/NotFoundPage.js'
import { Switch, BrowserRouter, Link, Route } from 'react-router-dom'

export default function App() {
  return (
    < div className="app" >
      <h2>Play area App </h2>
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/header">Header</Link>
        <Link to="/header2">Header2</Link>
        <Link to="/emails">Email</Link>
        <Link to="/model">Modal demo</Link>
        <Link to="/pdf">PDF</Link>
        <Link to="/calcTool">calcTool</Link>
          {/* <Email /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/posts" component={Posts} />
          <Route path="/header2" component={Header} />
          <Route path="/model" component={Model} />
          <Route exact path="/header" component={newHeader} />
          <Route exact path="/emails" component={Email} />
          <Route exact path="/pdf" component={PDF} />
          <Route exact path="/calcTool" component={CalcTool} />
          <Route path="*" component={NotFoundPage} />
        </Switch>

      </BrowserRouter>
    </div >
  )

}