// vite.config.ts
import { sentryVitePlugin } from "file:///Users/nanineprm/SMARTRMS-2024/node_modules/@sentry/vite-plugin/dist/esm/index.mjs";
import path from "node:path";
import { defineConfig } from "file:///Users/nanineprm/SMARTRMS-2024/node_modules/vite/dist/node/index.js";
import react from "file:///Users/nanineprm/SMARTRMS-2024/node_modules/@vitejs/plugin-react/dist/index.mjs";
import mkcert from "file:///Users/nanineprm/SMARTRMS-2024/node_modules/vite-plugin-mkcert/dist/mkcert.mjs";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    mkcert(),
    sentryVitePlugin({
      org: "smart-rms",
      project: "smart-rms-web-desktop",
      reactComponentAnnotation: { enabled: false }
    })
  ],
  resolve: {
    alias: [
      { find: /^~(.+)/, replacement: path.join(process.cwd(), "node_modules/$1") },
      { find: /^src(.+)/, replacement: path.join(process.cwd(), "src/$1") },
      { find: "@components", replacement: path.join(process.cwd(), "src/components") },
      { find: "@providers", replacement: path.join(process.cwd(), "src/providers") },
      { find: "@services", replacement: path.join(process.cwd(), "src/services") },
      { find: "@api", replacement: path.join(process.cwd(), "src/api") },
      { find: "@stores", replacement: path.join(process.cwd(), "src/stores") },
      { find: "@contexts", replacement: path.join(process.cwd(), "src/contexts") },
      { find: "@features", replacement: path.join(process.cwd(), "src/features") },
      { find: "@guards", replacement: path.join(process.cwd(), "src/guards") },
      { find: "@hocs", replacement: path.join(process.cwd(), "src/hocs") },
      { find: "@hooks", replacement: path.join(process.cwd(), "src/hooks") },
      { find: "@layouts", replacement: path.join(process.cwd(), "src/layouts") },
      { find: "@pages", replacement: path.join(process.cwd(), "src/pages") },
      { find: "@libs", replacement: path.join(process.cwd(), "src/libs") },
      { find: "@utils", replacement: path.join(process.cwd(), "src/utils") },
      { find: "@mock", replacement: path.join(process.cwd(), "mock") },
      { find: "@renderer", replacement: path.join(process.cwd(), "src") },
      { find: "@slices", replacement: path.join(process.cwd(), "src/slices") },
      { find: "@icons", replacement: path.join(process.cwd(), "src/icons") },
      { find: "@locales", replacement: path.join(process.cwd(), "src/locales") },
      { find: "@theme", replacement: path.join(process.cwd(), "src/theme") }
    ]
  },
  server: {
    port: 8080
  },
  preview: {
    port: 8080
  },
  build: {
    rollupOptions: {
      external: ["@azure/communication-chat", "@azure/communication-calling-effects"]
    },
    sourcemap: true
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvbmFuaW5lcHJtL1NNQVJUUk1TLTIwMjRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9uYW5pbmVwcm0vU01BUlRSTVMtMjAyNC92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvbmFuaW5lcHJtL1NNQVJUUk1TLTIwMjQvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBzZW50cnlWaXRlUGx1Z2luIH0gZnJvbSAnQHNlbnRyeS92aXRlLXBsdWdpbic7XG5pbXBvcnQgcGF0aCBmcm9tICdub2RlOnBhdGgnO1xuXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5pbXBvcnQgbWtjZXJ0IGZyb20gJ3ZpdGUtcGx1Z2luLW1rY2VydCc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIG1rY2VydCgpLFxuICAgIHNlbnRyeVZpdGVQbHVnaW4oe1xuICAgICAgb3JnOiAnc21hcnQtcm1zJyxcbiAgICAgIHByb2plY3Q6ICdzbWFydC1ybXMtd2ViLWRlc2t0b3AnLFxuICAgICAgcmVhY3RDb21wb25lbnRBbm5vdGF0aW9uOiB7IGVuYWJsZWQ6IGZhbHNlIH0sXG4gICAgfSksXG4gIF0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczogW1xuICAgICAgeyBmaW5kOiAvXn4oLispLywgcmVwbGFjZW1lbnQ6IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnbm9kZV9tb2R1bGVzLyQxJykgfSxcbiAgICAgIHsgZmluZDogL15zcmMoLispLywgcmVwbGFjZW1lbnQ6IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnc3JjLyQxJykgfSxcbiAgICAgIHsgZmluZDogJ0Bjb21wb25lbnRzJywgcmVwbGFjZW1lbnQ6IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnc3JjL2NvbXBvbmVudHMnKSB9LFxuICAgICAgeyBmaW5kOiAnQHByb3ZpZGVycycsIHJlcGxhY2VtZW50OiBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ3NyYy9wcm92aWRlcnMnKSB9LFxuICAgICAgeyBmaW5kOiAnQHNlcnZpY2VzJywgcmVwbGFjZW1lbnQ6IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnc3JjL3NlcnZpY2VzJykgfSxcbiAgICAgIHsgZmluZDogJ0BhcGknLCByZXBsYWNlbWVudDogcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdzcmMvYXBpJykgfSxcbiAgICAgIHsgZmluZDogJ0BzdG9yZXMnLCByZXBsYWNlbWVudDogcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdzcmMvc3RvcmVzJykgfSxcbiAgICAgIHsgZmluZDogJ0Bjb250ZXh0cycsIHJlcGxhY2VtZW50OiBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ3NyYy9jb250ZXh0cycpIH0sXG4gICAgICB7IGZpbmQ6ICdAZmVhdHVyZXMnLCByZXBsYWNlbWVudDogcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdzcmMvZmVhdHVyZXMnKSB9LFxuICAgICAgeyBmaW5kOiAnQGd1YXJkcycsIHJlcGxhY2VtZW50OiBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ3NyYy9ndWFyZHMnKSB9LFxuICAgICAgeyBmaW5kOiAnQGhvY3MnLCByZXBsYWNlbWVudDogcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdzcmMvaG9jcycpIH0sXG4gICAgICB7IGZpbmQ6ICdAaG9va3MnLCByZXBsYWNlbWVudDogcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdzcmMvaG9va3MnKSB9LFxuICAgICAgeyBmaW5kOiAnQGxheW91dHMnLCByZXBsYWNlbWVudDogcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdzcmMvbGF5b3V0cycpIH0sXG4gICAgICB7IGZpbmQ6ICdAcGFnZXMnLCByZXBsYWNlbWVudDogcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdzcmMvcGFnZXMnKSB9LFxuICAgICAgeyBmaW5kOiAnQGxpYnMnLCByZXBsYWNlbWVudDogcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdzcmMvbGlicycpIH0sXG4gICAgICB7IGZpbmQ6ICdAdXRpbHMnLCByZXBsYWNlbWVudDogcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdzcmMvdXRpbHMnKSB9LFxuICAgICAgeyBmaW5kOiAnQG1vY2snLCByZXBsYWNlbWVudDogcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdtb2NrJykgfSxcbiAgICAgIHsgZmluZDogJ0ByZW5kZXJlcicsIHJlcGxhY2VtZW50OiBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ3NyYycpIH0sXG4gICAgICB7IGZpbmQ6ICdAc2xpY2VzJywgcmVwbGFjZW1lbnQ6IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnc3JjL3NsaWNlcycpIH0sXG4gICAgICB7IGZpbmQ6ICdAaWNvbnMnLCByZXBsYWNlbWVudDogcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdzcmMvaWNvbnMnKSB9LFxuICAgICAgeyBmaW5kOiAnQGxvY2FsZXMnLCByZXBsYWNlbWVudDogcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdzcmMvbG9jYWxlcycpIH0sXG4gICAgICB7IGZpbmQ6ICdAdGhlbWUnLCByZXBsYWNlbWVudDogcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdzcmMvdGhlbWUnKSB9LFxuICAgIF0sXG4gIH0sXG4gIHNlcnZlcjoge1xuICAgIHBvcnQ6IDgwODAsXG4gIH0sXG4gIHByZXZpZXc6IHtcbiAgICBwb3J0OiA4MDgwLFxuICB9LFxuICBidWlsZDoge1xuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIGV4dGVybmFsOiBbJ0BhenVyZS9jb21tdW5pY2F0aW9uLWNoYXQnLCAnQGF6dXJlL2NvbW11bmljYXRpb24tY2FsbGluZy1lZmZlY3RzJ10sXG4gICAgfSxcblxuICAgIHNvdXJjZW1hcDogdHJ1ZSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE0USxTQUFTLHdCQUF3QjtBQUM3UyxPQUFPLFVBQVU7QUFFakIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sWUFBWTtBQUVuQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxpQkFBaUI7QUFBQSxNQUNmLEtBQUs7QUFBQSxNQUNMLFNBQVM7QUFBQSxNQUNULDBCQUEwQixFQUFFLFNBQVMsTUFBTTtBQUFBLElBQzdDLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxFQUFFLE1BQU0sVUFBVSxhQUFhLEtBQUssS0FBSyxRQUFRLElBQUksR0FBRyxpQkFBaUIsRUFBRTtBQUFBLE1BQzNFLEVBQUUsTUFBTSxZQUFZLGFBQWEsS0FBSyxLQUFLLFFBQVEsSUFBSSxHQUFHLFFBQVEsRUFBRTtBQUFBLE1BQ3BFLEVBQUUsTUFBTSxlQUFlLGFBQWEsS0FBSyxLQUFLLFFBQVEsSUFBSSxHQUFHLGdCQUFnQixFQUFFO0FBQUEsTUFDL0UsRUFBRSxNQUFNLGNBQWMsYUFBYSxLQUFLLEtBQUssUUFBUSxJQUFJLEdBQUcsZUFBZSxFQUFFO0FBQUEsTUFDN0UsRUFBRSxNQUFNLGFBQWEsYUFBYSxLQUFLLEtBQUssUUFBUSxJQUFJLEdBQUcsY0FBYyxFQUFFO0FBQUEsTUFDM0UsRUFBRSxNQUFNLFFBQVEsYUFBYSxLQUFLLEtBQUssUUFBUSxJQUFJLEdBQUcsU0FBUyxFQUFFO0FBQUEsTUFDakUsRUFBRSxNQUFNLFdBQVcsYUFBYSxLQUFLLEtBQUssUUFBUSxJQUFJLEdBQUcsWUFBWSxFQUFFO0FBQUEsTUFDdkUsRUFBRSxNQUFNLGFBQWEsYUFBYSxLQUFLLEtBQUssUUFBUSxJQUFJLEdBQUcsY0FBYyxFQUFFO0FBQUEsTUFDM0UsRUFBRSxNQUFNLGFBQWEsYUFBYSxLQUFLLEtBQUssUUFBUSxJQUFJLEdBQUcsY0FBYyxFQUFFO0FBQUEsTUFDM0UsRUFBRSxNQUFNLFdBQVcsYUFBYSxLQUFLLEtBQUssUUFBUSxJQUFJLEdBQUcsWUFBWSxFQUFFO0FBQUEsTUFDdkUsRUFBRSxNQUFNLFNBQVMsYUFBYSxLQUFLLEtBQUssUUFBUSxJQUFJLEdBQUcsVUFBVSxFQUFFO0FBQUEsTUFDbkUsRUFBRSxNQUFNLFVBQVUsYUFBYSxLQUFLLEtBQUssUUFBUSxJQUFJLEdBQUcsV0FBVyxFQUFFO0FBQUEsTUFDckUsRUFBRSxNQUFNLFlBQVksYUFBYSxLQUFLLEtBQUssUUFBUSxJQUFJLEdBQUcsYUFBYSxFQUFFO0FBQUEsTUFDekUsRUFBRSxNQUFNLFVBQVUsYUFBYSxLQUFLLEtBQUssUUFBUSxJQUFJLEdBQUcsV0FBVyxFQUFFO0FBQUEsTUFDckUsRUFBRSxNQUFNLFNBQVMsYUFBYSxLQUFLLEtBQUssUUFBUSxJQUFJLEdBQUcsVUFBVSxFQUFFO0FBQUEsTUFDbkUsRUFBRSxNQUFNLFVBQVUsYUFBYSxLQUFLLEtBQUssUUFBUSxJQUFJLEdBQUcsV0FBVyxFQUFFO0FBQUEsTUFDckUsRUFBRSxNQUFNLFNBQVMsYUFBYSxLQUFLLEtBQUssUUFBUSxJQUFJLEdBQUcsTUFBTSxFQUFFO0FBQUEsTUFDL0QsRUFBRSxNQUFNLGFBQWEsYUFBYSxLQUFLLEtBQUssUUFBUSxJQUFJLEdBQUcsS0FBSyxFQUFFO0FBQUEsTUFDbEUsRUFBRSxNQUFNLFdBQVcsYUFBYSxLQUFLLEtBQUssUUFBUSxJQUFJLEdBQUcsWUFBWSxFQUFFO0FBQUEsTUFDdkUsRUFBRSxNQUFNLFVBQVUsYUFBYSxLQUFLLEtBQUssUUFBUSxJQUFJLEdBQUcsV0FBVyxFQUFFO0FBQUEsTUFDckUsRUFBRSxNQUFNLFlBQVksYUFBYSxLQUFLLEtBQUssUUFBUSxJQUFJLEdBQUcsYUFBYSxFQUFFO0FBQUEsTUFDekUsRUFBRSxNQUFNLFVBQVUsYUFBYSxLQUFLLEtBQUssUUFBUSxJQUFJLEdBQUcsV0FBVyxFQUFFO0FBQUEsSUFDdkU7QUFBQSxFQUNGO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLGVBQWU7QUFBQSxNQUNiLFVBQVUsQ0FBQyw2QkFBNkIsc0NBQXNDO0FBQUEsSUFDaEY7QUFBQSxJQUVBLFdBQVc7QUFBQSxFQUNiO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
