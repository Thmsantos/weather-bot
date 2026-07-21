interface Job {
  run(...params: any): Promise<void>;
}

export { Job };
