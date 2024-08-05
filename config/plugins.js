module.exports = ({ env }) => ({
    // ...
    upload: {
      config: {
        // provider: 'cloudinary',
        provider: 'local',
        providerOptions: {
          sizeLimit: 500 * 1024 * 1024, // 5 MB
      
          localServer: {},
          // cloud_name: env('CLOUDINARY_NAME'),
          // api_key: env('CLOUDINARY_KEY'),
          // api_secret: env('CLOUDINARY_SECRET'),
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
    
  
    graphql: {
      enabled: true,
      config: {
        playgroundAlways: true,
        defaultLimit: 10,
        maxLimit: 20,
        apolloServer: {
          tracing: true,
        },
      }
    }
    // ...
  });
