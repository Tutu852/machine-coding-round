/* eslint-disable react/display-name */
import "../components/Circle.css"
import { forwardRef } from "react"

const Circle = forwardRef((props,ref) =>  (
    <div className="circle" ref={ref} >
        Rajesh
    </div>
  ));


export default Circle 