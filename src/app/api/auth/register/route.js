import { NextResponse } from "next/server";
import { dbConnection } from "@/lib/dbConnection";
import Users from "@/app/models/User";
import bcrypt from "bcryptjs";
import { createToken } from "@/lib/auth";

export async function POST(request) {
  await dbConnection();

  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, gender, ageGroup, city, password } = body;
    // console.log(body);

    const user = await Users.findOne({ $or: [{ email }, { phone }] });

    if (user) {
      return NextResponse.json(
        { message: "User already registered" },
        { status: 400 }
      );
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await Users.create({
      firstName,
      lastName,
      email,
      phone,
      gender,
      ageGroup,
      city,
      password: hashPassword
    });

    const token = createToken(newUser);
    return NextResponse.json({
      message: "User successfully registered",
      data: token
    });

  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}
