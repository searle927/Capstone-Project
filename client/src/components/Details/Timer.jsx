import React from 'react'

const Timer = () => {
    return (
        <section className="timer-container">
            <section className="timer">
                <div>
                    <span className="mdi mdi-calendar-clock timer-icon"></span>
                    <h2 className="countdown">Countdown Timer</h2>
                    <p className="cdpar">Countdown til our Wedding Day!</p>
                </div>
                <div>
                    <section>
                        <p>87</p>
                        <p><small>Months</small></p>
                    </section>
                    <span>:</span>
                    <section>
                        <p>87</p>
                        <p><small>Days</small></p>
                    </section>
                    <span>:</span>
                    <section>
                        <p>87</p>
                        <p><small>Hours</small></p>
                    </section>
                    <section>
                        <p>87</p>
                        <p><small>Minutes</small></p>
                    </section>
                </div>
            </section>
        </section>
    );
};

export default Timer
