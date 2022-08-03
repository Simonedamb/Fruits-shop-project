const missingSettingPort="Warning: No value set for this enviroment variable";

const config={
    "PORT":process.env.PORT || missingSettingPort
};


export default  config;
