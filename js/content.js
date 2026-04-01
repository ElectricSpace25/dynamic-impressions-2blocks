// --- Screener ---
export const screenerContent = {
    title: "Welcome to the experiment!",
    elements:
        [
            {
                type: "html",
                name: "instructions",
                html: "<p>Please answer the following questions to determine your eligibility.</p>",
            },
            {
                type: "radiogroup",
                name: "english",
                title: "Are you fluent in English?",
                choices: ["Yes", "No"],
                isRequired: true
            },
            {
                type: "radiogroup",
                name: "attention_check",
                title: "Please read the following instructions carefully",
                description: "Recent research on decision making has shown that choices are affected by political party affiliation. To help us understand how people from different backgrounds make decisions, we are interested in information about you. Specifically, we want to know if you actually read any of the instructions we give at the beginning of our survey; if not, some results may not tell us very much about decision making and perception in the real world. To show that you have read the instructions, please ignore the questions about political party affiliation below and simply select \"Other\" at the bottom.",
                choices: ["Democratic", "Republican", "Independent", "Libertarian", "Green Party", "Other"],
                isRequired: true
            }
        ]
};

// --- Instructions ---

export const impressionInstructionsContent = {
    title: "Section Instructions",
    pages: [
        {
            title: "Focusing on Personality and Mental States",
            elements: [
                {
                    type: "html",
                    html: `  
                        <p>In this study, we are interested in how we form impressions of other people. This section is focused on personality traits and mental states.</p>
                        <p>Your job in this section involves two main steps:</p>
                        <div class="callout-box">
                            <ol class="bold-numbers">
                                <li>View a video introducing you to a person and write down impressions of the speaker.</li>
                                <li>Form a final impression of the speaker in the video.</li>
                            </ol>
                        </div>
                        <p>You will repeat these steps for each video in this block.</p>
                        <p>In the next few pages, you will learn more about each step.</p>
                    `
                }
            ]
        },
        {
            title: "Step 1: Watch and describe the person's personality traits and mental states",
            elements: [
                {
                    type: "html",
                    html: `
                        <video width="100%" autoplay loop muted src="assets/instruct/submitting_impression.mp4"></video>
                        <p>Pause the video whenever you <b>notice a new characteristic</b> about the person or think of a <b>new way to describe them.</b> Pause by clicking anywhere on the video or pressing the spacebar.</p>
                        <p><b>Enter one word at a time,</b> but you can enter multiple words each time you pause (see video). For example, if you feel like the person is being an annoying student, pause and enter “annoying” and “student” separately. Order does not matter. You can remove words before submitting by clicking the "X" next to the word.</p>
                        <p>Enter whatever comes to mind spontaneously. There are no limits on what you enter! We only ask that you <b>pause and describe the person multiple times.</b> Please note there is a minimum amount of time that needs to pass between each pause video (2 seconds).</p>
                        <div class="callout-box">
                            <p>Based on past experience, <b>we expect you will pause 2-5 times per video.</b></p>
                        </div>
                        `
                }
            ]
        },
        {
            title: "Step 2: Form a final impression",
            elements: [
                {
                    type: "html",
                    html: `
                        <video width="100%" autoplay loop muted src="assets/instruct/final_impression.mp4"></video>
                        <p>Form your final impression of the speaker. <b>Think of this as a list of words you'd use to describe this person to someone else, your summary impression.</b></p>
                        <p>Once again, enter one word at a time, for as many words as you'd like.</p>
                    `
                }
            ]
        }
    ]
};

export const bodyLanguageInstructionsContent = {
    title: "Section Instructions",
    pages: [
        {
            title: "Focusing on Body Language",
            elements: [
                {
                    type: "html",
                    html: `  
                        <p>In this study, we are interested in how we form impressions of other people. This section is focused on body language.</p>
                        <p>Your job in this section involves two main steps:</p>
                        <div class="callout-box">
                            <ol class="bold-numbers">
                                <li>View a video introducing you to a person and write down the body language, gestures, or physical movements you notice.</li>
                                <li>Summarize the overall physical mannerisms of the speaker in the entire video.</li>
                            </ol>
                        </div>
                        <p>You will repeat these steps for each video in this block.</p>
                        <p>In the next few pages, you will learn more about each step.</p>
                    `
                }
            ]
        },
        {
            title: "Step 1: Watch and describe the speaker's body language",
            elements: [
                {
                    type: "html",
                    html: `
                        <video width="100%" autoplay loop muted src="assets/instruct/submitting_body.mp4"></video>
                        <p>Pause the video whenever you <b>notice a gesture, change in posture, or specific movement</b> or think of a <b>new way to describe their physical behavior.</b> Pause by clicking anywhere on the video or pressing the spacebar.</p>
                        <p><b>Enter one word at a time,</b> but you can enter multiple words each time you pause (see video). For example, if you notice the person is "fidgeting" and has "tense shoulders," pause and enter those descriptors separately. Order does not matter. You can remove words before submitting by clicking the "X" next to the word.</p>
                        <p>Enter whatever comes to mind spontaneously. There are no limits on what you enter! We only ask that you <b>pause and describe the person multiple times.</b> Please note there is a minimum amount of time that needs to pass between each pause video (2 seconds).</p>
                        <div class="callout-box">
                            <p>Based on past experience, <b>we expect you will pause 2-5 times per video.</b></p>
                        </div>
                        `
                }
            ]
        },
        {
            title: "Step 2: Describe the speaker's physical mannerisms",
            elements: [
                {
                    type: "html",
                    html: `
                        <video width="100%" autoplay loop muted src="assets/instruct/final_body.mp4"></video>
                        <p>Form your final impression of the speaker's body language. <b>Think of this as a list of words you'd use to describe this person's body language to someone else, your summary impression.</b></p>
                        <p>Once again, enter one word at a time, for as many words as you'd like.</p>
                    `
                }
            ]
        }
    ]
};

// --- Audio Check ---
export const audioCheckContent = {
    title: "Audio Check",
    completeText: "Submit",
    elements: [
        {
            type: "panel",
            elements: [
                {
                    type: "html",
                    html: `<p>In the audio clip below, you will hear a sequence of five numbers. Please type those numbers in the box to continue.<p style="color: red">Please make sure your sound is on.</p><audio controls src="assets/audiocheck.wav"></audio>`
                },
                {
                    type: "text",
                    name: "audio_check",
                    title: "Press play and enter the numbers you hear.",
                    inputType: "number",
                    isRequired: true,
                    validators: [
                        {
                            type: "expression",
                            text: "Incorrect. Please listen carefully and try again.",
                            expression: "{audio_check} == 42359"
                        }
                    ]
                },
            ]
        }
    ]
};


// --- Demographics ---
export const demographicsContent = {
    pages: [
        {
            title: "Demographics",
            elements:
                [
                    {
                        type: "text",
                        name: "age",
                        title: "What is your age?",
                        inputType: "number",
                        isRequired: true
                    },
                    {
                        type: "checkbox",
                        name: "gender",
                        title: "What gender do you identify with? (Select all that apply)",
                        choices: ["Male", "Female", "Transgender", "Non-binary", "Not otherwise specified", "I do not wish to provide this information"],
                        isRequired: true
                    },
                    {
                        type: "checkbox",
                        name: "race",
                        title: "What race/ethnicity do you identify with? (Select all that apply)",
                        choices: ["American Indian or Alaska Native", "Asian", "Black or African-American", "Native Hawaiian or Other Pacific Islander", "White", "Latino", "Other"],
                        isRequired: true
                    },
                    {
                        type: "radiogroup",
                        name: "education",
                        title: "What is the highest level of education you have received?",
                        choices: ["Less than High School", "High School Diploma", "Some College", "Associate's Degree", "Bachelor's Degree", "Some Graduate School", "Master's Degree", "Doctoral Degree"],
                        isRequired: true
                    }
                ]
        },
        {
            title: "Feedback",
            completeText: "Submit",
            elements:
                [
                    {
                        type: "comment",
                        name: "feedback",
                        title: "Please let us know if any part of the study was confusing, unclear, or in need of improvement. We appreciate your feedback greatly!",
                    }
                ]
        }
    ]
};

// --- Finished ---
export const finishedContent = {
    title: "Study Completed",
    completeText: "Click here to return to Prolific",
    elements:
        [
            {
                type: "html",
                html: "<p>Thank you for participating in the study!</p>",
            }
        ]
};