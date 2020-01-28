import { Injectable } from '@angular/core';
import { ProductInterface } from '../interfaces/product-interface';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private productList: ProductInterface[] = [
    {
      id: 1,
      name: 'The Master Sword',
      category: 'Weapon',
      URL: 'TheMasterSword',
      price: 1000000,
      img: 'MasterSwordImage.jpeg'
    },
    {
      id: 2,
      name: 'Megaton Hammer',
      category: 'Weapon',
      URL: 'MegatonHammer',
      price: 5000,
      img: 'MegatonHammer.png'
    },
    {
      id: 3,
      name: 'Biggoron Sword',
      category: 'Weapon',
      URL: 'BiggoronSword',
      price: 7500,
      img: 'BiggoronSword.jpg'
    },
    {
      id: 4,
      name: "Hero's Bow",
      category: 'Weapon',
      URL: 'HerosBow',
      price: 3000,
      img: 'HeroBow.jpg'
    },
    {
      id: 5,
      name: 'Kokiri Sword',
      category: 'Weapon',
      URL: 'KokiriSword',
      price: 500,
      img: 'KokiriSword.jpg'
    },
    {
      id: 6,
      name: 'Fire Arrows',
      category: 'Weapon',
      URL: 'FireArrows',
      price: 1500,
      img: 'FireArrows.png'
    },
    {
      id: 7,
      name: 'Ice Arrows',
      category: 'Weapon',
      URL: 'IceArrows',
      price: 1500,
      img: 'IceArrows.png'
    },
    {
      id: 8,
      name: 'Light Arrows',
      category: 'Weapon',
      URL: 'LightArrows',
      price: 8000,
      img: 'LightArrows.png'
    },
    {
      id: 9,
      name: 'The Hylian Shield',
      category: 'Equipment',
      URL: 'TheHylianShield',
      price: 800000,
      img: 'HylianShieldImage.jpg'
    },
    {
      id: 10,
      name: 'Mirror Shield',
      category: 'Equipment',
      URL: 'MirrorShield',
      price: 6000,
      img: 'MirrorShield.png'
    },
    {
      id: 11,
      name: 'Goron Tuinic',
      category: 'Equipment',
      URL: 'GoronTunic',
      price: 5000,
      img: 'GoronTunic.jpg'
    },
    {
      id: 12,
      name: "Zora Tunic",
      category: 'Equipment',
      URL: 'ZoraTunic',
      price: 5000,
      img: 'ZoraTunic.jpeg'
    },
    {
      id: 13,
      name: 'Iron Boots',
      category: 'Equipment',
      URL: 'IronBoots',
      price: 2000,
      img: 'IronBoots.png'
    },
    {
      id: 14,
      name: 'Hover Boots',
      category: 'Equipment',
      URL: 'HoverBoots',
      price: 3500,
      img: 'HoverBoots.png'
    },
    {
      id: 15,
      name: 'Golden Gauntlets',
      category: 'Equipment',
      URL: 'GoldenGauntlets',
      price: 15000,
      img: 'GoldenGauntlets.png'
    },
    {
      id: 16,
      name: 'Deku Shield',
      category: 'Equipment',
      URL: 'DekuShield',
      price: 500,
      img: 'DekuShield.jpg'
    },
  ]; //don't leave as string
  constructor() { }
}
