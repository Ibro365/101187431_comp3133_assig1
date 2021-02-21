const Hotel = require('./models/Hotel');
const Bookings = require('./models/Bookings');
const UserProfiles = require("./models/UserProfile");

exports.resolvers = {
    Query: {
        getHotel: async (parent, args) => {
            return await Hotel.find({});
        },
        getHotelByID: async (parent, args) => {
            return await Hotel.findById(args.hotel_id);
        },
        getHotelByName: async (parent, args) => {
            return await Hotel.findById({ "hotel_name": args.hotel_name});
        },
        getHotelByCity: async (parent, args) => {
            return await Hotel.find({"city" : args.city});
        },
        getBookings: async (parent, args) => {
            return await Bookings.find({});
        },
        getUserProfiles: async (parent, args) => {
            return await UserProfiles.find({});
        }
    },
    Mutation: {
        addHotel: async (parent, args) => {
            console.log(args)
            

            let newHotel = new Hotel({
                hotel_id: args.hotel_id,
                hotel_name: args.hotel_name,
                street: args.street,
                city: args.city,
                postal_code: args.postal_code,
                price: args.price,
                email: args.email,
                user_id: args.user_id
            });
        return await newHotel.save();
      },
        addBookings: async (parent, args) => {
            console.log(args)

            let newBooking = new Bookings({
                hotel_id: args.hotel_id,
                booking_date: args.booking_date,
                booking_start: args.booking_start,
                booking_end: args.booking_end,
                user_id: args.user_id
            });
         return await newBooking.save();
        },
        addUserProfiles: async (parent, args) => {
            console.log(args)

            let newBooking = new UserProfiles({
                user_id: args.user_id,
                username: args.username,
                password: args.password,
                email: args.email
            });
         return await newBooking.save();
        },
      updateHotel: async (parent, args) => {
            console.log(args)
            if (!args.hotel_id){
                return;
            }
            return await Hotel.findOneAndUpdate(
            {
                _id: args.hotel_id
            },
            {
                $set: {
                    hotel_id: args.hotel_id,
                    hotel_name: args.hotel_name,
                    street: args.street,
                    city: args.city,
                    postal_code: args.postal_code,
                    price: args.price,
                    email: args.email,
                    user_id: args.user_id
                }
            }, {new: true}, (err, hotels) => {
                if (err) 
                {
                    console.log('Something went wrong when updating the hotel');
                } else 
                {
                    return hotels
                }
            }
        );
      },
      updateBookings: async (parent, args) => {
        console.log(args)
        if (!args.hotel_id){
            return;
        }
        return await Bookings.findOneAndUpdate(
        {
            _id: args.hotel_id
        },
        {
            $set: {
                hotel_id: args.hotel_id,
                booking_date: args.booking_date,
                booking_start: args.booking_start,
                booking_end: args.booking_end,
                user_id: args.user_id
            }
        }, {new: true}, (err, bookings) => {
            if (err) 
            {
                console.log('Something went wrong when updating the booking');
            } else 
            {
                return bookings
            }
        }
    );
  },
  updateUserProfiles: async (parent, args) => {
    console.log(args)
    if (!args.hotel_id){
        return;
    }
    return await UserProfiles.findOneAndUpdate(
    {
        _id: args.user_id
    },
    {
        $set: {
            user_id: args.user_id,
            username: args.username,
            password: args.password,
            email: args.email
        }
    }, {new: true}, (err, userprofile) => {
        if (err) 
        {
            console.log('Something went wrong when updating the user profile');
        } else 
        {
            return userprofile
        }
    }
);
},
      deleteHotel: async (parent, args) => {
        console.log(args)
        if (!args.hotel_id){
            return JSON.stringify({status: false, "message" : "No ID found"});
        }
        return await Hotel.findByIdAndDelete(args.id)
      },
      deleteBooking: async (parent, args) => {
        console.log(args)
        if (!args.hotel_id){
            return JSON.stringify({status: false, "message" : "No ID found"});
        }
        return await Bookings.findByIdAndDelete(args.id)
      },
      deleteUserProfile: async (parent, args) => {
        console.log(args)
        if (!args.user_id){
            return JSON.stringify({status: false, "message" : "No ID found"});
        }
        return await UserProfiles.findByIdAndDelete(args.id)
      },
    }
  }