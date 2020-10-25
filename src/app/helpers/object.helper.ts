export class ObjectHelper {
  static nameof<T>(property: keyof T) {
    return property;
  };
}
