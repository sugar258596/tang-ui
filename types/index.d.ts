import type { App, ComputedRef, Ref } from 'vue';

export type ComponentType = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
export type PositionType = 'top' | 'center' | 'bottom';

export interface ToastOptions {
  message: string;
  type?: ComponentType;
  duration?: number;
  position?: PositionType;
  mask?: boolean;
  icon?: string;
}

export interface ThemeConfig {
  primaryColor: string;
  successColor: string;
  warningColor: string;
  dangerColor: string;
  infoColor: string;
  textColor: string;
  borderColor: string;
  backgroundColor: string;
  borderRadius: string;
  fontSize: string;
}

export interface ModalOptions {
  title?: string;
  content: string;
  showCancel?: boolean;
  cancelText?: string;
  confirmText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

export interface LocaleMessages {
  [key: string]: string | LocaleMessages;
}

export interface ModularLocaleMessages {
  [moduleName: string]: Record<string, string>;
}

export type LocaleCode = 'zh-CN' | 'en-US' | 'zh-TW' | string;

export interface I18nConfig {
  locale: LocaleCode;
  fallbackLocale: LocaleCode;
  messages: Record<string, LocaleMessages>;
}

export type TranslateParams = Record<string, string | number>;

export interface UseI18nReturn {
  $t: (key: string, params?: TranslateParams) => string;
  locale: ComputedRef<string>;
  availableLocales: ComputedRef<string[]>;
  setLocale: (locale: string) => boolean;
}

export interface ThemeController {
  theme: ComputedRef<ThemeConfig>;
  isDarkMode: Ref<boolean>;
  setTheme: (theme: Partial<ThemeConfig>) => void;
  resetTheme: () => void;
  toggleDarkMode: (dark?: boolean) => void;
  getColor: (type: string) => string;
  loadTheme: () => void;
  defaultTheme: ThemeConfig;
}

export interface ToastController {
  isShowing: Ref<boolean>;
  currentToast: Ref<ToastOptions | null>;
  toastQueue: Ref<ToastOptions[]>;
  show: (options: string | ToastOptions) => void;
  success: (message: string, duration?: number) => void;
  error: (message: string, duration?: number) => void;
  warning: (message: string, duration?: number) => void;
  info: (message: string, duration?: number) => void;
  loading: (message?: string) => () => void;
  hide: () => void;
  clear: () => void;
  setDefaults: (options: Partial<ToastOptions>) => void;
  getQueueLength: () => number;
}

export interface ModalController {
  isVisible: Ref<boolean>;
  currentModal: Ref<ModalOptions | null>;
  modalQueue: Ref<ModalOptions[]>;
  show: (options: ModalOptions) => Promise<boolean>;
  confirm: (content: string, title?: string) => Promise<boolean>;
  alert: (content: string, title?: string) => Promise<boolean>;
  prompt: (title: string, placeholder?: string, defaultValue?: string) => Promise<string | null>;
  loading: (title?: string, mask?: boolean) => () => void;
  actionSheet: (items: string[], title?: string) => Promise<number>;
  close: () => void;
  clear: () => void;
  getQueueLength: () => number;
}

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS' | 'HEAD' | 'TRACE' | 'CONNECT';

export interface HttpInitOptions {
  baseURL: string;
  header?: Record<string, any>;
  showLoading?: boolean;
  autoAuth?: boolean;
  timeout?: number;
  [key: string]: any;
}

export interface HttpRequestOptions {
  url: string;
  data?: Record<string, any> | null;
  header?: Record<string, any> | null;
  method?: HttpMethod;
  timeout?: number;
  showLoading?: boolean;
  loadingText?: string;
  disableAuth?: boolean;
  [key: string]: any;
}

export interface ResponseData<T = any> {
  code: number;
  msg: string;
  data: T;
  count: number;
}

export interface DataResponse<T = any> {
  data: T | [];
  total?: number;
}

export interface HttpInterceptors {
  request?: (options: HttpRequestOptions) => HttpRequestOptions;
  response?: <T>(response: ResponseData<T>, options: HttpRequestOptions) => DataResponse<T> | T;
  error?: (err: any, options: HttpRequestOptions) => void;
}

export class HttpRequest {
  constructor(options: HttpInitOptions);
  setInterceptors(interceptors: HttpInterceptors): void;
  get<T>(url: string, data?: Record<string, any> | null, options?: HttpRequestOptions | null): Promise<T>;
  post<T>(url: string, data?: Record<string, any> | null, options?: HttpRequestOptions | null): Promise<T>;
  put<T>(url: string, data?: Record<string, any> | null, options?: HttpRequestOptions | null): Promise<T>;
  delete<T>(url: string, data?: Record<string, any> | null, options?: HttpRequestOptions | null): Promise<T>;
  upload<T>(url: string, data?: Record<string, any> | null, options?: HttpRequestOptions | null): Promise<T>;
  postFormData<T>(url: string, data?: Record<string, any> | null, options?: HttpRequestOptions | null): Promise<T>;
}

export function hexToRgb(hex: string): { r: number; g: number; b: number } | null;
export function rgbToHex(r: number, g: number, b: number): string;
export function darken(color: string, amount: number): string;
export function lighten(color: string, amount: number): string;
export function addOpacity(color: string, opacity: number): string;
export function isLightColor(color: string): boolean;

export function isEmpty(value: any): boolean;
export function isPhone(phone: string): boolean;
export function isEmail(email: string): boolean;
export function isIdCard(idCard: string): boolean;
export function isUrl(url: string): boolean;
export function isChinese(str: string): boolean;
export function isNumber(value: any): boolean;
export function isInteger(value: any): boolean;
export function isPositiveInteger(value: any): boolean;
export function isDecimal(value: any, decimal?: number): boolean;
export function isPasswordStrong(password: string, level?: number): boolean;
export function isBankCard(cardNo: string): boolean;
export function isPlateNo(plateNo: string): boolean;

export function debounce<T extends (...args: any[]) => any>(fn: T, delay?: number): (...args: Parameters<T>) => void;
export function throttle<T extends (...args: any[]) => any>(fn: T, delay?: number): (...args: Parameters<T>) => void;
export function deepClone<T>(obj: T): T;
export function generateId(prefix?: string): string;
export function formatFileSize(bytes: number, decimals?: number): string;
export function formatDate(date: Date | number, format?: string): string;
export function getUrlParams(url: string): Record<string, string>;
export function objectToUrlParams(obj: Record<string, any>): string;
export function unique<T>(arr: T[]): T[];
export function chunk<T>(arr: T[], size: number): T[][];
export function sleep(ms: number): Promise<void>;
export function random(min: number, max: number): number;
export function randomString(length: number): string;

export function getRect(selector: string, instance: any): Promise<any>;
export function getRectAll(selector: string, instance: any): Promise<any[]>;
export function getScrollOffset(selector: string, instance: any): Promise<any>;
export function getSystemInfo(): any;
export function pxToRpx(px: number): number;
export function rpxToPx(rpx: number): number;
export function addUnit(value: string | number, unit?: string): string;
export function getStyle(element: any, property: string): string;
export function setStyle(element: any, property: string, value: string): void;
export function setStyles(element: any, styles: Record<string, string>): void;
export function supportsCss(property: string): boolean;
export function getComputedStyle(element: any): any;
export function isInViewport(rect: any, offset?: number): boolean;
export function getNodeInfo(selector: string, instance: any): Promise<any>;
export function smoothScrollTo(scrollTop: number, duration?: number, selector?: string): void;
export function getSafeArea(): any;

export function useTheme(): ThemeController;
export function getThemeInstance(): ThemeController;

export function useToast(): ToastController;
export function getToastInstance(): ToastController;
export function showToast(options: string | ToastOptions): void;
export function showSuccess(message: string, duration?: number): void;
export function showError(message: string, duration?: number): void;
export function showWarning(message: string, duration?: number): void;
export function showInfo(message: string, duration?: number): void;
export function showLoadingToast(message?: string): () => void;
export function hideToast(): void;
export function clearToast(): void;

export function useModal(): ModalController;
export function getModalInstance(): ModalController;
export function showConfirm(content: string, title?: string): Promise<boolean>;
export function showAlert(content: string, title?: string): Promise<boolean>;
export function showLoading(title?: string, mask?: boolean): () => void;
export function showActionSheet(items: string[], title?: string): Promise<number>;

export function useI18n(): UseI18nReturn;
export function setLanguage(locale: string): boolean;
export function registerLocale(locale: string, messages: ModularLocaleMessages): void;
export function registerLocaleWithMode(
  locale: string,
  messages: ModularLocaleMessages,
  mode: 'merge' | 'replace'
): void;
export function replaceLocale(locale: string, messages: ModularLocaleMessages): void;
export function getCurrentLocale(): string;
export function getAvailableLocales(): string[];

export const version: string;
export const components: string[];

declare const TangUI: {
  install(app: App | any): void;
  version: string;
  components: string[];
};

export default TangUI;
