import React from 'react'
import FeaturedInfo from '../../components/FeaturedInfo/FeaturedInfo'
import Linechart from  '../../components/Charts/Linechart'
import Composed from '../../components/Charts/Composed'
import Radial from '../../components/Charts/Radial'
import Barchart from '../../components/Charts/Barchart'
import './Home.css'
import Salesdata from '../../Data'
import WidgetSmall from '../../components/WidgetSmall/WidgetSmall'
import WidgetLarge from '../../components/WidgetLarge/WidgetLarge'

const Home = () => {
  return (
    <div className='Home'>
        <FeaturedInfo/>
        <div className='graph_container'>
        <Linechart data={Salesdata} dataKey1 ="Revenue" dataKey2="Sales" title ="Revenue & Sales Analysis" grid={true} ratio={2/1}/>
        <Composed/>
        </div>
        <div className='graph_container'>
          <Radial/>
        <Barchart/>
        </div>
        <div className="homeWidgets">
          <WidgetSmall/>
          <WidgetLarge/>
        </div>
    </div>
  )
}

export default Home