<template>
    <div class="container login-container">
    <div class="row">
        <!-- <pre>{{ formData }}</pre> -->
    </div>
        <div class="row">
            <div class="col-lg-10 mx-auto">
                <div class="row">
                    <div class="col-md-3"></div>
                    <div class="col-md-6 mx-auto ">
                        <div class="heading mb-1">
                            <h2 class="title">Login</h2>
                        </div>

                        <form action="#">
                            <label for="login-email">
                                Username or email address
                                <span class="required">*</span>
                            </label>

                            <div class="form-group">
                                <input type="email" v-model="email" class="form-input form-wide" id="login-email" required />
                                <div class="text-danger">
                                    {{ emailError }}
                                </div>
                            </div>
                           
                            <label for="login-password">
                                Password
                                <span class="required">*</span>
                            </label>

                            <div class="form-group">
                                <input type="password"  v-model="password" class="form-input form-wide" id="login-password" required />
                                <div class="text-danger"> {{ passwordError }}</div>
                            </div>
                          

                            <div class="form-footer">
                                <div class="custom-control custom-checkbox mb-0">
                                    <input type="checkbox" class="custom-control-input" id="lost-password" />
                                    <label class="custom-control-label mb-0" for="lost-password">Remember
                                        me</label>
                                </div>

                                <a href="forgot-password.html"
                                    class="forget-password text-dark form-footer-right">Forgot
                                    Password?</a>
                            </div>
                            <button type="submit" class="btn btn-dark btn-md w-100"  @click.prevent="onSubmit()">
                                LOGIN
                            </button>
                        </form>
                    </div>
                    <div class="col-md-3"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useForm, useField } from 'vee-validate';
import * as yup from 'yup';
import { useUserStore } from '~/stores/userStore';

const store = useUserStore();
const loading  = ref(false);

 // Define a validation schema
 const schema = yup.object({
      email: yup.string().required().email(),
	  password: yup.string().required().min(8),
 });


// Create a form context with the validation schema
const { handleSubmit, submitCount, setFieldError, setErrors  } =  useForm({
    validationSchema: schema,
});

   // No need to define rules for fields
const { value: email, errorMessage: emailError } = useField('email');
const { value: password, errorMessage: passwordError } = useField('password');

// submit login form - documented TODO:
const onSubmit = handleSubmit(values => {
    alert('working');
    loading.value = true

    setTimeout( async () => {
       await store.loginUser(values)
        loading.value = false
    }, 1000)
    
    loading.value = false
});

const isTooManyAttempts = computed(() => {
		return submitCount.value >= 10;
	});


</script>