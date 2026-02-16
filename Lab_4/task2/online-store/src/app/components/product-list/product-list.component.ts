import {Component, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {Product} from '../../models/product.model';
import {ProductCardComponent} from '../product-card/product-card.component';

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {
  protected products=  signal<Product[]>([
    { id: 1,
      name: 'Набережные чleны туалетная бумага 1-слойный 1 шт',
      description: 'Туалетная бумага однослойная без втулки. Бумага серого цвета, плотная, мягкая. Используется в гигиенических целях.' ,
      price: 226,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h4f/h75/64532316323870.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h4f/h75/64532316323870.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/naberezhnye-chelny-tualetnaja-bumaga-1-sloinyi-1-sht-poliester-104923161/?c=750000000'
    },
    {
      id: 2,
      name: 'Adal молоко 3.2% 925 мл',
      description: 'Молоко "Adal" 3,2% - молоко питьевое, ультрапастеризованное, изготовлено из натурального коровьего молока, удобная упаковка и современные технологии позволяют употреблять такое молоко без предварительной обработки. ',
      price: 750,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p71/p6d/52077494.png?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p71/p6d/52077494.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p38/p6d/52077496.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/adal-moloko-3-2-925-ml-100982670/?c=750000000',
    },
    {
      id: 3,
      name: 'Ластик Maped Technic Duo 511710, 1 шт',
      description: 'Ластик MAPED Technic Duo подойдет для удаления следов чернил и надписей, сделанных чернографитными или цветными карандашами. Ластик имеет прямоугольную форму бело-синего цвета, синяя часть предназначена для стирания чернил.',
      price: 10,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h56/h80/86018938044446.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h56/h80/86018938044446.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hd6/h74/86018938077214.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/lastik-maped-technic-duo-511710-1-sht-103885134/?c=750000000',
    },
    {
      id: 4,
      name: 'Coca-Cola газированный напиток кола 1 л',
      description: 'Coca-Cola – один из самых популярных безалкогольных напитков в истории, а также один из наиболее узнаваемых брендов в мире.Сегодня неповторимый вкус Coca-Cola знаком миллионам людей по всему миру. Она освежает и наполняет энергией, оставляя приятное пряное послевкусие.',
      price: 665 ,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pbb/pee/97763098.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/pbb/pee/97763098.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h39/h36/85448954707998.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/coca-cola-classic-gazirovannyi-napitok-1-l-100208096/?c=750000000',
    },
    {
      id: 5,
      name: 'Apple iPhone 16 Pro Max 256Gb черный',
      description: 'Флагманский IPhone 16 Pro Max вобрал в себя лучшие черты современного гаджета. Это самое производительное устройство в линейке Apple iPhone с масштабным дисплеем, потрясающей производительностью и невероятной внешней эргономикой. ',
      price: 980000,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h08/hd3/87295489376286.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000',
    },
    {
      id: 6,
      name: 'SMART QUA85QX2AAJXXZ 216 см черный',
      description: 'Телевизор SMART QUA85QX2AAJXXZ — ваш идеальный спутник для развлечений, предлагающий впечатляющее качество изображения и широкие возможности подключения. С диагональю 85 см и поддержкой 4K UHD, он станет центром вашего домашнего кинотеатра.',
      price: 376948,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p0f/pa8/14638174.jpeg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p0f/pa8/14638174.jpeg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/smart-qua85qx2aajxxz-216-sm-chernyi-131847362/?c=750000000',
    },
    {
      id: 7,
      name: 'Яйцо Казгер-Кус куриное 30 шт 60-65 г',
      description: 'Свежие и качественные яйца станут отличной основой для множества вкусных блюд. Они - богатый источник протеина(белка), что так необходим для построения мышц. белок белок белок белок белок белок белок',
      price: 2349,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h10/hdd/63816604287006.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h10/hdd/63816604287006.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/jaitso-kazger-kus-kurinoe-30-sht-60-65-g-100236608/?c=750000000',
    },
    {
      id: 8,
      name: 'Матрас Askona Prime Mix, 180x200x20 см',
      description: 'Матрас Askona PRIME MIX – сбалансированная поддержка и комфорт\n' +
        'Askona PRIME MIX – это сочетание современных технологий и высококачественных материалов, созданное для тех, кто ценит правильную поддержку позвоночника и комфортный отдых.',
      price: 120040,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pbc/pcf/53365260.jpg?format=gallery-medium',
      images: ['сhttps://resources.cdn-kaspi.kz/img/m/p/pbc/pcf/53365260.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pd8/pcf/53365261.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/matras-askona-prime-mix-180x200x20-sm-123622481/?c=750000000',
    },
    {
      id: 9,
      name: 'Алекс минеральная Saryagash газированная 1.5 л',
      description: 'Ваш собственный источник здоровья на каждый день. Alex Saryagash добывается из уникальной скважины глубиной 2000 метров - там, где вода проходит естественную минерализацию, насыщаясь полезными микроэлементами и приобретая свой особенный узнаваемый вкус и свойства.  ',
      price: 380,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pae/p95/10441254.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/pae/p95/10441254.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/aleks-mineral-naja-saryagash-gazirovannaja-1-5-l-100211003/?c=750000000',
    },
    {
      id: 10,
      name: 'Leadbros HD-159 черный',
      description: 'Холодильник Leadbros HD-159 — компактное и стильное решение для вашей кухни, обеспечивающее эффективное хранение продуктов и энергосбережение',
      price: 94990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p5f/p11/39085679.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p5f/p11/39085679.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pf3/p0e/39085680.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/leadbros-hd-159-chernyi-106107741/?c=750000000',
    },
  ]);
}
