import { ApiProperty } from "@nestjs/swagger";

class ListByQuery {
    @ApiProperty()
    code: string;

    @ApiProperty()
    fullname: string;

    @ApiProperty()
    current_price: number;

    @ApiProperty()
    opening_price: number;

    @ApiProperty()
    lowest_price: number;

    @ApiProperty()
    highest_price: number;

    @ApiProperty()
    url: string;
}

export default ListByQuery;