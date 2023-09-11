import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import  {NextResponse} from "next/server"

const prisma = new PrismaClient();

export async function POST(request) {
    const body = await request.json();
    const { name, email, password, number, street, city, postcode, phone, firstname } = body.data;
    
    if (!name || !email || !password ) {
        return new NextResponse("missing one of the value", {status: 400});

    }

    const exist = await prisma.user.findUnique({
        where: {
            email: email
        }
    });

    if (exist) {
        return new NextResponse("user already exist", {status: 400});
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
        data: {
            email: email,
            name: name,
            firstname: firstname,
            phone: phone,
            number: number,
            street: street,
            city: city,
            postcode: postcode,
            hashedPassword,

        }
    });
console.log('user in route', user);

    return NextResponse.json(user)
}