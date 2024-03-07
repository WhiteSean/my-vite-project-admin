import { createI18n } from 'vue-i18n';
import en from './en-US';
import ch from './zh-CN';

const defaultLocal = localStorage.getItem('sean-local') ?? 'zh-CN';
export const LOCAL_OPTIONS = [
  {
    label: '中文',
    value: 'zh-CN'
  },
  {
    label: '英文',
    value: 'en-US'
  }
];

const ii8n = createI18n({
  legacy: false,
  locale: defaultLocal,
  fallbackLocale: 'zh-CN',
  messages: {
    'zh-CN': ch,
    'en-US': en
  }
});

export default ii8n;