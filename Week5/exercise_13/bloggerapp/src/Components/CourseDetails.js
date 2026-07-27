import React from "react";

function CourseDetails() {

    const courses = [

        {
            id: 1,
            name: "React",
            duration: "45 Days"
        },

        {
            id: 2,
            name: "Angular",
            duration: "40 Days"
        }

    ];

    return (

        <div>

            <h2>Course Details</h2>

            <ul>

                {

                    courses.map(course => (

                        <li key={course.id}>

                            <b>{course.name}</b>

                            <br />

                            Duration : {course.duration}

                            <br /><br />

                        </li>

                    ))

                }

            </ul>

        </div>

    );

}

export default CourseDetails;