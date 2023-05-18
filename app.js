const API_KEY = "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"

async function fetchData() {

    const response = await fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            model: "text-davinci-003",
            prompt: "hello, are you a piranha?",
            max_tokens: 7
        })
    })

    const data = await response.json();
    console.log(data)
}

fetchData()