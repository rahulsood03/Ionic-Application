import {Page, NavController, NavParams} from 'ionic-angular';
import {ItemDetailsPage} from '../item-details/item-details';


@Page({
  templateUrl: 'build/pages/list/list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, icon: string, items: any}>;

  constructor(private nav: NavController, navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.items = [
        {title: "Beer", icon: "beer", items: [
            {title: "Raccoon Lodge", 
            address: "59 Warren St, New York, NY 10007", 
            description: "A jukebox, fireplace, pool & happy hour are the draws at this three-decades-old watering hole.", image:"http://www.best-bookings.com/wp-content/uploads/2015/02/2012-Madrid-024-naturbier-3-beers-compressed.jpg"},
            
            {title: "O'Hara's", 
            address: "120 Cedar St, New York, NY 10006", 
            description: "Both locals & visitors come for cold pints plus burgers, wings & bar food in a neighborhood spot.", image:"https://images.lasertron.us/slideshow.lth/1-compressed.jpg"},
            
            {
                title: "The Loopy Doopy Rooftop Bar", 
                address: "102 North End Ave, New York, NY", 
                description: "Contemporary craft cocktail lounge on the Conrad Hotel roof, with sweeping views & small plates.", 
                image:"https://s-media-cache-ak0.pinimg.com/736x/70/a2/6d/70a26d2c1727beef1f6f926f38a7ac45.jpg"}
            
        ]},
        {title: "Pizza", icon: "beer", items: [
            {title: "Dona Bella Pizza", 
            address: "154 Church St, New York, NY 10007", 
            description: "Bustling late-night pizza outlet serves up hefty slices, pies & grub at the counter in a tiny space.",             image:"http://www.blogto.com/listings/restaurants/upload/2015/11/20151111-figo590-17.jpg"},
            
            {title: "Majestic Pizza", 
            address: "8 Cortlandt St, New York, NY 10007", 
            description: "Old-school, counter-serve pizzeria offering basic whole pies or slices, calzones & heroes.",                 image:"https://houseofhaos.files.wordpress.com/2014/08/house-of-haos-barbuto-west-village-nyc-new-york-city-sausage-pizza.jpg"},
            
            {title: "Big Al's Chicago Style Pizza", 
            address: "9 Thames St, New York, NY 10006", 
            description: "Chicago-style deep-dish pizza comes with a wide range of toppings at this counter spot.",                            image:"https://www.papajohns.com/static-assets/a/images/compressed/deal/pizzas/std_3topHamGrnPepMush-compressed.jpg"},
            
            {title: "Harry's Italian", 
            address: "2 Gold St, New York, NY 10038", 
            description: "Renovated historic tavern with a George Washington link offering pub eats & live music on weekends.",               image:"http://www.blogto.com/listings/restaurants/upload/2015/11/20151111-figo590-17.jpg"},
        ]},
        
        {title: "Burger", icon: "beer", items: [
            {title: "Zaitzeff", 
            address: "72 Nassau St, New York, NY 10038, Phone:(212) 571-7272",
            description: "Compact burger joint offering Kobe beef, sirloin, turkey & veggie patties plus wine & bottled beers.", 
            image: "http://smashburger.com/wp-content/themes/smashburger_v3/img/Burgers-colorado.jpg"},
            
            {title: "Brearoom Burgers & Tacos", 
            address: "83 Baxter St, New York, NY 10013", 
            description: "Cozy sandwich spot offering burgers, hot dogs & tacos in narrow, brick-walled digs.", 
            image: "http://veggiepicks.com/data/photos/bareburger-astoria-1430445691.jpg"},
            
            {title: "Shake Shack", 
            address: "215 Murray Street, New York, NY 10282, Phone:(646) 545-4600", 
            description: "Hip, counter-serve chain for gourmet takes on fast-food classics like burgers & frozen custard.",                   image: "http://s3-media4.fl.yelpcdn.com/bphoto/8NLY7hdCaXlGbkYEW9r6TA/348s.jpg"},
            
            {title: "Black Burger", 
            address: "386 Canal St, New York, NY 10013, Phone:(212) 431-7651", 
            description: "Popular late-night counter serve featuring a variety of creative specialty burgers, sides & shakes.",               image: "http://media4.popsugar-assets.com/files/2015/09/28/831/n/1922398/1d0ceccc_edit_img_cover_file_15775818_1443464013_burger_king_blR7sjMJ.xxxlarge/i/Black-Burger-King-Halloween-Burger.jpg"},
            
        ]}
    ]

    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];
  }

  itemTapped(event, item) {
    this.nav.push(ItemDetailsPage, {
      items: item.items
    });
  }
}
