function deleteReview (id) {
	var review = document.getElementById(id);
	var httpRequest = new XMLHttpRequest();
	httpRequest.onreadystatechange = function(id) {
        if(httpRequest.readyState === 4 && httpRequest.status === 204) {
            review.remove();
        }
    }
    httpRequest.open('DELETE', '/reviews/api/' + id, true);
    httpRequest.send();
    location.reload();
}

function updateReview (id) {
	window.location.replace("/reviews/api/" + id);

}

function showUpdateForm(status) {
    document.getElementById('review').style.display = (status) ? 'none' : 'block';
    document.getElementById('editForm').style.display = (status) ? 'block' : 'none';
}

function updateThisReview(id) {
    var Review = {
        name: document.getElementById('name').value,
        placeType: document.getElementById('placeType').value,
        stars: Number.parseInt(document.getElementById('stars').value)
    };

    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function(id) {
         if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                location.reload();
            }
         }
    }
    httpRequest.open('PUT', '/reviews/api/' + id, true);
    httpRequest.setRequestHeader("Content-Type", "application/json");
    httpRequest.send(JSON.stringify(Review));
}