const { gql } = require('apollo-server-express');

exports.typeDefs = gql `
   type Hotel {
     hotel_id: ID!
     hotel_name: String!
     street: String!
     city: String!
     postal_code: String!
     price: Float!
     email: String!
     user_id: Float!
   }

   type Booking {
    hotel_id: ID!
    booking_date: String!
    booking_start: String!
    booking_end: String!
    user_id: Float!
  }

  type UserProfile {
      user_id: ID!
      username: String!
      password: String!
      email: String!
  }

   

   type Query {
     getHotel: [Hotel]
     getHotelByID(id: ID!): [Hotel]
     getHotelByName(hotel_name: String!): [Hotel]
     getHotelByCity(city: String!): [Hotel]
     getBookings: [Booking]
     getUserProfiles: [UserProfile]
   }

   
    
    

   type Mutation {
     addHotel(hotel_id: ID!
        hotel_name: String!
        street: String!
        city: String!
        postal_code: String!
        price:Float!
        email: String!
        user_id: Float!): Hotel

     updateHotel(id: String!,
        hotel_id: ID!
        hotel_name: String!
        street: String!
        city: String!
        postal_code: String!
        price: Float!
        email: String!
        user_id: Float!): Hotel

     deleteHotel(id: ID!): Hotel

     addBookings(hotel_id: ID!
        booking_date: String!
        booking_start: String!
        booking_end: String!
        user_id: Float!): Booking

        updateBookings(id: String!,
            hotel_id: ID!
            booking_date: String!
            booking_start: String!
            booking_end: String!
            user_id: Float!): Booking

        deleteBooking(id: ID!): Booking

    addUserProfiles(user_id: ID!
        username: String!
        password: String!
        email: String!): UserProfile

        updateUserProfiles(id: String!,
            user_id: ID!
            username: String!
            password: String!
            email: String!): UserProfile

        deleteUserProfile(id: ID!): Booking


   }

   
`

