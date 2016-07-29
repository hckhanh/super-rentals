import Ember from 'ember';

const communityPropertyType = [
  'Condo',
  'Townhous',
  'Apartment'
];

export function rentalPropertyType([type]/*, hash*/) {
  return communityPropertyType.contains(type) ?
    'Community' : 'Standalone';
}

export default Ember.Helper.helper(rentalPropertyType);
