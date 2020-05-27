import React,{useState} from 'react';
import Content from '../components/Content';
import marked from 'marked';



const App = () => {

  let [markdown, setMarkdown] = useState(`This is my convert markdown

  **bolded text**

  > Block Quotes!

  # Heading
  ## Heading 2

  - list item 1
  - list item 2
  - list item 3

  [Lock at website](https://flatuicolors.com/)

  this is a inline \`<div></div>\`

  this is a block of code

  \`\`\`
    let  yeah = 2;
    let uff = op;
    let finish = 3;

  \`\`\`
  
  ![React Logo w/ Text](https://goo.gl/Umyytc)
  `)


  const handleChange= (e)=>{
    setMarkdown(e.target.value)
  }
  
  const mark = marked(markdown,{breaks: true})


  return ( 
    <Content 
      markdown = {markdown}
      onChange = {handleChange}
      mark = {mark}
    />
   );
}
 
export default App;
