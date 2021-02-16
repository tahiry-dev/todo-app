export default function basic() {
    const container = document.createElement('div');
    container.className = 'container';
    container.innerHTML = `
            <form>
                <div class="left">
                    <p>
                        <label for="category">Task Category</label>
                        <input type="text" id="category" placeholder="Category Name" required minlength=6>
                    </p>
                    <p><button type="submit" id="category-button" >Add</button>
                </div>
                <div class="center">
                    <label for="title">Tasks</label>
                    <input type="text" id="title" placeholder="Title"><br>
                    <label for="description">Description</label>
                    <textarea cols="35" rows="7" id="description" placeholder="Describe Your Task Here"></textarea><br>
                    <label for="deadline">Due date</label>
                    <input type="date" id="deadline"><br>
                    <label for="priority">Priority</label>
                    <select id="priority">
                        <option value="Normal">Normal</option>
                        <option value="Urgent"> Urgent</option>
                    </select>
                </div>
                <div class="right">
                    <button type="submit" id = "submit-button" >Submit</button>
                </div>
            </form>

            <ul class="liste-todo">
            
            </ul>
        
  `
    return container
}