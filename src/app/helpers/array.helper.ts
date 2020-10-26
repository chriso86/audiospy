export class ArrayHelper {
  static sortByProperty(
    objectA: any,
    objectB: any,
    property: string,
    direction: 'asc' | 'desc' = 'asc'
  ) {
    if ( objectA[property] < objectB[property] ){
      return -1;
    }

    if ( objectA[property] > objectB[property] ){
      return 1;
    }

    return 0;
  }
}
