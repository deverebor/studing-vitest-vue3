import { vi, describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import HelloWorld from '../HelloWorld.vue';

describe('HellowWorld.vue', () => {
  it('Should display message from msg prop', () => {
    const sut = mount(HelloWorld, {
      props: {
        msg: 'Hello World',
      },
    });

    const message = sut.find('h1');

    expect(message.text()).toBe('Hello World');
  });

  it('Should increase count when button is clicked', async () => {
    const sut = mount(HelloWorld);
    const button = sut.find('button');

    await button.trigger('click');
    const message = sut.find('button');

    expect(message.text()).toBe('count is 1');
  });

  it('Should getAllPokemons return 10 pokemons', () => {
    const sut = mount(HelloWorld, {
      props: {
        msg: 'Hello World',
      },
    });

    let pokemonsMock = [
      {
        name: 'bulbasaur',
        url: 'https://pokeapi.co/api/v2/pokemon/1/',
      },
      {
        name: 'ivysaur',
        url: 'https://pokeapi.co/api/v2/pokemon/2/',
      },
    ];

    const getAllPokemonsSPY = vi
      .spyOn(sut.vm, 'getAllPokemons')
      .mockImplementation(() => pokemonsMock);

    expect(sut.vm.getAllPokemons()).toBe(pokemonsMock);
    expect(getAllPokemonsSPY).toHaveBeenCalled();
  });
});
