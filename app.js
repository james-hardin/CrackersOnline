

    document.addEventListener("DOMContentLoaded", function () {
        const chatForm = document.getElementById("chat-form");

        chatForm.addEventListener("submit", function (e) {
            e.preventDefault(); // Prevent the default form submission behavior

            // Get form input values
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            // Here, you can send the chat enquiry to the server or perform other actions
            // For example, you can use the Fetch API to send a POST request to a server endpoint

            // Replace 'your-server-endpoint' with the actual server endpoint for handling chat enquiries
            const serverEndpoint = "your-server-endpoint";

            fetch(serverEndpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, message }),
            })
                .then((response) => response.json())
                .then((data) => {
                    // Handle the response from the server if needed
                    // For example, you can show a success message to the user
                    console.log("Enquiry sent successfully:", data);

                    // Clear the form after submission
                    chatForm.reset();
                })
                .catch((error) => {
                    // Handle any errors that occur during the request
                    console.error("Error sending enquiry:", error);
                });
        });
    });



const tbody = document.getElementById("tbody")
for (var i=0 ;i<10;i++){
    tbody.innerHTML+=`<tr>
                <td><img src="product1.jpg" alt="Product Image"></td>
                <td>Product 1</td>
                <td>Product 1 Description</td>
                <td>500</td>
                <td id="amount${i}" class="amount" >200</td>
                <td><input type="number" class="quantity" id="quantity${i}" oninput="calculateTotal(${i})"></td>
                <td id="totalAmount${i}" class="totalAmount">0.00</td>
            </tr>`
}

function calculateTotal(x){
    const amount =document.getElementById("amount"+x).innerText;
    const quantity=document.getElementById("quantity"+x).value;
    const totalAmount = document.getElementById("totalAmount"+x)
    totalAmount.innerText=amount*quantity
}