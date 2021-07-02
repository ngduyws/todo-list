import i18n from 'i18n'

export function validateTaskInput({ title }) {
  const errors = {}

  if (!title) {
    errors.title = i18n.t('commons.messages.required')
  }

  return errors
}
