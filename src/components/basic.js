export default function basic() {
    const container = document.createElement('div');
    container.createElement('container');
    container.innerHTML = `
    <div class="row">
        <div class="projects col-12 col-md-4">
            <div class="card">
                <div class="card-header">
                    Add your Project Category
                </div>
                <div class="input-group mb-3 card-body">
                    <input type="text" class="form-control" placeholder="Project Category"
                        aria-label="Project Category" aria-describedby="button-addon2">
                    <button class="btn btn-outline-info" type="button" id="button-addon2">Add</button>
                </div>
            </div>
        </div>
        <div class="card tasks col-12 col-md-8">
            <div class="card-header">
                Project category
            </div>
            <button type="button" class="btn btn-info btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Create Tasks
            </button>

            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-3">
                                    <label for="title" class="form-label">Title</label>
                                    <input type="text" class="form-control" id="title">
                                </div>
                                <div class="mb-3">
                                    <label for="description" class="form-label">description</label>
                                    <textarea class="form-control" id="description" rows="3"></textarea>
                                </div>
                                <div class="mb-3">
                                    <label for="date" class="form-label">Due Date</label>
                                    <input type="date" class="form-control" id="date">
                                </div>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="normal">Normal</option>
                                    <option value="urgent">Urgent</option>
                                </select>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-success">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    
        `
    return container;
}