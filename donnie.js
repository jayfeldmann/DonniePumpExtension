
function replaceTextOnPage(from, to){
    getAllTextNodes().forEach(function(node){
      node.nodeValue = node.nodeValue.replace(new RegExp(quote(from), 'g'), to);
    });
  
    function getAllTextNodes(){
      var result = [];
  
      (function scanSubTree(node){
        if(node.childNodes.length) 
          for(var i = 0; i < node.childNodes.length; i++) 
            scanSubTree(node.childNodes[i]);
        else if(node.nodeType == Node.TEXT_NODE) 
          result.push(node);
      })(document);
  
      return result;
    }
  
    function quote(str){
      return (str+'').replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
    }
  }

function runDonnie(){
  replaceTextOnPage("realDonaldTrump", "realDonniePump");
  replaceTextOnPage("Donald John Trump", "Donnie Pepman Pump");
  replaceTextOnPage("Donald J. Trump", "Donnie P. Pump");
  replaceTextOnPage("Donald J Trump", "Donnie P Pump");
  replaceTextOnPage("Donald Trump", "Donnie Pump");
  replaceTextOnPage("Trump", "Pump");
}

setTimeout(runDonnie(),500);



