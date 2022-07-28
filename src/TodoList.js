import React from 'react'

class TodoList extends React.Component
{   



    render(){
        
        return(
            <div className="default-container">
                    
                    <div className="form-body">
                        <div className="Title">
                            <input className="form__input" type="text" id="title" placeholder="Title"/>
                        </div>
                        <div className="deadline">
                            <input  type="text" name="" id="deadline"  className="form__input"placeholder="Deadline"/>
                        </div>
                        <div className="status">
                            
                        <select className="form__input" id="status">
                                 <option value="">Status</option>
                                    <option value="done">Done</option>
                                    <option value="inprogs">In Progress</option>
                                    <option value="notstrt">Not started</option>
                                     
                            </select>
                        
                    </div>
                    </div>
                <div class="footer">
                    
                    <button type="cancel" class="btn">Cancel</button>
                    <button type="submit" class="btn">Add</button>
                </div>



        





            </div>

        );
    }

}

export default TodoList;