    module.exports = {
      apps: [
        {
          name: "next-bg",
          script: "./node_modules/next/dist/bin/next",
          args: "start",
          instances: "max", // or a specific number
          exec_mode: "cluster", // or "cluster_mode"
          env: {
            NODE_ENV: "production",
            PORT: 3000, // Or your desired port
          },
        },
      ],
    };