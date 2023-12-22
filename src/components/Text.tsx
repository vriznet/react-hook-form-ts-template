import { SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';

type TextInputs = {
  example: string;
  exampleRequired: string;
};

const ContainerSC = styled.div`
  padding: 24px;
`;

const FormSC = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Text = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TextInputs>();

  const onSubmit: SubmitHandler<TextInputs> = (data) => console.log(data);

  console.log(watch('example'));

  return (
    <ContainerSC>
      <FormSC onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue="test" {...register('example')} />
        <input {...register('exampleRequired', { required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}
        <input type="submit" />
      </FormSC>
    </ContainerSC>
  );
};

export default Text;
