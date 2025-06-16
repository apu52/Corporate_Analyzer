
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Star, Send, User, Building, Mail, Phone } from 'lucide-react';

const SurveyForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: '',
    position: '',
    workExperience: '',
    engagement: 0,
    satisfaction: 0,
    workLifeBalance: 0,
    communication: 0,
    leadership: 0,
    growth: 0,
    feedback: '',
    improvements: '',
    recommend: 0
  });

  const steps = [
    { title: 'Personal Info', icon: User },
    { title: 'Work Experience', icon: Building },
    { title: 'Engagement', icon: Star },
    { title: 'Feedback', icon: Send }
  ];

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Survey submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Thank you for your feedback! Your response has been recorded.');
  };

  const StarRating = ({ value, onChange, label }: { value: number; onChange: (rating: number) => void; label: string }) => (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-slate-700">{label}</label>
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => onChange(star)}
            className={`p-1 transition-colors duration-200 ${
              star <= value ? 'text-yellow-400' : 'text-slate-300 hover:text-yellow-300'
            }`}
          >
            <Star className="w-6 h-6 fill-current" />
          </button>
        ))}
      </div>
    </div>
  );

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Department</label>
                <select
                  value={formData.department}
                  onChange={(e) => handleInputChange('department', e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="">Select Department</option>
                  <option value="hr">Human Resources</option>
                  <option value="engineering">Engineering</option>
                  <option value="marketing">Marketing</option>
                  <option value="sales">Sales</option>
                  <option value="finance">Finance</option>
                  <option value="operations">Operations</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Position</label>
                <input
                  type="text"
                  value={formData.position}
                  onChange={(e) => handleInputChange('position', e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                  placeholder="Your job title"
                />
              </div>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Years of Experience at Company</label>
              <select
                value={formData.workExperience}
                onChange={(e) => handleInputChange('workExperience', e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
              >
                <option value="">Select Experience</option>
                <option value="less-than-1">Less than 1 year</option>
                <option value="1-2">1-2 years</option>
                <option value="3-5">3-5 years</option>
                <option value="6-10">6-10 years</option>
                <option value="more-than-10">More than 10 years</option>
              </select>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-8">
            <StarRating
              value={formData.engagement}
              onChange={(rating) => handleInputChange('engagement', rating)}
              label="How engaged do you feel at work?"
            />
            <StarRating
              value={formData.satisfaction}
              onChange={(rating) => handleInputChange('satisfaction', rating)}
              label="How satisfied are you with your current role?"
            />
            <StarRating
              value={formData.workLifeBalance}
              onChange={(rating) => handleInputChange('workLifeBalance', rating)}
              label="How would you rate your work-life balance?"
            />
            <StarRating
              value={formData.communication}
              onChange={(rating) => handleInputChange('communication', rating)}
              label="How effective is communication in your team?"
            />
            <StarRating
              value={formData.leadership}
              onChange={(rating) => handleInputChange('leadership', rating)}
              label="How would you rate the leadership in your organization?"
            />
            <StarRating
              value={formData.growth}
              onChange={(rating) => handleInputChange('growth', rating)}
              label="How satisfied are you with growth opportunities?"
            />
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                What do you enjoy most about working here?
              </label>
              <textarea
                value={formData.feedback}
                onChange={(e) => handleInputChange('feedback', e.target.value)}
                rows={4}
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                placeholder="Share your thoughts..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                What improvements would you suggest?
              </label>
              <textarea
                value={formData.improvements}
                onChange={(e) => handleInputChange('improvements', e.target.value)}
                rows={4}
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                placeholder="Your suggestions for improvement..."
              />
            </div>
            <StarRating
              value={formData.recommend}
              onChange={(rating) => handleInputChange('recommend', rating)}
              label="How likely are you to recommend this company as a great place to work?"
            />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Card className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm shadow-2xl border-0">
      <CardHeader className="text-center pb-8">
        <div className="flex justify-center space-x-4 mb-6">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center">
              <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                index <= currentStep 
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-500 border-indigo-500 text-white' 
                  : 'border-slate-300 text-slate-400'
              }`}>
                {index < currentStep ? (
                  <CheckCircle className="w-6 h-6" />
                ) : (
                  <step.icon className="w-6 h-6" />
                )}
              </div>
              {index < steps.length - 1 && (
                <div className={`w-16 h-0.5 mx-2 transition-colors duration-300 ${
                  index < currentStep ? 'bg-gradient-to-r from-indigo-500 to-purple-500' : 'bg-slate-300'
                }`} />
              )}
            </div>
          ))}
        </div>
        <CardTitle className="text-2xl font-bold text-slate-900">
          {steps[currentStep].title}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit}>
          {renderStepContent()}

          <div className="flex justify-between mt-8 pt-6 border-t border-slate-200">
            <Button
              type="button"
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className="px-6 py-2 border-slate-300 hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-300"
            >
              Previous
            </Button>

            {currentStep === steps.length - 1 ? (
              <Button
                type="submit"
                className="px-8 py-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 hover:from-indigo-700 hover:via-purple-700 hover:to-blue-700 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Submit Survey
                <Send className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button
                type="button"
                onClick={handleNext}
                className="px-8 py-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 hover:from-indigo-700 hover:via-purple-700 hover:to-blue-700 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Next Step
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default SurveyForm;
