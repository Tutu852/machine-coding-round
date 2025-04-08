const useTreaverseTree = () => {
    const insertNode = (tree, folderId, item, isFolder) => {
      if (tree.id === folderId && tree.isFolder) {
        tree.items.unshift({
          id: new Date().getTime(), // Corrected the usage of `getTime`
          name: item,
          isFolder,
          items: [], // Initialize with empty array for folder
        });
        return tree;
      }
      // Recursively traverse the tree
      tree.items.forEach((node) => {
        insertNode(node, folderId, item, isFolder);
      });
  
      return tree;
    };
  
    return { insertNode };
  };
  
  export default useTreaverseTree;
  