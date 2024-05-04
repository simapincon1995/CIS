// Create a custom element
class CustomerIdeaPortal extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        const link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css');
        this.shadowRoot.appendChild(link);
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const template = `
        <style>
        .floating-icon {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 1000;
        }

  

        .form-header {
            background-color: #6554C0;
            color: #fff;
            padding: 8px;
            border-bottom: 1px solid #ddd;
            font-size: 17px !important;
            font-weight: 600;
        }

        .form-header h4 {
            margin: 0;
        }

        .form-footer {
            padding: 20px;
            text-align: right;
            border-top: 1px solid #ccc;
        }
        #openForm {
            border-radius: 24px;
            font-size: 14px;
            border: none;
            outline: none;
            white-space: nowrap;
            background: var(--ds-background-discovery-bold, #6554C0);
            padding: var(--ds-space-100, 8px) var(--ds-space-150, 12px);
            box-shadow: var(--ds-shadow-overlay, 0 8px 16px -4px rgba(9, 30, 66, 0.25), 0 0 1px rgba(9, 30, 66, 0.31));
            transition: all 0.8s ease-in-out 0s;
            display: inline-flex;
            -webkit-box-align: center;
            align-items: center;
            overflow: hidden;
            color: #fff;
            cursor: pointer !important;

        }
        /* Resetting default margins and paddings */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Button styles */

.submit-btn {
    color: #fff;
    box-shadow: var(--ds-shadow-overlay, 0 8px 16px -4px rgba(9, 30, 66, 0.25), 0 0 1px rgba(9, 30, 66, 0.31));
    border-radius: 24px;
    font-size: 14px;
    border: none;
    outline: none;
    white-space: nowrap;
    background: var(--ds-background-discovery-bold, #6554C0);
    padding: var(--ds-space-100, 8px) var(--ds-space-150, 12px);
    box-shadow: var(--ds-shadow-overlay, 0 8px 16px -4px rgba(9, 30, 66, 0.25), 0 0 1px rgba(9, 30, 66, 0.31));
    transition: all 0.8s ease-in-out 0s;
    margin-button:1rem;
    float:right;
    cursor: pointer !important;
}

/* Form styles */
.form-group {
    margin-bottom: 16px;
}

.form-control {
    display: block;
    width: 100%;
    padding: 8px;
    font-size: 14px;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 4px;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

/* Select dropdown styles */
.form-control select {
    appearance: none;
    padding-right: 30px;
}

/* Floating form container */
.floating-form {
    display: none;
    position: fixed;
    z-index: 2000;
    width: 300px;
    overflow-y: auto;
    background-color: #fff;
    padding: 0;
    border-radius: 5px;
    bottom: 4rem;
    right: 1rem;
    border: 1px solid #ddd;
    border-radius: 6px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}
.form-footer {
    padding: 7px;
    margin-top: 0.5rem;
    color: var(--MESSENGER_FOOTER_TEXT_COLOR);
    font-weight: 400;
    font-size: 11px;
    line-height: 15px;
    text-align: center;
    padding-inline: 16px;
    background-color: rgb(252, 252, 252);
    border-top: 1px solid rgb(222, 222, 222);
}

/* File input styles */
.form-control-file {
    position: relative;
    overflow: hidden;
}

.form-control-file input[type="file"] {
    position: absolute;
    top: 0;
    right: 0;
    opacity: 0;
    cursor: pointer !important;
    height: 100%;
    width: 100%;
}
.header-text{
    font-size: 12px;
    border-color: rgb(241, 244, 247);
    background-color: rgb(241, 244, 247);
    float: left;
    isolation: isolate;
    font-style: italic;
    margin-bottom: 0.2rem;

}
#myForm {
    padding: 0.5rem;
    overflow-y: auto;
    max-height: 300px !important;
}
/* For Webkit browsers */
::-webkit-scrollbar {
    width: 5px; /* Adjust the width as per your requirement */
}

/* For Firefox */
/* To narrow the scrollbar */
* {
    scrollbar-width: thin;
}

/* To style the scrollbar thumb */
::-webkit-scrollbar-thumb {
    background: #888; /* Change the color as needed */
}

/* To hide the scrollbar track */
*::-webkit-scrollbar-track {
    display: none;
}
#thankyou{
    display:none;
}

        </style>
        <div class="floating-icon">
          <button id="openForm" class="btn btn-primary">Customer Idea Portal</button>
        </div>
        <div id="floatingForm" class="floating-form">
        <div class="form-header">
            <div>Navex Idea Portal</div>
        </div>
        <form id="myForm">
        <p id="thankyou"> Thank You for your feedback </p>
            <div id="form-container">
            <p class="header-text"> we would love to hear your thoughts, suggestions, 
            concerns or problems with anything so we can improve ! </p>
            <div class="form-group" part="product-name">
            <label for="productName">Select Product :</label>
            <select class="form-control" id="productName">
                <option value="WB">WhistleB</option>
                <option value="EPIM">EPIM</option>
                <option value="PT">Policy Tech</option>
                <!-- Add more options as needed -->
            </select>
        </div>
                <div class="form-group">
                    <label for="ideaType">Select Idea:</label>
                    <select class="form-control" id="ideaType">
                        <option value="feature">Feature Request</option>
                        <option value="bug">Bug Report</option>
                        <option value="feedback">General Feedback</option>
                        <!-- Add more options as needed -->
                    </select>
                </div>
                <div class="form-group">
                <label for="name">Customer Name:</label>
                <input type="text" class="form-control" id="name" placeholder="Enter your name">
            </div>
            <div class="form-group">
                <label for="organization">Organisation Name:</label>
                <input type="text" class="form-control" id="organization" placeholder="Enter your name">
            </div>
            <div class="form-group">
                <label for="description">Description:</label>
                <textarea class="form-control" id="description" placeholder="Enter your description"></textarea>
            </div>
            <div class="form-group">
                <input type="file" class="form-control-file" id="attachment">
              </div>
              <div class="form-group">
              <button type="submit" class="submit-btn">Submit</button>
            </div>
            </div>
       
        </form>
        <div class="form-footer">
           <div>            
            <a target="_blank" href ="https://www.navex.com/en-us/">Signin to Idea dashboard</a>
            </div>
        </div>
    </div>
      `;
        this.shadowRoot.innerHTML = template;
        this.initForm();
    }

    initForm() {
        const form = this.shadowRoot.querySelector('#myForm');
        const openFormButton = this.shadowRoot.querySelector('#openForm');
        const floatingForm = this.shadowRoot.querySelector('#floatingForm');
        const formContainer = this.shadowRoot.querySelector('#form-container');
        const thankyoucontainer = this.shadowRoot.querySelector('#thankyou');

        openFormButton.addEventListener('click', () => {
            if (floatingForm.style.display === 'block') {
                floatingForm.style.display = 'none';
            } else {

                floatingForm.style.display = 'block';
                formContainer.style.display = 'block';
                thankyoucontainer.style.display = 'none';
                form.querySelector('#name').value = '';
                form.querySelector('#organization').value = '';
                form.querySelector('#description').value = '';
                form.querySelector('#attachment').files = [];

            }
        });

        // Close form when clicking outside
        // document.addEventListener('mouseup', (event) => {
        //   if (!floatingForm.contains(event.target)) {
        //     floatingForm.style.display = 'none';
        //   }
        // });
        form.addEventListener('submit', async (event) => {
            event.preventDefault();
            const ideaType = form.querySelector('#ideaType').value;
            const productName = form.querySelector('#productName').value;
            const customerName = form.querySelector('#name').value;
            const organizationName = form.querySelector('#organization').value;
            const description = form.querySelector('#description').value;
            const attachment = form.querySelector('#attachment').files[0];

            // const payload = {
            //     ideaType: ideaType,
            //     productName: productName,
            //     customerName: customerName,
            //     organizationName: organizationName,
            //     description: description,
            //     attachment: attachment // You might want to handle file uploads differently if needed
            // };

            const payload = {
                userId: 1,
                id: 100,
                title: customerName,
                body: description,
            };

            // Here you can do something with the payload, like send it to a server
            console.log(payload);

            // Make POST request
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                    method: 'POST',
                    body: payload
                });

                if (response.ok) {
                    formContainer.style.display = 'none';
                    thankyoucontainer.style.display = 'block';
                    console.log('Form data submitted successfully!');
                    // Optionally, you can handle the response here
                } else {
                    console.error('Failed to submit form data');

                }
            } catch (error) {
                console.error('Error submitting form data:', error);
            }

        });
    }
}

// Register the custom element
customElements.define('customer-idea-portal', CustomerIdeaPortal);

(function () {
    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css');
    document.head.appendChild(link);
})();