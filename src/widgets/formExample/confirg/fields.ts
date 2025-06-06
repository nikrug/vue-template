import { TFormOptions } from '@shared/lib/hooks';

type TSomeDto = {
  checkbox: boolean,
  required: string
  select: string
  number: number
  radio: string
  text: string
  mail: string
  url: string
  file: Blob,
}

export const someFormFields: TFormOptions<TSomeDto> = {
  text: {
    placeholder: 'Text'
  },
  number: {
    placeholder: 'Number'
  },
  mail: {
    placeholder: 'Mail',
    rules: {
      email: 'This is email'
    }
  },
  url: {
    placeholder: 'Url',
    rules: {
      url: 'This is url'
    }
  },
  required: {
    placeholder: 'Required',
    rules: {
      required: 'This is required'
    }
  },
  file: {
    placeholder: 'File',
    type: 'file',
    rules: {
      maxSize: {
        value: 2 * 1024 * 1024,
        message: 'The file size is larger than Arnold\'s biceps, it needs to be reduced!'
      }
    }
  },
  radio: {
    placeholder: 'Radio',
    type: 'radio',
    options: [
      {
        value: 'one',
        label: 'One'
      },
      {
        value: 'two',
        label: 'Two'
      }
    ]
  },
  select: {
    defaultValue: 'one',
    placeholder: 'Select',
    type: 'select',
    options: [
      {
        value: 'one',
        label: 'One'
      },
      {
        value: 'two',
        label: 'Two'
      }
    ]
  },
  checkbox: {
    defaultValue: false,
    placeholder: 'Checkbox',
    type: 'checkbox',
  }
};
