import React from 'react'
import FeaturedInfo from '../../components/FeaturedInfo/FeaturedInfo'
import Linechart from  '../../components/Charts/Linechart'
import './Home.css'
import Salesdata from '../../Data'
import WidgetSmall from '../../components/WidgetSmall/WidgetSmall'
import WidgetLarge from '../../components/WidgetLarge/WidgetLarge'

const Home = () => {
  return (
    <div className='Home'>
        <FeaturedInfo/>
        <Linechart data={Salesdata} dataKey1 ="Revenue" dataKey2="Sales" title ="Sales Analytics" grid={true}/>
        <div className="homeWidgets">
          <WidgetSmall/>
          <WidgetLarge/>
        </div>
    </div>
  )
}

export default Home