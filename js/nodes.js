function __CopyText(elemId) {
    const text = document.getElementById(elemId).innerText;
    navigator.clipboard.writeText(text.trim());
}

async function GetMainnetNodes() {
    try {
        const spinner = document.getElementById('spinner_mainnet');
        spinner.classList.add("rotating");
        const config = {
            method: 'get',
            url: 'https://cors-anywhere.herokuapp.com/https://api.tzstats.com/tables/block?time.gte=today&limit=1',
            headers: {}
        };
        const response = await axios(config);
        const LastBlock = response.data[0][4];
        const BlockTime = response.data[0][7];
        document.getElementById('block_level_mainnet').innerText = LastBlock.toString();
        document.getElementById('last_block_mainnet').innerText = new Date(BlockTime).toString();
        setTimeout(() => {
            spinner.classList.remove("rotating")
        }, 1000);
        return;
    } catch (error) {
        document.getElementById('block_level_mainnet').innerText = 'N/A';
        document.getElementById('last_block_mainnet').innerText = 'N/A';
        const spinner = document.getElementById('spinner_mainnet');
        setTimeout(() => {
            spinner.classList.remove("rotating")
        }, 1000);
        return;
    }
}

async function GetDelphinetNodes() {
    try {
        const spinner = document.getElementById('spinner_delphinet');
        spinner.classList.add("rotating");
        const config = {
            method: 'get',
            url: 'https://cors-anywhere.herokuapp.com/https://api.delphi.tzstats.com/tables/block?time.gte=today&limit=1',
            headers: {}
        };
        const response = await axios(config);
        const LastBlock = response.data[0][4];
        const BlockTime = response.data[0][7];
        document.getElementById('block_level_delphinet').innerText = LastBlock.toString();
        document.getElementById('last_block_delphinet').innerText = new Date(BlockTime).toString();
        setTimeout(() => {
            spinner.classList.remove("rotating")
        }, 1000);
        return;
    } catch (error) {
        document.getElementById('block_level_delphinet').innerText = 'N/A';
        document.getElementById('last_block_delphinet').innerText = 'N/A';
        const spinner = document.getElementById('spinner_delphinet');
        setTimeout(() => {
            spinner.classList.remove("rotating")
        }, 1000);
        return;
    }
}

window.onload = function () {
    document.getElementById('block_level_delphinet').innerText = "please wait...";
    document.getElementById('last_block_delphinet').innerText = "please wait...";
    document.getElementById('block_level_mainnet').innerText = "please wait...";
    document.getElementById('last_block_mainnet').innerText = "please wait...";
    Promise.all([GetMainnetNodes(), GetDelphinetNodes()])
}