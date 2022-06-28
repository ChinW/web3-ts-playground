import path from "path";
import pino from "pino";

const transport = pino.transport({
  target: "pino-pretty",
  options: {
    colorize: false,
    levelFirst: true,
    messageFormat: `{msg}`,
    translateTime: `yymmmdd HH:MM:ss Z`,
    ignore: "hostname",
    destination: path.join(process.cwd(), "/log/index-monitor.out"),
    mkdir: true,
    append: false,
  },
});

export const logger = pino(transport);

export const childLogger = (componentName: string): pino.Logger => {
  return logger.child({
    name: componentName,
  });
};
