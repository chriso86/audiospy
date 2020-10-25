import { TestBed, async } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { SpotifyState } from './spotify.state';

describe('AudioSpy spotify', () => {
  let store: Store;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([SpotifyState])]
    }).compileComponents();
    store = TestBed.get(Store);
  }));

  // it('should create an action and add an item', () => {
  //   store.dispatch(new AudioSpyAction('item-1'));
  //   store.select(state => state.audioSpy.items).subscribe((items: string[]) => {
  //     expect(items).toEqual(jasmine.objectContaining([ 'item-1' ]));
  //   });
  // });

});
