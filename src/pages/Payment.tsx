import React, { useState } from 'react';
import { CreditCard, DollarSign } from 'lucide-react';

interface PaymentPlan {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
}

const plans: PaymentPlan[] = [
  {
    id: 'basic',
    name: 'Basic Membership',
    price: 99,
    description: 'Perfect for new members',
    features: [
      'Access to digital library',
      'Monthly newsletter',
      'Member directory access'
    ]
  },
  {
    id: 'professional',
    name: 'Professional Membership',
    price: 199,
    description: 'Ideal for practicing professionals',
    features: [
      'All Basic features',
      'Conference discounts',
      'Professional certification',
      'Priority support'
    ]
  }
];

const Payment = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>('basic');

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Membership Plans</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the membership plan that best suits your needs
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:max-w-4xl lg:mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`bg-white rounded-lg shadow-md p-8 ${
                selectedPlan === plan.id ? 'ring-2 ring-[#1abc9c]' : ''
              }`}
            >
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
                  <p className="text-gray-500">{plan.description}</p>
                </div>
                <div className="text-2xl font-bold text-[#2C3E50]">
                  ${plan.price}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <DollarSign className="h-5 w-5 text-[#1abc9c] mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setSelectedPlan(plan.id)}
                className={`w-full flex items-center justify-center px-6 py-3 rounded-md text-sm font-medium transition-colors ${
                  selectedPlan === plan.id
                    ? 'bg-[#1abc9c] text-white hover:bg-[#16a085]'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                <CreditCard className="h-5 w-5 mr-2" />
                {selectedPlan === plan.id ? 'Selected Plan' : 'Select Plan'}
              </button>
            </div>
          ))}
        </div>

        {selectedPlan && (
          <div className="mt-12 text-center">
            <button className="inline-flex items-center px-8 py-3 rounded-md bg-[#1abc9c] text-white font-medium hover:bg-[#16a085] transition-colors">
              Proceed to Payment
              <CreditCard className="ml-2 h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Payment;