import React from "react";

export default function Contact() {
    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const formData = new FormData(event.target);
        const data = {
          email: formData.get('email'),
          firstName: formData.get('firstName'),
          lastName: formData.get('lastName'),
          message: formData.get('message'),
          file: formData.get('file'), // Handle file upload if needed
        };
    
        try {
          const response = await fetch('http://localhost:5000/submit', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });
    
          if (response.ok) {
            alert('Thank you for contacting us! We will get back to you soon.');
            event.target.reset();
          } else {
            alert('Something went wrong. Please try again.');
          }
        } catch (error) {
          console.error('Error:', error);
          alert('Something went wrong. Please try again.');
        }
      };

    return(
        <div className="bg-gray-100 p-6">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h1>
    
            <form id="contactForm" className="space-y-6">
                <div>
                    <label className="block text-lg font-semibold text-gray-700 mb-2">Email</label>
                    <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" required/>
                </div>
    
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <label className="block text-lg font-semibold text-gray-700 mb-2">First Name</label>
                        <input type="text" id="firstName" name="firstName" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" required/>
                    </div>
    
                    <div>
                        <label className="block text-lg font-semibold text-gray-700 mb-2">Last Name</label>
                        <input type="text" id="lastName" name="lastName" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" required/>
                    </div>
                </div>
    
                <div>
                    <label className="block text-lg font-semibold text-gray-700 mb-2">Message</label>
                    <textarea id="message" name="message" rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" required></textarea>
                </div>
    
                <div>
                    <label className="block text-lg font-semibold text-gray-700 mb-2">Attach a File</label>
                    <input type="file" id="file" name="file" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"/>
                </div>
    
                <button type="submit" className="w-full bg-darkblue text-white px-6 py-3 rounded-lg hover:bg-lightblue focus:outline-none focus:ring-2 focus:ring-darkblue">
                    Submit
                </button>
            </form>
        </div>
    </div>
    )
}