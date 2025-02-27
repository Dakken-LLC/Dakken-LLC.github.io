import SectionBreadcrumb from "@/components/SectionBreadcrumb";
import SectionHeader from "@/components/SectionHeader";
import { Field } from "@/components/ui/field";
import {
  NativeSelectField,
  NativeSelectRoot,
} from "@/components/ui/native-select";
import { challenge } from "@/utils/challenge";
import { notify } from "@/utils/notify";
import { notifyError, notifySending, notifySuccess } from "@/utils/toaster";
import {
  Box,
  Button,
  Fieldset,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm();

  const _handleSubmit = async (data: Record<string, string>) => {
    if (!challenge(data.message)) {
      notifyError("At least one Japanese character is required.");
      return;
    }

    notifySending();
    const text = format(data);
    try {
      const res = await notify(text);
      if (!res.ok) {
        throw new Error("Failed to send message");
      }
      notifySuccess();
      ["name", "email", "company", "message", "type"].forEach((key) =>
        resetField(key)
      );
    } catch {
      notifyError("Failed to send message.");
    }
  };

  return (
    <Stack my={8}>
      <SectionBreadcrumb items={[{ title: "Contact", href: "/contact" }]} />
      <SectionHeader title="お問い合わせ" titleEn="Contact" />

      <Box
        as="form"
        onSubmit={handleSubmit(_handleSubmit)}
        w="min(100%, 800px)"
      >
        <Fieldset.Root size="lg" p={6} invalid={Object.keys(errors).length > 0}>
          <Stack gap={8}>
            <Fieldset.Legend fontSize={"3xl"}>
              お問い合わせフォーム
            </Fieldset.Legend>
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
              <Input {...register("email", { required: true })} type="email" />
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
                items={[
                  "お仕事のご依頼",
                  "弊社へのご質問",
                  "資料請求",
                  "その他",
                ]}
              />
            </NativeSelectRoot>
          </Field>

          <Fieldset.ErrorText></Fieldset.ErrorText>

          <Button type="submit" alignSelf="flex-start">
            送信
          </Button>
        </Fieldset.Root>
      </Box>
    </Stack>
  );
}

const format = (data: Record<string, string>) => {
  return `
- お問い合わせ日時: ${new Date().toLocaleString("ja-JP", {
    timeZone: "Asia/Tokyo",
  })}
- お名前: ${data.name}
- メールアドレス: ${data.email}
- 会社名: ${data.company || "未入力"}
- お問い合わせ種別: ${data.type}
- お問い合わせ内容:
${data.message}

---
`;
};
