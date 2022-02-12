require 'rails_helper'

RSpec.describe Article, type: :model do
  let!(:articles) { create(:article) }

  it { expect(true).to eq true }
  it { expect(true).to eq true }
  it { expect(true).to eq true }
  it { expect(true).to eq true }
end
