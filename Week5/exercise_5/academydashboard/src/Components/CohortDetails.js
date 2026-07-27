import styles from "../Styles/CohortDetails.module.css";

function CohortDetails(props) {

    return (

        <div className={styles.box}>

            <h2>{props.name}</h2>

            <dl>

                <dt>Mentor</dt>
                <dd>{props.mentor}</dd>

                <dt>Duration</dt>
                <dd>{props.duration}</dd>

                <dt>Status</dt>
                <dd>
                    <h3
                        style={{
                            color:
                                props.status === "Ongoing"
                                    ? "green"
                                    : "blue"
                        }}
                    >
                        {props.status}
                    </h3>
                </dd>

            </dl>

        </div>

    );

}

export default CohortDetails;