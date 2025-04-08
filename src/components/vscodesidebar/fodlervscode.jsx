import { useState } from "react";
import explorer from "./data/floderData";
import Folder from "./component/Folder";
import useTreaverseTree from "./hooks/useTreaverseTree";

const Fodlervscode = () => {
  const [explorerData, setExplorerData] = useState(explorer);
  const { insertNode } = useTreaverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {
    const updatedTree = JSON.parse(JSON.stringify(explorerData)); // Deep clone for immutability
    const finalTree = insertNode(updatedTree, folderId, item, isFolder);
    setExplorerData(finalTree);
  };

  return (
    <div className="Foldervscode">
      <Folder handleInsertNode={handleInsertNode} explorer={explorerData} />
    </div>
  );
};

export default Fodlervscode;
