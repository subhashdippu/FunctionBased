import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  render() {
    return (
      // business entertainment general health science sports technology
      <div div >
        <BrowserRouter>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={10}
          // onLoaderFinished={() => setProgress(0)}
          />
          <Routes>
            <Route
              path='/' exact element={
                <News country="in" pageSize={5} category="general" key="general" />
              }
            />
            <Route
              path='/business' exact element={
                <News country="in" pageSize={5} category="business" key="business" />
              }
            />
            <Route
              path='/entertainment' exact element={
                <News country="in" pageSize={5} category="entertainment" key="entertainment" />
              }
            />
            <Route
              path='/health' exact element={
                <News country="in" pageSize={5} category="health" key="health" />
              }
            />
            <Route
              path='/science' exact element={
                <News country="in" pageSize={5} category="science" key="science" />
              }
            />
            <Route
              path='/sports' exact element={
                <News country="in" pageSize={5} category="sports" key="sports" />
              }
            />
            <Route
              path='/technology' exact element={
                <News country="in" pageSize={5} category="technology" key="technology" />
              }
            />
          </Routes>
        </BrowserRouter>
      </div >
    )
  }
}
