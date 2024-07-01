declare module "disable-devtool";

interface Window {
  _czc: {
    push: (
      ...args: [
        "_trackEvent",
        string,
        "click" | "menu" | "upgrade",
        string,
        string
      ][]
    ) => void;
  };
  heic2any: ({ blob: Blob, toType: string, quality: number }) => Promise<File>;
}
