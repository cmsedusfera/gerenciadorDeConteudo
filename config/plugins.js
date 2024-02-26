module.exports = ({ env }) => ({
    "vercel-deploy": {
      enabled: true,
      config: {
        deployHook:
          "https://api.vercel.com/v1/integrations/deploy/prj_8YoLH9OohSGyofplaZwukwBj43NX/fO6PlMK4UG",
        apiToken: "weGHNOGnkFoXHLuniPQIhHZi",
        appFilter: "gerenciador-de-conteudo",
        teamFilter: "team_N2pI6pbMKUfk0l11Zfy0kA6T",
        roles: ["strapi-super-admin"],
      },
    },
  });
