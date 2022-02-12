require 'rails_helper'

RSpec.describe Article, type: :model do
  let!(:articles) { create_list(:article, 10) }

  it { expect(true).to eq true }
  it { expect(true).to eq true }
  it { expect(true).to eq true }
  it { expect(true).to eq true }
end
