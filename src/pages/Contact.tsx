import styles from "./Contact.module.css";
import { useForm } from "react-hook-form";
import { notify } from "@/utils/notify";
import PageMoveTransition from "../utils/PageMoveTransition";
import { Button, Fieldset, Input, Textarea, Stack } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import {
  NativeSelectField,
  NativeSelectRoot,
} from "@/components/ui/native-select";
import test from "../assets/test.png";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const _handleSubmit = async (data: Record<string, string>) => {
    const text = format(data);
    try {
      await notify(text);
      alert("送信しました");
    } catch {
      alert("送信に失敗しました");
    }
  };

  return (
    <PageMoveTransition>
      <div className={styles.container}>
        <img className={styles.topImage} src={test} alt="contact-top" />
        <div
          // TODO: ここのインラインスタイルは将来的に削除してください
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
          }}
        >
          <form onSubmit={handleSubmit(_handleSubmit)}>
            <Fieldset.Root
              size="lg"
              padding={6}
              invalid={Object.keys(errors).length > 0}
            >
              <Stack>
                <Fieldset.Legend>お問い合わせ</Fieldset.Legend>
                <Fieldset.HelperText>
                  お仕事の依頼やご質問など、お気軽にお問い合わせください。
                  <br />
                  担当者から折り返しご連絡いたします。（* は必須項目です）
                </Fieldset.HelperText>
              </Stack>

              <Fieldset.Content>
                <Field label="お名前*">
                  <Input {...register("name", { required: true })} />
                  {errors.name && (
                    <Fieldset.ErrorText>必須項目です</Fieldset.ErrorText>
                  )}
                </Field>

                <Field label="メールアドレス*">
                  <Input
                    {...register("email", { required: true })}
                    type="email"
                  />
                  {errors.email && (
                    <Fieldset.ErrorText>必須項目です</Fieldset.ErrorText>
                  )}
                </Field>
              </Fieldset.Content>

              <Field label="会社名">
                <Input {...register("company")} />
              </Field>

              <Field label="お問い合わせ内容*">
                <Textarea
                  {...register("message", { required: true })}
                  minH="10em"
                  maxH="20em"
                />
                {errors.message && (
                  <Fieldset.ErrorText>必須項目です</Fieldset.ErrorText>
                )}
              </Field>

              <Field label="お問い合わせ種別*">
                <NativeSelectRoot>
                  <NativeSelectField
                    {...register("type")}
                    items={["お仕事の依頼", "弊社へのご質問", "その他"]}
                  />
                </NativeSelectRoot>
              </Field>

              <Fieldset.ErrorText></Fieldset.ErrorText>

              <Button type="submit" alignSelf="flex-start">
                送信
              </Button>
            </Fieldset.Root>
          </form>
        </div>
      </div>
    </PageMoveTransition>
  );
}

const format = (data: Record<string, string>) => {
  return `
**HP よりお問い合わせがありました**

- お問い合わせ日時: ${new Date().toLocaleString("ja-JP", {
    timeZone: "Asia/Tokyo",
  })}
- お名前: ${data.name}
- メールアドレス: ${data.email}
- 会社名: ${data.company || "未入力"}
- お問い合わせ内容:
${data.message}
- お問い合わせ種別: ${data.type}

`;
};
