 const upper=()=>{
    return ` <div class="container flex_box_2">
    <a href="./index.html"><img src="https://slatesf.com/wp-content/uploads/2021/04/Dermstore-logo2.jpg" alt="logo" id="logo"></a>
    <div class="flex_box">
        <div class="search">
            <input type="text" placeholder="Search Brands, Concerns, Products" id="search_box">
            <button class="search_btn"><img src="https://cdn.icon-icons.com/icons2/2551/PNG/512/search_icon_152764.png" alt=""></button>
        </div>
        <div class="cart flex_box">
           <p id="cart_item"><strong id="cart_count">(0)</strong>items</p>
            <img src="" alt="">
            <a href="./login.html" id="user"> Log In / Sign Up <i class="down"></i></a>
        </div>
    </div>
</div>
<div class="container flex_box_2 menu">
    <a href="./index.html">Browse By</a>
    <a href="./brand.html">Brands</a>
    <a href="#">Skin Care</a>
    <a href="#">Makeup</a>
    <a href="#">Hair Care</a>
    <a href="#">Bath & Body</a>
    <a href="#">Men</a>
    <a href="#">Gifts & Sets</a>
    <a href="#">Sale</a>
    <a href="#">Skin 101</a>
</div>


    `
}

 const lower=()=>{
    return `<div>
          <h6>Company</h6>
          <a href="./about.html">About Us</a><br />
          <div id="space"></div>
          <a href="#">Dermstore Spa</a><br />
          <div id="space"></div>
          <a href="#">Testimonials</a><br />
          <div id="space"></div>
          <a href="#">Press</a><br />
          <div id="space"></div>
          <a href="#">Brand Submissions</a><br />
          <div id="space"></div>
          <a href="#">eGift Cards</a><br />
        </div>
        <div>
          <h6>Customer Service</h6>
          <a href="#">Customer Service</a><br />
          <div id="space"></div>
          <a href="#">FAQs</a><br />
          <div id="space"></div>
          <a href="#">About Rewards</a><br />
          <div id="space"></div>
          <a href="#">Order Status</a><br />
          <div id="space"></div>
          <a href="#">Shipping Information</a><br />
          <div id="space"></div>
          <a href="#">Product Recall</a><br />
          <div id="space"></div>
          <a href="#">Accessibility</a><br />
        </div>
        <div>
          <h6>My Account</h6>
          <a href="#">Dermstore Subscriptions</a><br />
          <div id="space"></div>
          <a href="#">My Rewards</a><br />
          <div id="space"></div>
          <a href="#">My Favorites</a><br />
          <div id="space"></div>
          <a href="#">Order History</a><br />
          <div id="space"></div>
          <a href="#">Returns</a><br />
        </div>
        <div>
          <h6>New Subscribers Receive 15% Off*</h6>
          <label for="">Email</label><br />
          <input type="text" name="" id="offer-email" placeholder="Email" />
          <button>></button>
          <br /><br />
          <a href="#"
            >*Offer valid for new subscribers and participating brands only.
            Single-use promo will be sent via email.</a
          ><br /><br />
          <div id="login-follow">
            Follow us on
            <br /><br />
            <img id="img-social" src="login_img\facebook_svg.svg" alt="" />
            <img id="img-social" src="login_img\instagram_svg.svg" alt="" />
            <img id="img-social" src="login_img\twitter_svg.svg" alt="" />
            <img id="img-social" src="login_img\youtube_svg.svg" alt="" />
            <img id="img-social" src="login_img\pinterest_svg.svg" alt="" />
          </div>
          <div id="space"></div>
          
        </div>
    `
}

export {upper,lower} 