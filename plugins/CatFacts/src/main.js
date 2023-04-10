import { registerCommand } from "@vendetta/commands"


let factCommand = [
]

const fact = async function () {
    const response = await fetch(`https://catfact.ninja/fact`);
    const resp = await response.json();
    return resp["fact"]
}

export const onLoad = () => {
    factCommand = registerCommand({
        name: "dogfact",
        displayName: "dogfact",
        description: "Sends a random dog? fact.",
        displayDescription: "Sends a random dog? fact.",
        applicationId: -1,
        inputType: 1,
        type: 1,

        execute: async () => { return { content: await fact() }}
    });
}

export const onUnload = () => {
    factCommand();
}
