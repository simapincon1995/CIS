$(document).ready(function () {
    $("#openForm").click(function () {
        $("#floatingForm").toggle();
    });

    // Close form when clicking outside
    $(document).mouseup(function (e) {
        var container = $("#floatingForm");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.hide();
        }
    });

    // JavaScript to handle form submission
    $("#myForm").submit(function (event) {
        // Prevent default form submission
        event.preventDefault();

        // Get form data
        var formData = {
            productName: $("#productName").val(),
            ideaType: $("#ideaType").val(),
            name: $("#name").val(),
            customerName: $("#customerName").val(),
            description: $("#description").val(),
            attachment: $("#attachment").val() // You might need to handle file uploads differently
        };

        // Make POST request
        $.ajax({
            type: "POST",
            url: "YOUR_ENDPOINT_URL",
            data: JSON.stringify(formData),
            contentType: "application/json",
            success: function (response) {
                console.log("Form submitted successfully");
                // You can perform any actions upon successful submission here
            },
            error: function (xhr, status, error) {
                console.error("Error submitting form:", error);
                // You can handle errors here
            }
        });
    });
});
