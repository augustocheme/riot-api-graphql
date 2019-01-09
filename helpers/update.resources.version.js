const fs = require('fs');
const rp  = require('request-promise');
const compareVersions = require('compare-versions');


module.exports = {
    updateResourceVersions: function(){
        const url = 'https://ddragon.leagueoflegends.com/realms/br.json';
        let currentVersions = JSON.parse(fs.readFileSync(__dirname + '/../versions.json'));
        let latestVersions;
        rp(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            latestVersions = JSON.parse(body).n;
        }

            Object.keys(latestVersions).map((key, index) => {
                let currentVersion = currentVersions[key] !== '' ? currentVersions[key]: '1.0.0';
                if(compareVersions(currentVersion, latestVersions[key]) === -1){
                    console.log(`Updating ${key} version from ${currentVersion} to ${latestVersions[key]}`);
                    currentVersions[key] = latestVersions[key];
                }else{
                    console.log(`${key} version is already on the latest version`);
                }
            })

            fs.writeFileSync(__dirname + '/../versions.json', JSON.stringify(currentVersions, null, 2));  
        }); 
    }
}
    

    