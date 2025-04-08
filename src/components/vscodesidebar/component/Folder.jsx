

import { useState } from 'react';



const Folder = ({handleInsertNode,explorer}) => {
    console.log(explorer);
    const [expand,setExpand] = useState(false);
    const [showInput,setShowInput] =useState({
        visible:false,
        isFolder:null
    });
    const handleNewFolder = (e,isFolder) =>{
        e.stopPropagation();
        //it help to when i click folder then input should come
        setExpand(true);
        setShowInput({
            visible:true,
            isFolder
        })
    }
    const onAddFolder= (e)=>{
        //e.keyCode === 13 indicate to when we enter it will work
        if(e.keyCode === 13 && e.target.value){
            //this is coming from hook logic
            handleInsertNode(explorer.id, e.target.value, showInput.isFolder);
            setShowInput({...showInput,visible:false});
        }
    }
 if(explorer.isFolder){
    return (
        <div style={{marginTop:5}}>
            {/* this setExpand(!expand)help to when once click it should show and again it will hide  */}
            <div className='folder'onClick={()=>setExpand(!expand)}>
                <span>📁 {explorer.name}</span>
                <div>
                    <button  onClick={(e)=>handleNewFolder(e,true)}>Folder +</button>
                    <button onClick={(e)=>handleNewFolder(e,false)}>File +</button>
                </div>
            </div> 
    
            <div style={{display:expand ? "block" : "none", paddingLeft:25}}>
                {
                    showInput.visible &&(
                        <div className='inputContainer'>
                            <span>{showInput.isFolder ? "📁" : "🗄"}</span>
                            <input type="text"
                            onKeyDown={onAddFolder}
                            onBlur={()=>setShowInput({...showInput,visible:false})}
                            className='inputContainer__input'
                            autoFocus 
                            />
                        </div>
                    )
                }
                {
                    explorer.items.map((exp)=>{
                        return <Folder 
                        explorer={exp} 
                        key={exp.id} 
                        handleInsertNode={handleInsertNode}/>
                    })
                }
            </div>
        </div>
    
      )
 }else{
     return <span className='file'>🗄 {explorer.name}</span>   
 }
  
}
//this is not important i need to avoid the red line error line so i did this
// Define propTypes
// Folder.propTypes = {
//     explorer: PropTypes.shape({
//       name: PropTypes.string.isRequired, // Validate the structure of explorer
//     }).isRequired, // Ensure explorer prop is passed
//   };

export default Folder


// // there are two ways to get the props here 
// // 1. const folder = (props) =>{

// // }
// // //here we directly get the data
// // 2. cosnt folder = ({explorer})=>{

// // }


// import { useState } from "react";

// const Folder = ({ handleInsertNode, explorer }) => {
//   console.log(explorer);
//   const [expand, setExpand] = useState(false);
//   const [showInput, setShowInput] = useState({
//     visible: false,
//     isFolder: null,
//   });

//   const handleNewFolder = (e, isFolder) => {
//     e.stopPropagation();
//     setExpand(true);
//     setShowInput({
//       visible: true,
//       isFolder,
//     });
//   };

//   const onAddFolder = (e) => {
//     if (e.keyCode === 13 && e.target.value) {
//       handleInsertNode(explorer.id, e.target.value, showInput.isFolder);
//       setShowInput({ ...showInput, visible: false });
//     }
//   };

//   if (explorer?.isFolder) {
//     return (
//       <div style={{ marginTop: 5 }}>
//         <div className="folder" onClick={() => setExpand(!expand)}>
//           <span>📁 {explorer.name}</span>
//           <div>
//             <button onClick={(e) => handleNewFolder(e, true)}>Folder +</button>
//             <button onClick={(e) => handleNewFolder(e, false)}>File +</button>
//           </div>
//         </div>

//         <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
//           {showInput.visible && (
//             <div className="inputContainer">
//               <span>{showInput.isFolder ? "📁" : "🗄"}</span>
//               <input
//                 type="text"
//                 onKeyDown={onAddFolder}
//                 onBlur={() => setShowInput({ ...showInput, visible: false })}
//                 className="inputContainer__input"
//                 autoFocus
//               />
//             </div>
//           )}

//           {/* Check if explorer.items exists and is an array */}
//           {Array.isArray(explorer.items) &&
//             explorer.items.map((exp) => (
//               <Folder explorer={exp} key={exp.id} handleInsertNode={handleInsertNode} />
//             ))}
//         </div>
//       </div>
//     );
//   } else {
//     return <span className="file">🗄 {explorer.name}</span>;
//   }
// };

// export default Folder;
