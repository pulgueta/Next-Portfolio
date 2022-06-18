import Head from "next/head";

import { useRef } from "react";

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
  useColorMode,
  useToast,
  FormErrorMessage,
} from "@chakra-ui/react";

import { Formik, Form, Field } from "formik";

import { motion } from "framer-motion";

import emailjs from "@emailjs/browser";

import { publicKey, serviceId, templateId } from "../email";

const Contact = () => {
  const formRef = useRef();

  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const toast = useToast();

  const handleEmail = () => {
    emailjs
      .sendForm(
        process.env.EMAILJS_SERVICEID,
        process.env.EMAILJS_TEMPLATEID,
        formRef.current,
        process.env.EMAILJS_PUBLICKEY
      )
      .then(() => {
        toast({
          title: "Email sent!",
          description: "Thanks for reaching out!",
          status: "success",
          duration: 2500,
          position: "top",
          isClosable: true,
        });
      })
      .catch(() => {
        toast({
          title: "Email not sent!",
          description: "Something went wrong, please try again.",
          status: "error",
          duration: 2500,
          position: "top",
          isClosable: true,
        });
      });
  };

  return (
    <>
      <Head>
        <title>Contact</title>
        <meta charSet="utf-8" />
        <meta name="author" content="Andrés Rodríguez (pulgueta)" />
        <meta name="description" content="Contact me." />
        <meta name="keywords" content="contact, email, email form, form" />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="1 day" />
        <meta name="language" content="English/Spanish" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <Flex
        minH={"calc(100vh - 128px)"}
        alignItems={"center"}
        justify={"center"}
        overflowX={"hidden"}
        px={[4, 4, 0]}
      >
        <Box
          as={motion.div}
          initial={{
            opacity: 0,
            y: -30,
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
            },
          }}
          bg={isDark ? "gray.700" : "gray.100"}
          p={6}
          borderRadius={"xl"}
          w={400}
          h={500}
          boxShadow={"md"}
        >
          <Heading mb={4} as={"h3"} size={"lg"} textAlign={"center"}>
            Contact me!
          </Heading>
          <Formik
            initialValues={{ name: "", email: "", message: "" }}
            onSubmit={(values, actions) => {
              actions.setSubmitting(false);
              actions.resetForm();
              handleEmail(values);
            }}
          >
            {(props) => (
              <Form ref={formRef}>
                <Field name="name">
                  {({ field, form }) => (
                    <FormControl
                      isRequired
                      isInvalid={form.errors.name && form.touched.name}
                    >
                      <FormLabel htmlFor="name">You name</FormLabel>
                      <Input {...field} id="name" placeholder="John Doe" />
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name="email">
                  {({ field, form }) => (
                    <FormControl
                      isRequired
                      isInvalid={form.errors.email && form.touched.email}
                    >
                      <FormLabel mt={2} htmlFor="email">
                        Email
                      </FormLabel>
                      <Input
                        {...field}
                        id="email"
                        placeholder="user@domain.com"
                      />
                      <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name="message">
                  {({ field, form }) => (
                    <FormControl
                      isRequired
                      isInvalid={form.errors.message && form.touched.message}
                    >
                      <FormLabel mt={2} htmlFor="message">
                        Message
                      </FormLabel>
                      <Textarea
                        resize={"none"}
                        h={145}
                        {...field}
                        id="message"
                        placeholder="Hi, I'm John Doe, I would like to hire you for my company."
                      />
                      <FormErrorMessage>{form.errors.message}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Flex justify={"center"}>
                  <Button
                    bg={isDark ? "gray.800" : "gray.300"}
                    w={"50%"}
                    mt={4}
                    isLoading={props.isSubmitting}
                    type="submit"
                  >
                    Submit
                  </Button>
                </Flex>
              </Form>
            )}
          </Formik>
        </Box>
      </Flex>
    </>
  );
};

export default Contact;
