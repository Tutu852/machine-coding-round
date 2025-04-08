import { useEffect, useState } from "react";
import { tenureData } from "./utils/constant";

const EmiCalculator = () => {
  const [cost,setCost] = useState(0);
  const [interest,setInterest] = useState(0);
  const [fee,setFee] = useState(0);
  const [downPayment,setDownPayment] = useState(0);
  const [tenure,setTenure] = useState(0);
  const [emi,setEmi] = useState(0);
  
  const calculateEMI = (downPayment) =>{
    // EMI amount = [p * R (1 +R)^N]/[(1+R)^ N-1]

    if(!cost) return;
    //this is my p
    const loanAmt = cost -downPayment;
    // this is my R 
    const rateOfInterest = interest /100;
    const  numberOfYears = tenure /12;

    const EMI = (loanAmt * rateOfInterest * (1 + rateOfInterest) ** numberOfYears )/((1+rateOfInterest ** numberOfYears -1));

    //this tofixed is use becz i dont need any decimal so 
    return Number(EMI /12).toFixed(0);
  }

  const calculateDp = (emi) =>{
    if(!cost)  return;

    const downPaymentPercentage = 100 - (emi/calculateEMI(0)) * 100;
    return Number((downPaymentPercentage /100 * cost)).toFixed(0);
  }

  useEffect(()=>{
    if(!cost > 0){
      setEmi(0);
      setDownPayment(0);
    }
    const emi = calculateEMI(downPayment);
    setEmi(emi);
  },[tenure]);
  const updateEMI =(e) =>{
    //agar kuchh nehni he to return karo
    if(!cost) return;

    const dp =Number(e.target.value);
    setDownPayment(dp.toFixed(0));

    // calculateEMI and update it 
    const emi = calculateEMI(dp);
    setEmi(emi);
  }
  const updateDownPayment = (e) =>{
    if(!cost) return;

    const emi = Number(e.target.value);
    setEmi(emi.toFixed(0));
    //calcute downpayment and update 
    const dp = calculateDp(emi)
    setDownPayment(dp);

  }
  return (
    <div className="EmiCalculator">
        <span className="title"style={{fontSize:30 ,marginTop:20}}>EmiCalculator</span>
        <span className="title">Total Cost of Asset</span>
        <input type="number" 
        value={cost}
        onChange={(e)=>setCost(e.target.value)}
        placeholder="Total cost of Assets"
        />
        <span className="title">Interest Rate in [%]</span>
        <input type="number" 
        value={interest}
        onChange={(e)=>setInterest(e.target.value)}
        placeholder="Interest Rate in(%)"
        />

        <span className="title">Processong fee in  (%)</span>
        <input type="number" 
        value={fee}
        onChange={(e)=>setFee(e.target.value)}
        placeholder="Processing fee in (%)"
        />
        <span className="title">
          Down payment
        </span>
        <span className="title" style={{textDecoration:"underline"}}>
          {" "}
          total Down Payment -{(Number(downPayment) + (cost - downPayment) * (fee /100)).toFixed(0)}
        </span>
        <div>

        <input type="range" 
        min={0}
        max={cost}
        className="slider"
        value={downPayment}
        onChange={updateEMI}
        />
        <div className="labels">
          <label >0%</label>
          <b>{downPayment}</b>
          <label >100%</label>
        </div>
        </div>
        <span className="title">
          Loan per month
        </span>
        <span className="title" style={{textDecoration:"underline"}}>
          {" "}
          total Loan Amount - {(emi * tenure).toFixed(0)}
        </span>
       <div>
       <input type="range"
        min={calculateEMI(cost)}
        max={calculateEMI(0)}
        className="slider"
        value={emi}
        onChange={updateDownPayment()}
        />
         <div className="labels">
          <label >{calculateEMI(cost)}</label>
          <b>{emi}</b>
          <label >{calculateEMI(0)}</label>
        </div> 
       </div>
        <span className="title">
          Tenure
        </span>
        <div className="tenureContainer">
        {tenureData.map((t,i)=>{
          return <button key={i} className={`tenure ${t === tenure ? "selected" : ""}`}
          onClick={()=>setTenure}
          >{t}</button>
        })}
        </div>
    </div>
   
  )
}

export default EmiCalculator
