import React from 'react'
import Header from './Components/header/Header'
import Reazultats from './Components/reaultati/Reazultats'
import Otabekmemor from './Components/otamemorproj/Otabekmemor'
import Mubosherqurilish from './Components/mubosherqurikish/Mubosherqurilish'
import Alazizmebel from './Components/alazizmebl/Alazizmebel'
import Abduraxmon from './Components/abduraxmon/Abduraxmon'
import Input from './Components/inputla/Input'
import Video from './Components/video/Video'

const App = () => {
  return (
    <div>
      <Header/>
      <Video/>
      <Reazultats/>
      <Otabekmemor/>
      <Mubosherqurilish/>
      <Alazizmebel/>
      <Abduraxmon/>
      <Input/>
    </div>
  )
}

export default App
