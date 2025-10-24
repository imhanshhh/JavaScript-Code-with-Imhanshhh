const myobject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift:'swift',
}
for (const key in myobject) {
   // console.log(`${key} shortcut is for ${myobject[key]}`); 
   
    
    
}

// Easy way: Use Object.values()
const languageNames = Object.values(myobject);

console.log(languageNames);

// as object

const programming = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift',
};

console.log(programming); 
// Output: { js: 'javascript', cpp: 'C++', rb: 'ruby', swift: 'swift' }

// as an array velue

const code = [
    'javascript',
    'C++',
    'ruby',
    'swift'
];

console.log(code); 
// Output: [ 'javascript', 'C++', 'ruby', 'swift' ]