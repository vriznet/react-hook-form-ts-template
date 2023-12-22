import { SubmitHandler, useForm } from 'react-hook-form';
import { GlobalStyles } from './components/GlobalStyles';

type Inputs = {
  example: string;
  exampleRequired: string;
};

const App = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch('example'));

  return (
    <>
      <GlobalStyles />
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input defaultValue="test" {...register('example')} />
          <input {...register('exampleRequired', { required: true })} />
          {errors.exampleRequired && <span>This field is required</span>}
          <input type="submit" />
        </form>
      </div>
    </>
  );
};

export default App;
