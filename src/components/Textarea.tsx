import { FocusEventHandler, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';

type TextareaInputs = {
  example: string;
};

const ContainerSC = styled.div`
  padding: 24px;
`;

const FormSC = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Textarea = () => {
  const {
    register,
    handleSubmit,
    watch,
    setFocus,
    formState: { errors },
  } = useForm<TextareaInputs>();

  const onSubmit: SubmitHandler<TextareaInputs> = (data) => console.log(data);

  const onFocusTextarea: FocusEventHandler<HTMLTextAreaElement> = (event) => {
    const element = event.target;
    setTimeout(() => {
      element.style.height = `${event.target.scrollHeight}px`;
    }, 0);
  };

  const textareaAutosize = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const element = event.target;
    element.style.height = 'auto';
    element.style.height = `${event.target.scrollHeight}px`;
  };

  console.log(watch('example'));

  useEffect(() => {
    setFocus('example');
  }, [setFocus]);

  return (
    <ContainerSC>
      <FormSC onSubmit={handleSubmit(onSubmit)}>
        <textarea
          id="example"
          rows={1}
          placeholder="Type anything big"
          {...register('example', {
            required: true,
            onChange: textareaAutosize,
          })}
          onFocus={onFocusTextarea}
        />
        {errors.example && <span>This field is required</span>}
        <input type="submit" />
      </FormSC>
    </ContainerSC>
  );
};

export default Textarea;
