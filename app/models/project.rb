class Project < ApplicationRecord
  belongs_to :category
  has_many_attached :images
  belongs_to :category
end
