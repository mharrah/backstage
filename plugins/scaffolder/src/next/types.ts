/*
 * Copyright 2022 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * These types will be replaced eventually by the one in the scaffolder-react plugin.
 * It is a temporary solution to avoid the `/alpha` types being re-exported and that not being supported right now.
 * It exists already in the `scaffolder-react` plugin, so you may have to update both files.
 */

import type { FormProps as SchemaFormProps } from '@rjsf/core-v5';

/**
 * The field template from \@rjsf/core which is a react component that gets passed \@rjsf/core field related props.
 *
 * @alpha
 */
export type NextLayoutTemplate<T = any> = NonNullable<
  SchemaFormProps<T>['uiSchema']
>['ui:ObjectFieldTemplate'];

/**
 * The type of layouts that is passed to the TemplateForms
 *
 * @alpha
 */
export interface NextLayoutOptions<P = any> {
  name: string;
  component: NextLayoutTemplate<P>;
}

/**
 * Any `@rjsf/core` form properties that are publicly exposed to the `NextScaffolderpage`
 *
 * @alpha
 * @deprecated use the import from {@link @backstage/plugin-scaffolder-react/alpha#FormProps} instead
 */
export type FormProps = Pick<
  SchemaFormProps,
  'transformErrors' | 'noHtml5Validate'
>;
