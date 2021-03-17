import { ApiProperty } from "@nestjs/swagger";

class CreateCryptoDto {
    @ApiProperty()
    code: string;

    @ApiProperty()
    fullname: string;

    @ApiProperty()
    url: string;
}

export default CreateCryptoDto;