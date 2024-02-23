module.exports = ({ env }) => ({
    "vercel-deploy": {
      enabled: true,
      config: {
        deployHook:
          "https://api.vercel.com/v1/integrations/deploy/prj_<deploy-hook>",
        apiToken: "weGHNOGnkFoXHLuniPQIhHZi",
        appFilter: "jeffersons-projects-52b3a927",
        teamFilter: "team_N2pI6pbMKUfk0l11Zfy0kA6T",
        roles: ["strapi-super-admin"],
      },
    },
  });
