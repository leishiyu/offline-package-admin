declare module 'bsdiff-node';

declare namespace NodeJS {
  export interface Global {
    __basedir: string;
  }
}

interface AnyObject {
  [propName: string]: any;
}
