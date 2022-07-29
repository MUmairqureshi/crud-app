import React, { useState } from 'react'
import { FaPencilAlt, FaTimes } from 'react-icons/fa';

import './form.css'
export function Formlist() {
    return (
        <>
            <div>
                <div className="task">
                    <div>
                        <p className="taskName">
                            <span className="textBold">Task Name:</span> wdw,qw,qwqw
                        </p>
                        <p className="taskDate"><span className="textBold">Date of Completion:</span>   2/12/31
                        </p>
                    </div>
                    <div>
                        <p><FaTimes className="delIcon" /></p>
                        <p><FaPencilAlt className="editIcon" /></p>
                    </div>
                </div>
            </div>

        </>
    )
}





































