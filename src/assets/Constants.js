let icon = require('./icon.png');
const agent = {
    teamName: 'Powr of you chatbot',
    imageUrl: icon
};
const steps =
[
    {
        msg: ["Welcome to Powr of You! Let's get to know each other a bit better...", "To which gender identity do you most identify? Type the number of your choice\n1. Male\n2. Female\n3. Other"],
        response: {1:"Male", 2: "Female", 3: "Other"}
    },
    {
        msg: ["How many people live in your household?\n1. one\n2. Two\n3. Three\n4. Four\n5. More than five"],
        response: {1:"One", 2: "Two", 3: "Three", 4: "Four", 5: "More than five"}
    },
    {
        msg: ["Thanks for all your inputs, you're 50% done with your profile.\n" +
        "Shall we continue and set up your profile completely?\n1. Yes\n2. No"],
        response: {1:"Yes", 2: "No"}
    },
    {
        msg: ["What is your marital status?\n1. Single\n2. Married\n3. Widowed\n4. Divorced\n5. Separated"],
        response: {1:"Single", 2: "Married", 3: "Widowed", 4: "Divorced", 5: "Separated"}
    },
    {
        msg: ["Do you have a pet?\n1. Yes\n2. No"],
        response: {1:"Yes", 2: "No"}
    },
    {
        msg: ["Congrats! Your profile is 100% loaded... let's get going!"],
        response: {}
    },
    {
        msg: ["Ok sure. We'll come back\n" +
        "to the profile later. Please remember that we can best match\n" +
        "rewards to you\n" +
        "based on your profile, so please complete it from your Your Profile menu\n" +
        "soon!"],
        response: {}
    },
];

const FINISHED_STEPS = 5;
const INCOMPLETE_STEPS = 6;
const BRANCHING_CONDITION = 2;

export {steps, agent, FINISHED_STEPS, INCOMPLETE_STEPS, BRANCHING_CONDITION}