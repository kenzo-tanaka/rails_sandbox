FactoryBot.define do
  factory :article do
    sequence(:title) { |n| "sample title #{n}" }
  end
end