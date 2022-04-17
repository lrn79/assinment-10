import React from 'react';
import './blogs.css'

const Blogs = () => {
    return (
        <div>
            <h1 className='text-center mt-4 fw-bolder'>QNA SECTION</h1>
            <div className='container m-5 blog_container'>
                <h1>Difference between authorization and authentication?</h1>
                <h4 className='mt-3'>Ans : Basically authentication is a authentication is the process of verifying who someone is!... ans authorization is the process of verifying what specific applications, files, and data a user has access to. The situation is like that of an airline that needs to determine which people can come on board..In the digital world, authentication and authorization accomplish these same goals. Authentication is used to verify that users really are who they represent themselves to be. Once this has been confirmed, authorization is then used to grant the user permission to access different levels of information and perform specific functions, depending on the rules established for different types of users. </h4>
            </div>
            <div className='container m-5 blog_container'>
                <h1> Why are you using firebase? What other options do you have to implement authentication?</h1>
                <h4 className='mt-3'>Ans : We use firebase cause Firebase Authentication provides backend services .. we can used it easily actually it is easy to learn ...ane its have ready UI ..  It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more... its made the life so easy ..</h4>
            </div>
            <div className='container m-5 blog_container'>
                <h1>What other services does firebase provide other than authentication?</h1>
                <h4 className='mt-3'>There are many services which Firebase provides, Most useful of them are: <br />
                    <ul>
                        <li>Cloud Firestore.</li>
                        <li>Cloud Functions.</li>
                        <li>Authentication</li>
                        <li>Hosting</li>
                        <li>Cloud Storage.</li>
                        <li>Google Analytics.</li>
                        <li>Predictions.</li>
                        <li>Cloud Messaging.</li>
                    </ul>
                </h4>
            </div>
        </div>
    );
};

export default Blogs;