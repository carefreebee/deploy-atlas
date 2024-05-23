import { NextResponse } from "next/server";
import WOStrat from '/models/woStrategy.js';

export async function POST(req) {
    try {
        const body = await req.json();
        const { response, department_id } = body;
        console.log("API Response:", response);

        try {
            // Post the W-T strategy
            const result = await WOStrat.postWOStrat(response, department_id);

            // Check if the W-T strategy was successfully posted
            if (result) {
                // Return the inserted values along with the response
                return NextResponse.json(result, { status: 201 });
            } else {
                // Return an error message if posting failed
                return NextResponse.json({ message: "An error occurred while posting W-O." }, { status: 500 });
            }
        } catch (error) {
            console.error("Error posting W-O:", error);
            return NextResponse.json({ message: "An error occurred while posting W-O." }, { status: 500 });
        }
    } catch (error) {
        console.error("Error handling request:", error);
        return NextResponse.json({ message: "An error occurred while handling the request." }, { status: 500 });
    }
}

export async function DELETE(req) {
    try {
        const { id, department_id } = await req.json();

        try {
            // Delete the W-T strategy
            const result = await WOStrat.deleteWOStrat(id, department_id);

            // Check if the W-T strategy was successfully deleted
            if (result) {
                // Return a success message
                return NextResponse.json({ message: "W-O strategy deleted successfully." }, { status: 200 });
            } else {
                // Return an error message if deletion failed
                return NextResponse.json({ message: "An error occurred while deleting W-O." }, { status: 500 });
            }
        } catch (error) {
            console.error("Error deleting W-O:", error);
            return NextResponse.json({ message: "An error occurred while deleting W-O." }, { status: 500 });
        }
    } catch (error) {
        console.error("Error handling request:", error);
        return NextResponse.json({ message: "An error occurred while handling the request." }, { status: 500 });
    }
}