import { useEffect } from 'react';

declare global {
  interface Window {
    chatbase: any;
    chatbaseConfig: any;
  }
}

const CHATBASE_SCRIPT_ID = 'cGalVS_8RdRMd4IO_ZkLx';

export const ChatbaseWidget = () => {
  useEffect(() => {
    // Initialize chatbase
    if (!window.chatbase || window.chatbase("getState") !== "initialized") {
      window.chatbase = (...args: any[]) => {
        if (!window.chatbase.q) window.chatbase.q = [];
        window.chatbase.q.push(args);
      };
      window.chatbase = new Proxy(window.chatbase, {
        get(target: any, prop: string) {
          if (prop === "q") return target.q;
          return (...args: any[]) => target(prop, ...args);
        },
      });
    }

    const onLoad = () => {
      const script = document.createElement("script");
      script.src = "https://www.chatbase.co/embed.min.js";
      script.id = CHATBASE_SCRIPT_ID;
      (script as any).domain = "www.chatbase.co";
      document.body.appendChild(script);
    };

    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad);
    }

    return () => {
      // Cleanup on unmount
      const el = document.getElementById(CHATBASE_SCRIPT_ID);
      if (el) el.remove();

      // Remove chatbase iframe/widget elements
      document.querySelectorAll('iframe[src*="chatbase"]').forEach(el => el.remove());
      document.querySelectorAll('[id*="chatbase"]').forEach(el => {
        if (el.id !== CHATBASE_SCRIPT_ID) el.remove();
      });

      delete window.chatbase;
    };
  }, []);

  return null;
};
