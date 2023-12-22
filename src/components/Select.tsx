import { SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';

type SelectInputs = {
  gender: string;
};

const ContainerSC = styled.div`
  padding: 24px;
`;

const FormSC = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Select = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SelectInputs>();

  const onSubmit: SubmitHandler<SelectInputs> = (data) => console.log(data);

  console.log(watch('gender'));

  return (
    <ContainerSC>
      <FormSC onSubmit={handleSubmit(onSubmit)}>
        <select {...register('gender')}>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
        {errors.gender && <span>This field is required</span>}
        <input type="submit" />
      </FormSC>
    </ContainerSC>
  );
};

export default Select;
