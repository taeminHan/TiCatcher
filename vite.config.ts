import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      // 아래와 같이 추가적인 별칭을 필요에 따라 설정
      'components': path.resolve(__dirname, 'src/components'),
      'utils': path.resolve(__dirname, 'src/lib/utils'),
      'ui': path.resolve(__dirname, 'src/components/ui'),
      'lib': path.resolve(__dirname, 'src/lib'),
      'hooks': path.resolve(__dirname, 'src/hooks'),
    },
  },
});