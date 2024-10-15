const isEnvBrowser = (): boolean => !(window as any).invokeNative;
const noop = (): void => {};

export { isEnvBrowser, noop };
