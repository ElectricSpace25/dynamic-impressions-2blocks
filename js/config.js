export const config = {

    // Video stimuli filepath
    VIDEO_PATH: "assets/stimuli",

    // When enabled, shuffles order of all videos
    // Note: this overrides ALL other shuffle parameters
    SHUFFLE_ALL: false,

    // When enabled, shuffles the order of the video lists
    SHUFFLE_LIST_ORDER: false,

    // When enabled, ensures that if a participant sees a video from List A, they won't see the corresponding version at the same index in List B (or any other list)
    // See README for more information
    EXCLUSIVE_INDEX_MODE: true,

    // Message shown to participants before redirection upon successful completion of the study
    COMPLETION_MESSAGE: "You will be redirected to Prolific shortly!",
    
    // Link participants are redirected to 2 seconds after seeing the completion message
    COMPLETION_LINK: "https://app.prolific.co/submissions/complete?cc=????????",

    // Message shown to participants before redirection upon early termination of the study
    FAILURE_MESSAGE: "<p>Sorry, you are not eligible for the study.</p><p>You will be redirected to Prolific shortly.</p>",

    // Link participants are redirected to 2 seconds after seeing the failure message
    FAILURE_LINK: "https://app.prolific.co/submissions/complete?cc=????????",

    // When enabled, logs debug messages to console
    DEBUG_LOGS: false,

    // When enabled, saves data locally
    DEBUG_SAVE: false
};

export const videoLists = [
    {
        condition: "body", // The condition name saved in data
        selectionNum: 3, // How many videos to select from this list
        shuffle: true, // Whether to shuffle the order of the videos or not (overriden by SHUFFLE_ALL)
        videos: [
            "video1.mp4",
            "video2.mp4",
            "video3.mp4",
            "video4.mp4",
            "video5.mp4",
            "video6.mp4",
            "video7.mp4",
            "video8.mp4",
            "video9.mp4",
            "video10.mp4",
            "video11.mp4",
            "video12.mp4"
        ]
    },
    {
        condition: "impression",
        selectionNum: 3,
        shuffle: true,
        videos: [
            "video1.mp4",
            "video2.mp4",
            "video3.mp4",
            "video4.mp4",
            "video5.mp4",
            "video6.mp4",
            "video7.mp4",
            "video8.mp4",
            "video9.mp4",
            "video10.mp4",
            "video11.mp4",
            "video12.mp4"
        ]
    }
];