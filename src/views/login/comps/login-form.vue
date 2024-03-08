<template>
  <div class="login-form-wrap">
    <div class="login-form-title">{{ $t('login.form.title') }}</div>
    <div class="login-form-error-msg">{{ errorMessage }}</div>
  </div>
  <a-form ref="loginForm"
          :model="userInfo"
          class="login-form"
          layout="vertical"
          @submit="handleSubmit">
    <a-form-item
      field="username"
      :rules="[{ required: true, message: $t('login.form.userName.errMsg') }]"
      :validate-trigger="['change', 'blur']"
      hide-label
    >
      <a-input v-model="userInfo.username" :placeholder="$t('login.form.userName.placeholder')" @keyup.enter="handleSubmit">
        <template #prefix>
          <icon-user />
        </template>
      </a-input>
    </a-form-item>
    <a-form-item
      field="password"
      :rules="[{ required: true, message: $t('login.form.password.errMsg') }]"
      :validate-trigger="['change', 'blur']"
      hide-label
    >
      <a-input-password
        v-model="userInfo.password"
        :placeholder="$t('login.form.password.placeholder')"
        allow-clear
        @keyup.enter="handleSubmit"
      >
        <template #prefix>
          <icon-lock />
        </template>
      </a-input-password>
    </a-form-item>
    <a-space :size="16" direction="vertical">
      <div class="login-form-password-actions">
        <a-link>{{ $t('login.form.forgetPassword') }}</a-link>
      </div>
      <a-button type="primary" html-type="submit" long :loading="loading">
        {{ $t('login.form.login') }}
      </a-button>
      <a-button type="text" long class="login-form-register-btn">
        {{ $t('login.form.register') }}
      </a-button>
    </a-space>
  </a-form>
</template>

<script lang="ts" setup>
import useLoading from '@/hooks/loading';
import useUserStore from '@/store/modules/user';
import type { LoginData } from '@/types/user/type';
import type { ValidatedError } from '@arco-design/web-vue/es/form/interface';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

const errorMessage = ref('');
const userInfo = reactive({
  username: 'admin',
  password: 'admin'
});

const { loading, setLoading } = useLoading();
const userStore = useUserStore();
const router = useRouter();

const handleSubmit = async ({ values, errors }: { values: Record<string, any> ; errors: Record<string, ValidatedError> | undefined}) => {

  if (errors) return;
  setLoading(true);
  try {
    await userStore.login(values as LoginData);
    // 页面跳转
    router.push({ name: 'workplace' });
  } catch (err) {
    errorMessage.value = (err as Error).message;
  } finally {
    setLoading(false);
  }
};
</script>

<style lang="less" scoped>
.login-form {
  &-wrap {
    width: 320px;
  }

  &-title {
    color: var(--color-text-1);
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
  }

  &-error-msg {
    height: 32px;
    color: rgb(var(--red-6));
    line-height: 32px;
  }

  &-password-actions {
    display: flex;
    justify-content: space-between;
  }

  &-register-btn {
    color: var(--color-text-3) !important;
  }
}
</style>