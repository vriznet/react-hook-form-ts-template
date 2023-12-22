import { SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';

type RangeInputs = {
  age: number;
};

const ContainerSC = styled.div`
  padding: 24px;
`;

const FormSC = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Range = () => {
  const { register, handleSubmit, watch } = useForm<RangeInputs>({
    defaultValues: {
      age: 18,
    },
  });

  const onSubmit: SubmitHandler<RangeInputs> = (data) => console.log(data);

  console.log(watch('age'));

  return (
    <ContainerSC>
      <FormSC onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="age">Age</label>
        <input type="range" id="age" {...register('age')} />
        <input type="submit" />
      </FormSC>
    </ContainerSC>
  );
};

export default Range;
