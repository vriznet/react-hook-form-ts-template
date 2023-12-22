import { SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';

type Fruit = 'strawberry' | 'lime' | 'coconut';

type RadioInputs = {
  fruit: Fruit;
};

const ContainerSC = styled.div`
  padding: 24px;
`;

const FormSC = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Radio = () => {
  const { register, handleSubmit, watch } = useForm<RadioInputs>({
    defaultValues: {
      fruit: 'strawberry',
    },
  });

  const onSubmit: SubmitHandler<RadioInputs> = (data) => console.log(data);

  console.log(watch('fruit'));

  return (
    <ContainerSC>
      <FormSC onSubmit={handleSubmit(onSubmit)}>
        <ul>
          <li>
            <input
              type="radio"
              id="strawberry"
              value="strawberry"
              {...register('fruit')}
            />
            <label htmlFor="strawberry">Strawberry</label>
          </li>
          <li>
            <input type="radio" id="lime" value="lime" {...register('fruit')} />
            <label htmlFor="lime">Lime</label>
          </li>
          <li>
            <input
              type="radio"
              id="coconut"
              value="coconut"
              {...register('fruit')}
            />
            <label htmlFor="coconut">Coconut</label>
          </li>
        </ul>
        <input type="submit" />
      </FormSC>
    </ContainerSC>
  );
};

export default Radio;
