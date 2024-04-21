//exporting data to db
import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";

export const send_reservation = async (req, res, next) => {
  //frontend will get these values to db
  const { firstName, lastName, email, date, time, phone } = req.body;
  if (!firstName || !lastName || !email || !date || !time || !phone) {
    return next(new ErrorHandler("Please Fill Full Reservation Form!", 400));
  }
  //when form data is recieved try catch block se

  try {
    await Reservation.create({ firstName, lastName, email, date, time, phone });
    res.status(201).json({
      success: true,
      message: "Reservation Sent Successfully!",
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(
        (err) => err.message
      );
      return next(new ErrorHandler(validationErrors.join(", "), 400));
    }

    // Handle other errors
    return next(error);
  }
};

export default send_reservation;
// Handle Mongoose validation errors
//ValidationError is name of error
//     if (error.name === "ValidationError") {
//       const validationErrors = Object.values(error.errors).map(
//         (err) => err.message
//       );
//       return next(new ErrorHandler(validationErrors.join(", "), 400));
//     }
//   }
// };
// export default send_reservation;
