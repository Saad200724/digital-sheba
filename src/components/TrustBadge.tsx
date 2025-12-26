import { Shield, Award, Star, Users, Clock, CheckCircle } from 'lucide-react';

const TrustBadge = () => {
  return (
    <section className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6 mb-8">
      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Certificate */}
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-green-800">DBID Verified Seller</h3>
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
            <p className="text-sm text-green-700">Digital Business Identity #DSB-2024-0892</p>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-12 bg-green-300" />

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-6">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-green-600" />
            <div>
              <div className="font-bold text-green-800">10,000+</div>
              <div className="text-xs text-green-700">Happy Customers</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-500" />
            <div>
              <div className="font-bold text-green-800">4.9/5</div>
              <div className="text-xs text-green-700">Customer Rating</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-green-600" />
            <div>
              <div className="font-bold text-green-800">&lt;5 min</div>
              <div className="text-xs text-green-700">Delivery Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadge;
