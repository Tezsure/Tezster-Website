function __CopyText(elemId) {
    const text = document.getElementById(elemId).innerText;
    navigator.clipboard.writeText(text.trim());
}

async function GetMainnetNodes() {
    try {
        const spinner = document.getElementById('spinner_mainnet');
        spinner.classList.add('rotating');
        const config = {
            method: 'get',
            url: 'https://mainnet.tezster.tech/chains/main/blocks/head',
            headers: {},
        };
        const response = await axios(config);
        const protocol_mainnet = response.data.protocol;
        const chain_id_mainnet = response.data.chain_id;
        const block_hash_mainnet = response.data.hash;
        const cycle_mainnet = response.data.metadata.level.cycle;
        const level_mainnet = response.data.header.level;
        const baker_mainnet = response.data.metadata.baker;
        document.getElementById(
            'protocol_mainnet'
        ).innerText = protocol_mainnet;
        document.getElementById(
            'chain_id_mainnet'
        ).innerText = chain_id_mainnet;
        document.getElementById(
            'block_hash_mainnet'
        ).innerText = block_hash_mainnet;
        document.getElementById('cycle_mainnet').innerText = cycle_mainnet;
        document.getElementById('level_mainnet').innerText = level_mainnet;
        document.getElementById('baker_mainnet').innerText = baker_mainnet;

        setTimeout(() => {
            spinner.classList.remove('rotating');
        }, 1000);
        return;
    } catch (error) {
        document.getElementById('protocol_mainnet').innerText = 'N/A';
        document.getElementById('chain_id_mainnet').innerText = 'N/A';
        document.getElementById('block_hash_mainnet').innerText = 'N/A';
        document.getElementById('cycle_mainnet').innerText = 'N/A';
        document.getElementById('level_mainnet').innerText = 'N/A';
        document.getElementById('baker_mainnet').innerText = 'N/A';
        const spinner = document.getElementById('spinner_mainnet');
        setTimeout(() => {
            spinner.classList.remove('rotating');
        }, 1000);
        return;
    }
}

async function GetTestnetNodes() {
    try {
        const spinner = document.getElementById('spinner_testnet');
        spinner.classList.add('rotating');
        const config = {
            method: 'get',
            url: 'https://testnet.tezster.tech/chains/main/blocks/head',
            headers: {},
        };
        const response = await axios(config);
        const protocol_testnet = response.data.protocol;
        const chain_id_testnet = response.data.chain_id;
        const block_hash_testnet = response.data.hash;
        const cycle_testnet = response.data.metadata.level.cycle;
        const level_testnet = response.data.header.level;
        const baker_testnet = response.data.metadata.baker;
        document.getElementById(
            'protocol_testnet'
        ).innerText = protocol_testnet;
        document.getElementById(
            'chain_id_testnet'
        ).innerText = chain_id_testnet;
        document.getElementById(
            'block_hash_testnet'
        ).innerText = block_hash_testnet;
        document.getElementById('cycle_testnet').innerText = cycle_testnet;
        document.getElementById('level_testnet').innerText = level_testnet;
        document.getElementById('baker_testnet').innerText = baker_testnet;

        setTimeout(() => {
            spinner.classList.remove('rotating');
        }, 1000);
        return;
    } catch (error) {
        document.getElementById('protocol_testnet').innerText = 'N/A';
        document.getElementById('chain_id_testnet').innerText = 'N/A';
        document.getElementById('block_hash_testnet').innerText = 'N/A';
        document.getElementById('cycle_testnet').innerText = 'N/A';
        document.getElementById('level_testnet').innerText = 'N/A';
        document.getElementById('baker_testnet').innerText = 'N/A';
        const spinner = document.getElementById('spinner_testnet');
        setTimeout(() => {
            spinner.classList.remove('rotating');
        }, 1000);
        return;
    }
}

async function GetFlorenceNodes() {
    try {
        const spinner = document.getElementById('spinner_florence');
        spinner.classList.add('rotating');
        const config = {
            method: 'get',
            url: 'https://florence.tezster.tech/chains/main/blocks/head',
            headers: {},
        };
        const response = await axios(config);
        const protocol_testnet = response.data.protocol;
        const chain_id_testnet = response.data.chain_id;
        const block_hash_testnet = response.data.hash;
        const cycle_testnet = response.data.metadata.level.cycle;
        const level_testnet = response.data.header.level;
        const baker_testnet = response.data.metadata.baker;
        document.getElementById(
            'protocol_florence'
        ).innerText = protocol_testnet;
        document.getElementById(
            'chain_id_florence'
        ).innerText = chain_id_testnet;
        document.getElementById(
            'block_hash_florence'
        ).innerText = block_hash_testnet;
        document.getElementById('cycle_florence').innerText = cycle_testnet;
        document.getElementById('level_florence').innerText = level_testnet;
        document.getElementById('baker_florence').innerText = baker_testnet;

        setTimeout(() => {
            spinner.classList.remove('rotating');
        }, 1000);
        return;
    } catch (error) {
        document.getElementById('protocol_florence').innerText = 'N/A';
        document.getElementById('chain_id_florence').innerText = 'N/A';
        document.getElementById('block_hash_florence').innerText = 'N/A';
        document.getElementById('cycle_florence').innerText = 'N/A';
        document.getElementById('level_florence').innerText = 'N/A';
        document.getElementById('baker_florence').innerText = 'N/A';
        const spinner = document.getElementById('spinner_florence');
        setTimeout(() => {
            spinner.classList.remove('rotating');
        }, 1000);
        return;
    }
}

function applicationStatus() {
    Promise.all([GetMainnetNodes(), GetTestnetNodes(), GetFlorenceNodes()]);
}

function InitialLoad() {
    document.getElementById('protocol_mainnet').innerText = 'please wait...';
    document.getElementById('chain_id_mainnet').innerText = 'please wait...';
    document.getElementById('block_hash_mainnet').innerText = 'please wait...';
    document.getElementById('cycle_mainnet').innerText = 'please wait...';
    document.getElementById('level_mainnet').innerText = 'please wait...';
    document.getElementById('baker_mainnet').innerText = 'please wait...';

    document.getElementById('protocol_testnet').innerText = 'please wait...';
    document.getElementById('chain_id_testnet').innerText = 'please wait...';
    document.getElementById('block_hash_testnet').innerText = 'please wait...';
    document.getElementById('cycle_testnet').innerText = 'please wait...';
    document.getElementById('level_testnet').innerText = 'please wait...';
    document.getElementById('baker_testnet').innerText = 'please wait...';

    document.getElementById('protocol_florence').innerText = 'please wait...';
    document.getElementById('chain_id_florence').innerText = 'please wait...';
    document.getElementById('block_hash_florence').innerText = 'please wait...';
    document.getElementById('cycle_florence').innerText = 'please wait...';
    document.getElementById('level_florence').innerText = 'please wait...';
    document.getElementById('baker_florence').innerText = 'please wait...';

    setTimeout(() => {
        return Promise.all([
            GetMainnetNodes(),
            GetTestnetNodes(),
            GetFlorenceNodes(),
        ]);
    }, 100);
    setInterval(() => {
        return applicationStatus();
    }, 20000);
}

window.onload = InitialLoad();
