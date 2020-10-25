import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';

export class AudioSpyStateModel {
  public artists: string[];
}

const defaults = {
  artists: []
};

@State<AudioSpyStateModel>({
  name: 'audioSpy',
  defaults
})
@Injectable()
export class SpotifyState {
  @Action(AudioSpyAction)
  add({ getState, setState }: StateContext<AudioSpyStateModel>, { payload }: AudioSpyAction) {
    const state = getState();
    setState({ artists: [ ...state.artists, payload ] });
  }
}
