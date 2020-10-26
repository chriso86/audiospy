import { TestBed, async } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { SpotifyHistoryState } from './spotify-history.state';

describe('SpotifyHistory actions', () => {
  let store: Store;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([SpotifyHistoryState])]
    }).compileComponents();
    store = TestBed.get(Store);
  }));

  // it('should create an action and add an item', () => {
  //   store.dispatch(new SpotifyHistoryAction('item-1'));
  //   store.select(state => state.spotifyHistory.items).subscribe((items: string[]) => {
  //     expect(items).toEqual(jasmine.objectContaining([ 'item-1' ]));
  //   });
  // });

});
