import React from 'react';
import Header from './components/Header/Header';

const App = () => {
    return (
        <div className="p-5">
            {/* Include the Header component */}
            <Header/>

            {/* Main content of your application */}
            <main className="container mx-auto mt-8">
                <h1 className="text-2xl font-bold">Welcome to Ask Ethiopia!</h1>
                <p className="mt-4 text-gray-700">
                    This is where your main content will go.
                </p>
            </main>

            {/* Footer or any other components */}
        </div>
    );
};

export default App;
