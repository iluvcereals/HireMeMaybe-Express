async function helloWorld(_, res) {
    res.json({ msg: 'Hello World baby' });
}

module.exports = { helloWorld };
