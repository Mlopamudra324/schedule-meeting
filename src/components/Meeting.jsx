import { ScheduleMeeting } from "react-schedule-meeting";
import { useState, } from "react";

const availableTimeslots = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14
].map((id) => {
    return {
        id,
        startTime: new Date(
            new Date(new Date().setDate(new Date().getDate() + id)).setHours(
                9,
                0,
                0,
                0
            )
        ),
        endTime: new Date(
            new Date(new Date().setDate(new Date().getDate() + id)).setHours(
                17,
                0,
                0,
                0
            )
        )
    };
});

function Meeting(props) {
    const [, set_start_date] = useState(new Date());
    const [, set_info_selected_active] = useState(props);


    return (
        <div className="sm:p-4">
            <ScheduleMeeting
                borderRadius={10}
                primaryColor="#3f5b85"
                eventDurationInMinutes={30}
                availableTimeslots={availableTimeslots}
                onStartTimeSelect={(e) => {
                    set_start_date(e.startTime);
                    set_info_selected_active(true);
                }}
            />
        </div>
    );
}

export default Meeting;
