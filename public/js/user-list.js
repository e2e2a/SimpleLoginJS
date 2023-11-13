// self executing function here
// this function will work on load of page, it makes sure the page is loaded
// before applying any event listeners
(function () {
    // get all the delete buttons
    let viewButtons = document.querySelector("#view.btn");
    // add event listener to all viewButtons
    viewButtons.addEventListener("click", function () {
        userId = this.dataset.userId; // get id from data-user-id
        window.location.href = "/user/" + userId;
    });
    // get all the delete buttons
    let deleteButtons = document.querySelector("#delete.btn");
    // add event listener to all deleteButtons
    deleteButtons.addEventListener("click", function () {
        userId = this.dataset.userId; // get id from data-user-id
        // send delete request to server
        fetch("/user/" + userId + "/delete", {
            method: "POST",
            body: JSON.stringify({ id: userId })
        }).then((response) => {
            // on success
            if (response.status == 200) {
                // get the row of the user and remove it
                let row = this.parentNode.parentNode;
                row.parentNode.removeChild(row);
            }
        }).catch((error) => {
            console.log(error);
        });
    });
})();