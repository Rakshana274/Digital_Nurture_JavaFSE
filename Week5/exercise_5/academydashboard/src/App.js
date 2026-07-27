import CohortDetails from "./Components/CohortDetails";

function App() {

    return (

        <div>

            <h1
                style={{
                    textAlign: "center"
                }}
            >
                My Academy Dashboard
            </h1>

            <CohortDetails
                name="ReactJS"
                mentor="John"
                duration="8 Weeks"
                status="Ongoing"
            />

            <CohortDetails
                name="Angular"
                mentor="David"
                duration="6 Weeks"
                status="Completed"
            />

            <CohortDetails
                name="Java Full Stack"
                mentor="Peter"
                duration="12 Weeks"
                status="Ongoing"
            />

            <CohortDetails
                name="Python"
                mentor="James"
                duration="10 Weeks"
                status="Completed"
            />

        </div>

    );

}

export default App;