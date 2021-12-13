# SWAGGER

Pasta API-DOC

Pasta que contem os tipos typescript para modelar as informações que vão aparecer na documentação.

- @ApiProperty(): Fica normalmente nos arquivos dentro da pasta api-doc. Para o swagger entenda a informação da resposta.
- @ApiOkResponse: Fica normalmente nos controllers, informando o tipo que será utilizado como responsta e esta fica na pasta api-doc

``` typescript
  @ApiOkResponse({
    type: UserResponse
  })
  @Get(':id')
  async findUserById(
    @Param('id') id: string
    ): Promise<ReturnUserDto> {
```
Depois de feito isso, ele aparece em schemas la no swagger
- @ApiCretedResponse: Fica normalmente nos controllers no método POST onde a resposta equivale ao estado de 201

``` typescript
  @ApiCreatedResponse({
    type: UserResponse
  })
  @Post()
  async createUser(
    @Body(ValidationPipe) createUserDto: CreateUserDto,
  ): Promise<ReturnUserDto>
```
- Para criar um schema para ser um modelo dentro do swagger para enviar um POST por exemplo

``` typescript
  export class CreateUserDto {

  @IsNotEmpty({
    message: 'Informe um endereço de email',
  })
  @IsEmail(
    {},
    {
      message: 'Informe um endereço de email válido',
    },
  )
  @MaxLength(200, {
    message: 'O endereço de email deve ter menos de 200 caracteres',
  })
  @ApiProperty()
  email: string;

  @IsNotEmpty({
    message: 'Informe o nome do usuário.'
  })
  @MaxLength(200, {
    message: 'O nome deve ter menos de 200 caracteres'
  })
  @ApiProperty()
  name: string;
}
```
- Tipos de resposta por método
- 
- Adicionar @ApiTags('Users') logo após @Controller para rederenciar isso la no swagger como titulo padrão de seus endpoints, utilizando @ApiOperation
- Documentar as descrições de um endpoint
``` typescript
/**
   * Responsible for listing all users
   * @returns arry of users
   */
  @Get()
  @ApiOperation({
      summary: 'Listar todos os usuários'
  })
  async listAllUsers() {
    const found = await this.usersService.findUsers();
    return {
      found,
      message: 'Usuários encontrados',
    };
  }
  ```
  - Mapear um array no schema de um método
```typescript
/**
   * Responsible for listing all users
   * @returns arry of users
   */
  @ApiOperation({
      summary: 'Listar todos os usuários'
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de usuários',
    type: UserResponse,
    isArray: true
  })
  @Get()
  async listAllUsers(): Promise<User[]> {
    const found = await this.usersService.findUsers();
    return found;
  }
```
