import React from 'react';
import '../styles/Content.css';


const Content = ({markdown, onChange, mark}) => {
    return ( 
        <div className="markdown m-auto">
            <h2 className="text-center mt-4">Welcome to the Convert Markdown</h2>
            <div className="row d-flex justify-content-center">
                <div className="col-7">
                    <div className="card shadow-lg  mb-5 color-header rounded">
                        <div className="card-header bg-info shadow p-3 rounded">
                            <h5 className="text-center">Enter your markdown here</h5>
                        </div>
                        <div className="card-body">
                            <textarea className="form-control" id="editor" value={markdown} onChange={onChange} />
                        </div>
                    </div>   
                </div>
                <div className="col-9">
                    <div className="card shadow-lg  mb-5 color-header rounded">
                        <div className="card-header bg-info shadow p-3 rounded">
                            <h5 className="text-center">See the result here</h5>
                        </div>
                        <div className="card-body">
                            <div className="preview p-2 rounded" id="preview" dangerouslySetInnerHTML={{__html: mark}} />
                        </div>  
                    </div>
                </div>    
            </div>
        </div>
     );
}
 
export default Content;