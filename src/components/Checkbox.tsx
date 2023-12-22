import { SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';

type Fruit = 'strawberry' | 'lime' | 'coconut';

type CheckboxInputs = {
  fruits: Fruit[];
};

const ContainerSC = styled.div`
  padding: 24px;
`;

const FormSC = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Checkbox = () => {
  const { register, handleSubmit, watch } = useForm<CheckboxInputs>({
    defaultValues: {
      fruits: [],
    },
  });

  const onSubmit: SubmitHandler<CheckboxInputs> = (data) => console.log(data);

  console.log(watch('fruits'));

  return (
    <ContainerSC>
      <FormSC onSubmit={handleSubmit(onSubmit)}>
        <ul>
          <li>
            <input
              type="checkbox"
              id="strawberry"
              value="strawberry"
              {...register('fruits')}
            />
            <label htmlFor="strawberry">Strawberry</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="lime"
              value="lime"
              {...register('fruits')}
            />
            <label htmlFor="lime">Lime</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="coconut"
              value="coconut"
              {...register('fruits')}
            />
            <label htmlFor="coconut">Coconut</label>
          </li>
        </ul>
        <input type="submit" />
      </FormSC>
    </ContainerSC>
  );
};

export default Checkbox;
