interface Service<T> {
  execute(...params: any): Promise<T>;
}

export { Service };
