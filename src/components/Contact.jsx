import React from 'react';
import FeedbackForm from './FeedbackForm'; // Import the FeedbackForm component
import WhatsAppButton from './WhatsAppButton';

const Contact = () => {
    return (
        <div className="centered-div">
            <p>
                Welcome to Zeal Online—let’s bring your vision to life! <br /> <br />
                We’re excited to connect and turn your ideas into reality. Whether you need a stunning website, real-time app, or expert advice, our team is here to help you succeed. <br /> <br />
                Our approach is simple: your questions, our answers. Reach out via email at <a href="mailto:hello@zealonlinesolutions.com">hello@zealonline.com</a>. We’re based in India, ready to assist! <br /> <br />
                Got a project in mind? Contact us today—your success starts here!<br /> <br />
            </p>
            <FeedbackForm /> {/* FeedbackForm already updated to use text-white */}
            <WhatsAppButton />
        </div>
    );
};

export default Contact;