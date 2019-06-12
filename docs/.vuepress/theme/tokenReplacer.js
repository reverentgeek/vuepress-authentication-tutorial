function scanChildNodes(node, results) {
    if (node.childNodes.length) {
      for (let i = 0; i < node.childNodes.length; i++) {
        scanChildNodes(node.childNodes[i], results);
      }
    } else if (node.nodeType == Node.TEXT_NODE) {
      results.push(node);
    }
  }
  export function getAllTextNodes() {
    const results = [];
    scanChildNodes(document, results);
    return results;
  }
  
  export function nodeReplace(nodes, token, value) {
    nodes.forEach(node => {
      node.nodeValue = node.nodeValue.replace(
        new RegExp( `\{${ token }\}`, "gi" ),
        value
      );
    });
  }