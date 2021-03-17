import { ApiProperty } from "@nestjs/swagger";

export class CreateFeedDto {

    @ApiProperty()
    name: string;

    @ApiProperty()
    url: string;

    @ApiProperty()
    isActive: boolean;
}

export default CreateFeedDto;