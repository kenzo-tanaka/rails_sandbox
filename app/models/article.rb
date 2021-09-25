class Article < ApplicationRecord
  validates :title, presence: true, uniqueness: true
  mount_uploader :video, VideoUploader
  mount_uploader :thumbnail, ThumbnailUploader

  scope :created_since, -> (date) {
    where('created_at >= ?', date)
  }

  def self.ransackable_scopes(auth_object = nil)
    %i[created_since]
  end
end
