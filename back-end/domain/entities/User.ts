type UserProps = {
  id: string;
  name: string;
  lastName: string;
  email: string;
  phone: string;
  birthDate: Date;
  password: string;
  createdAt: Date;
  updatedAt: Date;
};

export class User {
  constructor(private readonly props: UserProps) {
    this.validate();
  }

  private validate(): void {
    if (!this.props.id || this.props.id.trim().length === 0) {
      throw new Error("ID é obrigatório");
    }

    if (!this.props.name || this.props.name.trim().length < 2) {
      throw new Error("Nome deve ter pelo menos 2 caracteres");
    }

    if (!this.props.lastName || this.props.lastName.trim().length < 2) {
      throw new Error("Sobrenome deve ter pelo menos 2 caracteres");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!this.props.email || !emailRegex.test(this.props.email)) {
      throw new Error("Email inválido");
    }

    const phoneRegex = /^\+?[\d\s()-]{10,20}$/;
    if (!this.props.phone || !phoneRegex.test(this.props.phone)) {
      throw new Error("Telefone inválido");
    }

    if (
      !(this.props.birthDate instanceof Date) ||
      isNaN(this.props.birthDate.getTime())
    ) {
      throw new Error("Data de nascimento inválida");
    }

    if (this.props.birthDate > new Date()) {
      throw new Error("Data de nascimento não pode ser no futuro");
    }

    if (!this.props.password || this.props.password.length < 6) {
      throw new Error("Senha deve ter pelo menos 6 caracteres");
    }

    if (
      !(this.props.createdAt instanceof Date) ||
      isNaN(this.props.createdAt.getTime())
    ) {
      throw new Error("Data de criação inválida");
    }

    if (
      !(this.props.updatedAt instanceof Date) ||
      isNaN(this.props.updatedAt.getTime())
    ) {
      throw new Error("Data de atualização inválida");
    }
  }

  getId(): string {
    return this.props.id;
  }

  getName(): string {
    return this.props.name;
  }

  getLastName(): string {
    return this.props.lastName;
  }

  getEmail(): string {
    return this.props.email;
  }

  getPhone(): string {
    return this.props.phone;
  }

  getBirthDate(): Date {
    return this.props.birthDate;
  }

  getPassword(): string {
    return this.props.password;
  }

  getCreatedAt(): Date {
    return this.props.createdAt;
  }

  getUpdatedAt(): Date {
    return this.props.updatedAt;
  }
}
