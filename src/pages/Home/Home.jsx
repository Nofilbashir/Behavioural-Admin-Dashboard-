import React from 'react'
import FeaturedInfo from '../../components/FeaturedInfo/FeaturedInfo'
import Linechart from  '../../components/Charts/Linechart'
import Composed from '../../components/Charts/Composed'
import Radial from '../../components/Charts/Radial'
import Barchart from '../../components/Charts/Barchart'
import './Home.css'
import Salesdata from '../../Data';
import Salesdata2 from '../../Data2';
import WidgetSmall from '../../components/WidgetSmall/WidgetSmall'
import WidgetLarge from '../../components/WidgetLarge/WidgetLarge';
import { useStateContext } from '../../components/contexts/ContextProvider';
import {BookingData} from '../../Data';
import {BookingData2} from '../../Data2';
import { radialdata } from '../../Data';
import { radialdata2 } from '../../Data2';
import {BookingHoursData} from '../../Data';
import {BookingHoursData2} from '../../Data2';



const Home = () => {

  const {chartdata}=useStateContext();

  return (
    <div className='Home'>
        <FeaturedInfo/>
        <div className='graph_container'>
          <div className='graph__Container__eachGraph'>
            <Linechart data={chartdata ?Salesdata :Salesdata2} dataKey1 ="Revenue" dataKey2="Sales" title ="Revenue & Sales Analysis" grid={true} ratio={2/1}/>
          </div>
          <div className='graph__Container__eachGraph'>
            <Composed data={chartdata ?BookingData :BookingData2}/>
          </div>
        </div>
        <div className='graph_container'>
          <div className='graph__Container__eachGraph'>
            <Radial data={chartdata ?radialdata :radialdata2}/>
          </div>
          <div className='graph__Container__eachGraph'>
            <Barchart  data={chartdata ?BookingHoursData :BookingHoursData2}/>
          </div>
        </div>
        <div className="homeWidgets">
          <WidgetSmall/>
          <WidgetLarge/>
        </div>
    </div>
  )
}

export default Home