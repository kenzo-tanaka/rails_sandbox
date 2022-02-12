require 'rails_helper'

RSpec.describe Article, type: :model do
  before_all do
    create_list(:article, 10)
  end

  it { expect(true).to eq true }
  it { expect(true).to eq true }
  it { expect(true).to eq true }
  it { expect(true).to eq true }
end
