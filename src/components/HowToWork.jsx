import React from 'react';

const HowToWork = () => {
    return (
        <section className="py-16 bg-base-100">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className='bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent'>Frequently Asked Questions</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Find quick answers to common questions about orders, delivery,
                        payments, and returns.
                    </p>
                </div>
                <div className="space-y-4">
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="faq-accordion" defaultChecked />
                        <div className="collapse-title text-lg font-semibold">
                            How do I place an order?
                        </div>
                        <div className="collapse-content text-base-content/80">
                            <p>
                                Browse products, add your desired items to the cart, and proceed
                                to checkout. Complete the payment process to confirm your order.
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="faq-accordion" />
                        <div className="collapse-title text-lg font-semibold">
                            What payment methods do you accept?
                        </div>
                        <div className="collapse-content text-base-content/80">
                            <p>
                                We accept credit/debit cards, mobile banking, and secure online
                                payment gateways for a smooth checkout experience.
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="faq-accordion" />
                        <div className="collapse-title text-lg font-semibold">
                            How long does delivery take?
                        </div>
                        <div className="collapse-content text-base-content/80">
                            <p>
                                Standard delivery usually takes 3–5 business days, depending on
                                your location and order volume.
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="faq-accordion" />
                        <div className="collapse-title text-lg font-semibold">
                            Can I return or exchange a product?
                        </div>
                        <div className="collapse-content text-base-content/80">
                            <p>
                                Yes, you can request a return or exchange within 7 days of
                                receiving your order, provided the product is unused and in its
                                original condition.
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="faq-accordion" />
                        <div className="collapse-title text-lg font-semibold">
                            Is my payment information secure?
                        </div>
                        <div className="collapse-content text-base-content/80">
                            <p>
                                Absolutely. We use encrypted and secure payment gateways to
                                protect your personal and financial information.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowToWork;