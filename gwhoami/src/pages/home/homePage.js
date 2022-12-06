import React from "react";

const HomePage = React.memo(() => {
    return(
        <div className="flex justify-center items-center h-full">
            <div className="text-2xl">Welcome to Gwhoami</div>
        </div>
    );
});

export default HomePage;