const Policies = () => {
    return (
        <div className="container py-5">
            <h1 className="mb-4">Store Policies</h1>

            {/* Shipping Policy */}
            <div className="mb-5">
                <h3 className="mb-3">Shipping Policy</h3>
                <p>We offer free shipping for adiClub members and all orders placed through our app. For non-members, orders over ₱4,000 qualify for free standard shipping.</p>
                <ul>
                    <li>Standard Shipping: 5-7 business days</li>
                    <li>Express Shipping: 2-3 business days (additional fee applies)</li>
                    <li>Same-Day Delivery: Available in Metro Manila for orders placed before 12 PM</li>
                </ul>
            </div>

            {/* Return Policy */}
            <div className="mb-5">
                <h3 className="mb-3">Return & Exchange Policy</h3>
                <p>We want you to be completely satisfied with your purchase. If you're not happy with your order, you can return or exchange it within 30 days of delivery.</p>
                <ul>
                    <li>Items must be unworn, unwashed, and in original condition with tags attached</li>
                    <li>Original receipt or proof of purchase required</li>
                    <li>Refunds will be processed within 7-10 business days</li>
                    <li>Sale items are final sale and cannot be returned</li>
                </ul>
            </div>

            {/* Privacy Policy */}
            <div className="mb-5">
                <h3 className="mb-3">Privacy Policy</h3>
                <p>We respect your privacy and are committed to protecting your personal information. We collect only the information necessary to process your orders and improve your shopping experience.</p>
                <ul>
                    <li>Your personal data is encrypted and securely stored</li>
                    <li>We never share your information with third parties without consent</li>
                    <li>You can request to view or delete your data at any time</li>
                </ul>
            </div>

            {/* Payment Policy */}
            <div className="mb-5">
                <h3 className="mb-3">Payment Policy</h3>
                <p>We accept various payment methods to make your shopping experience convenient and secure.</p>
                <ul>
                    <li>Credit/Debit Cards (Visa, Mastercard, American Express)</li>
                    <li>GCash, PayMaya, and other e-wallets</li>
                    <li>Cash on Delivery (COD) for orders under ₱10,000</li>
                    <li>Bank Transfer and Installment options available</li>
                </ul>
            </div>

            {/* Warranty Policy */}
            <div className="mb-5">
                <h3 className="mb-3">Warranty Policy</h3>
                <p>All Adidas products come with a manufacturer's warranty against defects in materials and workmanship.</p>
                <ul>
                    <li>Footwear: 6 months warranty from date of purchase</li>
                    <li>Apparel: 3 months warranty from date of purchase</li>
                    <li>Accessories: 3 months warranty from date of purchase</li>
                    <li>Warranty does not cover normal wear and tear or misuse</li>
                </ul>
            </div>
        </div>
    );
};

export default Policies;
