//Creating react element
const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:"_blank",
    },
    children:'Click me to visit google'
}

//creating render function
function customRender(reactElement,div){
    //====Not a effective approach=====
        /* const domElement=document.createElement(reactElement.type);

        domElement.setAttribute('href',reactElement.props.href);
         domElement.setAttribute('target',reactElement.props.target);

        domElement.innerHTML=reactElement.children;
        //appending The child
         div.appendChild(domElement);*/

    //====modular approach===== 
        const domElement=document.createElement(reactElement.type);
        domElement.innerHTML=reactElement.children;
        for (const prop in reactElement.props) {
            if(prop==='children')continue;
            domElement.setAttribute(prop,reactElement.props[prop])
        }
        div.appendChild(domElement);
}

//accessing the root element and inject the code
const myRoot=document.getElementById('root');
customRender(reactElement,myRoot)