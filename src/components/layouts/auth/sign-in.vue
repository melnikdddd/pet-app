<template>
  <form @submit="submit" class="flex flex-col gap-y-2 py-3 px-2">
    <auth-form-input
        v-model:model-value="phone"
        v-bind="phoneAttrs"
        placeholder="Phone"
        type="text"
    />
    <p class="h-[40px] text-rose-600">{{errors.phone}}</p>
    <auth-form-input v-model:model-value="password"
                     v-bind="passwordAttrs"
                     placeholder="Password"
                     type="password"
    />
    <p class="h-[40px] text-rose-600">{{errors.password}}</p>
    <div class="flex items-center justify-center">
      <auth-form-btn @click="submit" text="Submit"/>
    </div>
  </form>
</template>

<script setup lang="ts">

import AuthFormInput from "@/components/inputs/auth-form-input.vue";
import {useForm} from "vee-validate";
import {signInSchema} from "@/common/validation/auth";
import UserApi from "@/common/lib/api/apis/user.api";
import AuthFormBtn from "@/components/buttons/auth-form-btn.vue";

const {values, errors, defineField} = useForm({
  validationSchema: signInSchema,
  initialValues: {
    phone: '',
    password: ''
  }
});

const [phone, phoneAttrs] = defineField('phone', {
  validateOnModelUpdate: false,

});

const [password, passwordAttrs] = defineField('password', {
  validateOnModelUpdate: false,
});

const submit = async () => {
  if (errors.value.phone || errors.value.password) {
    return;
  }

  try {
    await UserApi.signIn(values.phone, values.password)
  } catch (e) {
    console.error(e);
  }
};


</script>

