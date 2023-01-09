import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import HomePage from '../../pages/HomePage/HomePage';
import style from "./form.module.css";
import { Link } from "react-router-dom";

type FormValues = {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  cardNumber: string;
  cardDate: string;
  cardCode: string;
};

interface FormProps{
  isShowForm: boolean
  onShowForm: (i: boolean) => void
}

const Form: React.FC<FormProps> = ({onShowForm, isShowForm}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
    getValues,
  } = useForm<FormValues>({ mode: "onChange" });



  const onSubmit: SubmitHandler<FormValues> = (data) => {
    alert('Заказ успешно оформлен, вы будете перенаправлены на главную страницу через 2-3 секунды');
    reset();
    onShowForm(!isShowForm);
    setTimeout(() => {
      window.location.href = '/';
      localStorage.setItem("Basket", JSON.stringify([]));
      localStorage.setItem("Count", JSON.stringify(0));
      localStorage.setItem("Summary", JSON.stringify(0));
      localStorage.setItem("uniqeBasket", JSON.stringify([]));
    }, 2000)
  };

  const cardNumberValue = getValues("cardNumber") || "";

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    const { key } = e;
    !(
      (key >= "0" && key <= "9") ||
      key === "ArrowLeft" ||
      key === "ArrowRight" ||
      key === "Delete" ||
      key === "Backspace"
    ) && e.preventDefault();
  };

  const handleKeyDownDate: React.KeyboardEventHandler<HTMLInputElement> = (
    e
  ) => {
    handleKeyDown(e);
    const { key } = e;
    const { value } = e.target as HTMLInputElement;
    key >= "0" &&
      key <= "9" &&
      value.length === 2 &&
      ((e.target as HTMLInputElement).value = value + "/");
  };

  return (
    <div className={style.modal} >
      <div className={style.modal__container}>
      <div className={style.close} onClick={() => onShowForm(!isShowForm)}>Х</div>
        <div className={style.modal__item}>
          <form className={style.modal__form} onSubmit={handleSubmit(onSubmit)}>
            <div className={style.person__info}>
              <h2 className={style.person__title}>Personal details </h2>
              <div className={style.modal__field}>
                <input
                  className={style.fullName}
                  {...register("fullName", {
                    required: "required",
                    pattern: {
                      value: /^[a-z]{3,}\s[a-z]{3,}$/i,
                      message: "invalid full name",
                    },
                  })}
                  placeholder="full name"
                />
                {errors?.fullName && (
                  <div className={style.error__massage}>
                    {errors.fullName.message}
                  </div>
                )}
              </div>
              <div className={style.modal__field}>
                <input
                  className={style.email}
                  {...register("email", {
                    required: "required",
                    pattern: {
                      value: /^\w+@\w+\.[a-z]{2,}$/i,
                      message: "invalid email",
                    },
                  })}
                  placeholder="email"
                />
                {errors?.email && (
                  <div className={style.error__massage}>{errors.email.message}</div>
                )}
              </div>
              <div className={style.modal__field}>
                <input
                  className={style.phoneNumber}
                  {...register("phone", {
                    required: "required",
                    pattern: { value: /^\+\d{9,}$/, message: "invalid number" },
                  })}
                  placeholder="phone number"
                />
                {errors?.phone && (
                  <div className={style.error__massage}>{errors.phone.message}</div>
                )}
              </div>
              <div className={style.modal__field}>
                <input
                  className={style.address}
                  {...register("address", {
                    required: "required",
                    pattern: {
                      value: /^[a-z]{5,}(\s[a-z]{5,}){2}$/i,
                      message: "invalid address",
                    },
                  })}
                  placeholder="delivery address"
                />
                {errors?.address && (
                  <div className={style.error__massage}>{errors.address.message}</div>
                )}
              </div>
            </div>

            <div className={style.card__info}>
              <h2 className={style.card__title}>Credit card details</h2>
              <div className={style.skeleton__card}>
                <div className={style.block__number}>
                  {cardNumberValue.startsWith("4") ? (
                    <img
                      className={style.card__img}
                      src="https://cdn.visa.com/v2/assets/images/logos/visa/blue/logo.png"
                      alt="visa card"
                    />
                  ) : cardNumberValue.startsWith("5") ? (
                    <img
                      className={style.card__img}
                      src="https://www.mastercard.hu/content/dam/public/mastercardcom/eu/hu/images/mc-logo-52.svg"
                      alt="master card"
                    />
                  ) : (
                    <img
                      className={style.card__img}
                      src="https://i.guim.co.uk/img/media/b73cc57cb1d46ae742efd06b6c58805e8600d482/16_0_2443_1466/master/2443.jpg?width=700&quality=85&auto=format&fit=max&s=fb1dca6cdd4589cd9ef2fc941935de71"
                      alt="other card"
                    />
                  )}
                  <input
                    className={style.cardNumber}
                    {...register("cardNumber", {
                      required: "required",
                      pattern: {
                        value: /^\d{16,}$/,
                        message: "invalid card number",
                      },
                      onChange: (e) => {
                        const { value } = e.target as HTMLInputElement;
                        value.length > 16 &&
                          (e.target.value = value.slice(0, -1));
                      },
                    })}
                    placeholder="card number"
                    onKeyDown={handleKeyDown}
                  />
                </div>

                <div className={style.other__info}>
                  <div className={style.card__data}>
                    VALID:
                    <input
                      className={style.card__data_input}
                      {...register("cardDate", {
                        required: "required",
                        pattern: {
                          value: /^(0[1-9]|1[0-2])\/\d{2,}$/,
                          message: "invalid card date",
                        },
                        onChange: (e) => {
                          const { value } = e.target as HTMLInputElement;
                          value.length > 5 &&
                            (e.target.value = value.slice(0, -1));
                        },
                      })}
                      placeholder="Valid Thru"
                      onKeyDown={handleKeyDownDate}
                    />
                  </div>
                  <div className={style.card__code}>
                    CVV:
                    <input
                      className={style.card__code_input}
                      {...register("cardCode", {
                        required: "required",
                        pattern: {
                          value: /^\d{3,}$/,
                          message: "invalid card code",
                        },
                        onChange: (e) => {
                          const { value } = e.target as HTMLInputElement;
                          value.length > 3 &&
                            (e.target.value = value.slice(0, -1));
                        },
                      })}
                      placeholder="CVV"
                      onKeyDown={handleKeyDown}
                    />
                  </div>
                </div>
              </div>
              {errors?.cardNumber && <div className={style.error__card}>{errors.cardNumber.message}</div>}
              {errors?.cardDate && <div className={style.error__card}>{errors.cardDate.message}</div>}
              {errors?.cardCode && <div className={style.error__card}>{errors.cardCode.message}</div>}
            </div>

            <button className={style.send__btn} type="submit" >confirm</button>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Form