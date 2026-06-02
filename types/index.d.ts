import type { App, ComputedRef, Ref } from "vue";
import type { DefineComponent } from "vue";

declare module "tang-ui-x/components/*" {
  const component: DefineComponent<any, any, any>;
  export default component;
}

declare module "tang-ui-x/components/*/index.uvue" {
  const component: DefineComponent<any, any, any>;
  export default component;
}

export type ComponentType =
  | "default"
  | "primary"
  | "success"
  | "warning"
  | "danger"
  | "info";
export type PositionType = "top" | "center" | "bottom";

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

export type LocaleCode = "zh-CN" | "en-US" | "zh-TW" | string;
export type TranslateParams = Record<string, string | number>;

export interface I18nConfig {
  locale: LocaleCode;
  fallbackLocale: LocaleCode;
  messages: Record<string, LocaleMessages>;
}

export interface UseI18nReturn {
  $t: (key: string, params?: TranslateParams | null) => string;
  t: (key: string, params?: TranslateParams | null) => string;
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
  show: (options: string | ToastOptions, duration?: number | null) => void;
  success: (message: string, duration?: number | null) => void;
  error: (message: string, duration?: number | null) => void;
  warning: (message: string, duration?: number | null) => void;
  info: (message: string, duration?: number | null) => void;
  loading: (message?: string | null) => () => void;
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
  prompt: (
    title: string,
    placeholder?: string,
    defaultValue?: string,
  ) => Promise<string | null>;
  loading: (title?: string, mask?: boolean) => () => void;
  actionSheet: (items: string[], title?: string) => Promise<number>;
  close: () => void;
  clear: () => void;
  getQueueLength: () => number;
}

export type HttpMethod =
  | "GET"
  | "POST"
  | "PUT"
  | "DELETE"
  | "OPTIONS"
  | "HEAD"
  | "TRACE"
  | "CONNECT";

export interface HttpInitOptions {
  baseURL: string;
  header?: Record<string, any>;
  showLoading?: boolean;
  autoAuth?: boolean;
  timeout?: number;
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
  customError?: boolean;
  isTotal?: boolean;
}

export type HttpRequestExtraOptions = Omit<
  HttpRequestOptions,
  "url" | "data" | "method"
>;

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
  response?: (response: ResponseData<any>, options: HttpRequestOptions) => any;
  error?: (err: any, options: HttpRequestOptions) => void;
}

export class HttpRequest {
  constructor(options: HttpInitOptions);
  setInterceptors(interceptors: HttpInterceptors): void;
  get<T>(
    url: string,
    data?: Record<string, any> | null,
    options?: HttpRequestOptions | null,
  ): Promise<T>;
  post<T>(
    url: string,
    data?: Record<string, any> | null,
    options?: HttpRequestOptions | null,
  ): Promise<T>;
  put<T>(
    url: string,
    data?: Record<string, any> | null,
    options?: HttpRequestOptions | null,
  ): Promise<T>;
  delete<T>(
    url: string,
    data?: Record<string, any> | null,
    options?: HttpRequestOptions | null,
  ): Promise<T>;
  upload<T>(
    url: string,
    data?: Record<string, any> | null,
    options?: HttpRequestOptions | null,
  ): Promise<T>;
  postFormData<T>(
    url: string,
    data?: Record<string, any> | null,
    options?: HttpRequestOptions | null,
  ): Promise<T>;
}

export interface ValidationResult {
  isValid: boolean;
  message: string;
}

export function copyToClipboard(
  text: string,
  success?: () => void,
  fail?: (error?: any) => void,
): void;
export function copyToClipboardAsync(text: string): Promise<void>;
export function formatChatTime(date: Date): string;
export function debounce(
  func: (...args: any[]) => void,
  delay: number,
): (...args: any[]) => void;
export function throttle(
  func: (...args: any[]) => void,
  delay: number,
): (...args: any[]) => void;
export function formatNumber(num: number | string): string;
export function formatBytes(bytes: number, decimals?: number): string;
export function get(
  obj: any,
  path: string,
  defaultValue?: any | null,
): any | null;
export function deepClone<T>(obj: T): T;
export function toQueryString(
  obj: Record<string, any>,
  prefix?: string,
): string;
export function truncate(str: string, length: number): string;
export function randomString(length?: number): string;
export function generateUUID(): string;
export function isEmpty(value: any): boolean;
export function isValid(value: any): boolean;
export function isValidPhone(phone: string): boolean;
export function isValidEmail(email: string): boolean;
export function blobToBase64(blob: Blob): Promise<string>;
export function pathToBase64(path: string, mimeType?: string): Promise<string>;

export function setStorage(key: string, value: any): boolean;
export function getStorage(key: string, defaultValue?: any): any;
export function hasStorage(key: string): boolean;
export function removeStorage(key: string): boolean;
export function clearStorage(): boolean;

export function validatePhone(phone: string): ValidationResult;
export function validateEmail(email: string): ValidationResult;
export function validateVerifyCode(code: string): ValidationResult;
export function validatePassword(
  password: string,
  minLen?: number,
  maxLen?: number,
): ValidationResult;
export function validateUsername(
  username: string,
  minLen?: number,
  maxLen?: number,
): ValidationResult;
export function validateIdCard(idCard: string): ValidationResult;
export function validateBankCard(bankCard: string): ValidationResult;
export function validateUrl(url: string): ValidationResult;
export function validateChineseName(name: string): ValidationResult;
export function validateRequired(
  value: any,
  fieldName?: string,
): ValidationResult;
export function validateNumberRange(
  value: number | null,
  min: number,
  max: number,
  fieldName?: string,
): ValidationResult;
export function validateLengthRange(
  value: any,
  min: number,
  max: number,
  fieldName?: string,
): ValidationResult;
export function validateBatch(
  validations: ValidationResult[],
): ValidationResult;
export function validatePattern(
  value: string,
  pattern: RegExp,
  message: string,
): ValidationResult;
export function validateEquality(
  value1: any,
  value2: any,
  fieldName?: string,
): ValidationResult;
export function validateDate(date: string, format?: string): ValidationResult;
export function getFirstErrorMessage(validations: ValidationResult[]): string;
export function validatePostalCode(postalCode: string): ValidationResult;
export function validateLandline(phone: string): ValidationResult;
export function validatePhoneOrEmail(value: string): ValidationResult;
export function validateUrlSafeString(value: string): ValidationResult;

export type StorageItemValue<T = any> = {
  value: T;
  expireTime: string | number;
};

export type StorageData = Record<string, any>;

export type StorageOptions = {
  defaultExpireTime?: number;
  storageType?: "sync";
  autoCleanup?: boolean;
  cleanupInterval?: number;
  prefix?: string;
  compress?: boolean;
  maxSize?: number;
};

export type StorageResult<T = any> = {
  success: boolean;
  value?: T;
  error?: string;
  expired?: boolean;
};

export type StoragePromise<T = any> = Promise<StorageResult<T>>;

export type BatchStorageItem<T = any> = {
  key: string;
  storageKey: string;
  value: T;
  expireTime?: number;
};

export type StorageStats = {
  totalKeys: number;
  totalStorageKeys: number;
  totalSize: number;
  expiredKeys: number;
  validKeys: number;
};

export type StorageEventType = "set" | "get" | "remove" | "clear" | "expire";

export type StorageEvent<T = any> = {
  type: StorageEventType;
  key?: string;
  storageKey?: string;
  value?: T;
  timestamp: number;
};

export type StorageListener<T = any> = (event: StorageEvent<T>) => void;

export type StorageQuery = {
  keyPattern?: string;
  storageKeyPattern?: string;
  onlyValid?: boolean;
  limit?: number;
  sortBy?: "key" | "storageKey" | "expireTime" | "createTime";
  sortOrder?: "asc" | "desc";
};

export type StorageExportData = {
  version: string;
  timestamp: number;
  data: Record<string, any>;
};

export type StorageMigration = {
  version: string;
  migrate: (data: any) => StorageData;
};

export type UniStorageData =
  | Record<string, any>
  | string
  | number
  | boolean
  | null;

export type UniStorageOptions = {
  encrypt?: boolean;
  dataType?: "json" | "string" | "number" | "boolean";
};

export class CustomStorage {
  constructor(options?: StorageOptions);
  set<T = any>(
    storageKey: string,
    value: T,
    expireTime?: number,
  ): StoragePromise<T>;
  get<T = any>(storageKey: string): StoragePromise<T>;
  remove(storageKey?: string): StoragePromise<boolean>;
  has(storageKey: string): Promise<boolean>;
  getKeys(): Promise<string[]>;
  getAllKeys(): string[];
  setBatch(items: Record<string, any>[]): StorageResult<boolean>;
  getBatch<T = any>(storageKeys: string[]): StorageResult<T[]>;
  cleanup(): StoragePromise;
  clear(): StoragePromise<boolean>;
  getStats(): StorageStats;
  addEventListener(listener: StorageListener): void;
  removeEventListener(listener: StorageListener): void;
  destroy(): void;
}

export function setCustomStorage<T = any>(
  storageKey: string,
  value: T,
  expireTime?: number,
): StoragePromise<T>;
export function getCustomStorage<T = any>(
  storageKey: string,
): StoragePromise<T>;
export function removeCustomStorage(
  storageKey?: string,
): StoragePromise<boolean>;
export function hasCustomStorage(storageKey: string): Promise<boolean>;
export function clearCustomStorage(): StoragePromise<boolean>;
export function getStorageKeys(): Promise<string[]>;
export function getAllStorageKeys(): string[];
export function getStorageStats(): StorageStats;
export function cleanupStorage(): StoragePromise;
export function setBatchStorage(
  items: Record<string, any>[],
): StorageResult<boolean>;
export function getBatchStorage<T = any>(
  storageKeys: string[],
): StorageResult<T[]>;

export function useTheme(): ThemeController;
export function getThemeInstance(): ThemeController;

export function useToast(): ToastController;
export function getToastInstance(): ToastController;
export function showToast(
  options: string | ToastOptions,
  duration?: number | null,
): void;
export function showSuccess(message: string, duration?: number | null): void;
export function showError(message: string, duration?: number | null): void;
export function showWarning(message: string, duration?: number | null): void;
export function showInfo(message: string, duration?: number | null): void;
export function showLoadingToast(message?: string | null): () => void;
export function hideToast(): void;
export function clearToast(): void;

export function useModal(): ModalController;
export function getModalInstance(): ModalController;
export function showConfirm(content: string, title?: string): Promise<boolean>;
export function showAlert(content: string, title?: string): Promise<boolean>;
export function showLoading(title?: string, mask?: boolean): () => void;
export function showActionSheet(
  items: string[],
  title?: string,
): Promise<number>;

export function useI18n(): UseI18nReturn;
export function setLanguage(locale: string): boolean;
export function registerLocale(
  locale: string,
  messages: ModularLocaleMessages,
): void;
export function registerLocaleWithMode(
  locale: string,
  messages: ModularLocaleMessages,
  mode: "merge" | "replace",
): void;
export function replaceLocale(
  locale: string,
  messages: ModularLocaleMessages,
): void;
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
