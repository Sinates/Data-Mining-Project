var natural = require('natural');
var classifier = new natural.BayesClassifier();

const data = require('./csvjson.json');
data.forEach(item=>{
    classifier.addDocument(item.EVENT_TYPE,item.FATALITIES,);
})
classifier.train();
console.log(classifier.classify("Battle-No change of territory"));
console.log(classifier.classify("Remote violence"));
console.log(classifier.classify("Violence against civilians"));
console.log(classifier.classify("Remote violence"));
console.log(classifier.classify("Battle-No change of territory"));
console.log(classifier.classify("Battle-No change of territory"));
console.log(classifier.classify("Battle-No change of territory"));
console.log(classifier.classify("Battle-No change of territory"));
console.log(classifier.classify("Battle-No change of territory"));
console.log(classifier.classify("Battle-No change of territory"));
console.log(classifier.classify("Battle-No change of territory"));
console.log(classifier.classify("Battle-No change of territory"));
console.log(classifier.classify("Battle-No change of territory"));
console.log(classifier.classify("Battle-No change of territory"));
console.log(classifier.classify("Violence against civilians"));
console.log(classifier.classify("Battle-No change of territory"));
console.log(classifier.classify("Violence against civilians"));
console.log(classifier.classify("Battle-No change of territory"));
console.log(classifier.classify("Violence against civilians"));
console.log(classifier.classify("Battle-No change of territory"));
console.log(classifier.classify("Battle-No change of territory"));
console.log(classifier.classify("Battle-No change of territory"));
console.log(classifier.classify("Riots/Protests"));
console.log(classifier.classify("Riots/Protests"));
console.log(classifier.classify("Battle-No change of territory"));
console.log(classifier.classify("Battle-No change of territory"));
console.log(classifier.classify("Battle-No change of territory"));
console.log(classifier.classify("Riots/Protests"));
console.log(classifier.classify("Riots/Protests"));
console.log(classifier.classify("Riots/Protests"));
console.log(classifier.classify("Riots/Protests"));
console.log(classifier.classify("Riots/Protests"));
console.log(classifier.classify("Riots/Protests"));
console.log(classifier.classify("Riots/Protests"));
console.log(classifier.classify("Riots/Protests"));
console.log(classifier.classify("Riots/Protests"));
console.log(classifier.classify("Violence against civilians"));
console.log(classifier.classify("Riots/Protests"));
console.log(classifier.classify("Violence against civilians"));
console.log(classifier.classify("Riots/Protests"));
console.log(classifier.classify("Violence against civilians"));
console.log(classifier.classify("Battle-No change of territory"));
console.log(classifier.classify("Riots/Protests"));
console.log(classifier.classify("Violence against civilians"));
console.log(classifier.classify("Riots/Protests"));
console.log(classifier.classify("Battle-No change of territory"));
console.log(classifier.classify("Riots/Protests"));
console.log(classifier.classify("Violence against civilians"));
console.log(classifier.classify("Battle-No change of territory"));
console.log(classifier.classify("Riots/Protests"));
console.log(classifier.classify("Battle-No change of territory"));
console.log(classifier.classify("Riots/Protests"));
console.log(classifier.classify("Riots/Protests"));
console.log(classifier.classify("Riots/Protests"));
console.log(classifier.classify("Riots/Protests"));
console.log(classifier.classify("Riots/Protests"));
console.log(classifier.classify("Riots/Protests"));
console.log(classifier.classify("Violence against civilians"));
console.log(classifier.classify("Violence against civilians"));
console.log(classifier.classify("Riots/Protests"));
console.log(classifier.classify("Riots/Protests"));
console.log(classifier.classify("Riots/Protests"));
console.log(classifier.classify("Riots/Protests"));
console.log(classifier.classify("Violence against civilians"));
console.log(classifier.classify("Violence against civilians"));
console.log(classifier.classify("Riots/Protests"));
console.log(classifier.classify("Violence against civilians"));
console.log(classifier.classify("Violence against civilians"));
console.log(classifier.classify("Battle-No change of territory"));
console.log(classifier.classify("Riots/Protests"));
console.log(classifier.classify("Violence against civilians"));
console.log(classifier.classify("Violence against civilians"));
console.log(classifier.classify("Riots/Protests"));
console.log(classifier.classify("Riots/Protests"));
console.log(classifier.classify("Battle-No change of territory"));
console.log(classifier.classify("Riots/Protests"));
console.log(classifier.classify("Battle-No change of territory"));
console.log(classifier.classify("Battle-No change of territory"));
console.log(classifier.classify("Battle-No change of territory"));
console.log(classifier.classify("Battle-No change of territory"));
console.log(classifier.classify("Strategic development"));
console.log(classifier.classify("Violence against civilians"));
console.log(classifier.classify("Violence against civilians"));
console.log(classifier.classify("Battle-No change of territory"));
console.log(classifier.classify("Battle-No change of territory"));
console.log(classifier.classify("Violence against civilians"));
console.log(classifier.classify("Riots/Protests"));
console.log(classifier.classify("Violence against civilians"));
console.log(classifier.classify("Violence against civilians"));
console.log(classifier.classify("Riots/Protests"));
console.log(classifier.classify("Violence against civilians"));
console.log(classifier.classify("Violence against civilians"));
console.log(classifier.classify("Violence against civilians"));
console.log(classifier.classify("Violence against civilians"));
console.log(classifier.classify("Riots/Protests"));
console.log(classifier.classify("Riots/Protests"));
console.log(classifier.classify("Violence against civilians"));
console.log(classifier.classify("Violence against civilians"));
console.log(classifier.classify("Violence against civilians"));
console.log(classifier.classify("Violence against civilians"));
console.log(classifier.classify("Violence against civilians"));
console.log(classifier.classify("Violence against civilians"));
console.log(classifier.classify("Violence against civilians"));
console.log(classifier.classify("Violence against civilians"));















