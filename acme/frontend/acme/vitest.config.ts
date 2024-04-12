import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: [ 'vitest/*' ]
  },
  build: {
    rollupOptions: {
      plugins: [
        {
          name: 'disable-vite-plugin-import-analysis',
          buildStart() {
            this.warn(
              'Desabilitando a análise de importação do Vite para evitar avisos desnecessários.'
            );
          },
        },
      ],
    },
  },
})



