import React, { useState, useEffect } from 'react'

const RocketLauncher = (props) => {
    // vanilla js sectionp
let [count, setCount] = useState(300000);

useEffect(() => {
    // initial console.log
    console.log('Rocket launcher mounted')

    // subtracts 1 from the count and console logs it
    const countdown = () => {
        setCount(count - 1);
        console.log(count)
    } 

    // do the countdown every 1 sec.
    let interval = setInterval(countdown, 1000)

    // clean up function for the above code
    return () => {
        console.log('Rocket launcher unmounted')
        clearInterval(interval)
        }
    });

    // jsx section
    return (
        <p>Rocket launcher is counting down</p>
        )
}

export default RocketLauncher 