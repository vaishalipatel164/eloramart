import {React} from "react";
import {Link} from "react-router-dom";

function Footer() {

    return (
        <>
        <section className="m-2 ">
            <div className="flex justify-center gap-10 font-serif text-[16px]">
                <div className="">
                    <h2 className="py-5">Useful Links</h2>
                    <div className="flex gap-24">
                        <div>
                            <ul className="leading-8">
                                <li>Blog</li>
                                <li>Privacy</li>
                                <li>Terms</li>
                                <li>FAQs</li>
                                <li>Security</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        <div>
                            <ul className="leading-8">
                                <li>Partner</li>
                                <li>Franchise</li>
                                <li>Seller</li>
                                <li>Warehouse</li>
                                <li>Deliver</li>
                                <li>Resources</li>
                            </ul>
                        </div>
                        <div>
                            <ul className="leading-8">
                                <li>Recipes</li>
                                <li>Bistro</li>
                                <li>District</li>
                                <li>EloraMart Ambulance</li>
                                <li>Feeding India</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="">
                    <h2 className="py-5">Categories See all</h2>
                    <div className="flex gap-24">
                        <div>
                            <ul className="leading-8">
                                <li>
                                    <Link to="/cosmeticproduct" className="hover:text-orange-500 transition-colors">Bath & Body</Link>
                                </li>
                                <li>
                                    <Link to="/healthimage" className="hover:text-orange-500 transition-colors">Health & Pharma</Link>
                                </li>
                                <li>
                                    <Link to="/attariceproduct" className="hover:text-orange-500 transition-colors">Atta, Rice & Dal</Link>
                                </li>
                                <li>
                                    <Link to="/snackproducts" className="hover:text-orange-500 transition-colors">Bakery & Biscuits</Link>
                                </li>
                                <li>
                                    <Link to="/juiceproducts" className="hover:text-orange-500 transition-colors">Drinks & Juices</Link>
                                </li>
                                <li>
                                    <Link to="/saucesproduct" className="hover:text-orange-500 transition-colors">Sauces & Spreads</Link>
                                </li>
                                 <li>
                                    <Link to="/paancorner" className="hover:text-orange-500 transition-colors">Paan Corner</Link>
                                </li>
                                 <li>
                                    <Link to="/dairyproducts" className="hover:text-orange-500 transition-colors">Dairy, Bread & Eggs</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                               <ul className="leading-8">
                                <li>
                                    <Link to="/homeproduct" className="hover:text-orange-500 transition-colors">Home & Lifestyle</Link>
                                </li>
                                <li>
                                    <Link to="/cosmeticproduct" className="hover:text-orange-500 transition-colors">Feminine Hygiene</Link>
                                </li>
                                <li>
                                    <Link to="/masalaproduct" className="hover:text-orange-500 transition-colors">Oil, Ghee & Masala</Link>
                                </li>
                                <li>
                                    <Link to="/attariceproduct" className="hover:text-orange-500 transition-colors">Dry Fruits & Cereals</Link>
                                </li>
                                <li>
                                    <Link to="/snackproducts" className="hover:text-orange-500 transition-colors">Chips & Namkeen</Link>
                                </li>
                                <li>
                                    <Link to="/teacoffeeproduct" className="hover:text-orange-500 transition-colors">Tea, Coffee & Milk Drinks</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                               <ul className="leading-8">
                                <li>
                                    <Link to="/babycareimage" className="hover:text-orange-500 transition-colors">Baby Care</Link>
                                </li>
                                <li>
                                    <Link to="/productimage" className="hover:text-orange-500 transition-colors">Vegetables & Fruits</Link>
                                </li>
                                <li>
                                    <Link to="/nonvegproduct" className="hover:text-orange-500 transition-colors">Chicken, Meat & Fish</Link>
                                </li>
                                <li>
                                    <Link to="/sweettooth" className="hover:text-orange-500 transition-colors">Sweets & Chocolates</Link>
                                </li>
                                <li>
                                    <Link to="petcareimage" className="hover:text-orange-500 transition-colors">Pet Care</Link>
                                </li>
                                <li>
                                    <Link to="/cleaningproduct" className="hover:text-orange-500 transition-colors">Cleaning Essential</Link>
                                </li>
                                <li>
                                    <Link to="/breakfastfood" className="hover:text-orange-500 transition-colors">Breakfast & Instant Food</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default Footer;