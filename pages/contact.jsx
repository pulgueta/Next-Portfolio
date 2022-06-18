import Head from "next/head";

import { useState, useRef } from "react";

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  Stack,
  Textarea,
  VStack,
  useColorMode,
  useToast,
  FormErrorMessage,
} from "@chakra-ui/react";

import { Formik, Form, Field, ErrorMessage } from "formik";

import { motion } from "framer-motion";

import { validateEmail } from "../functions/validateEmail";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const formRef = useRef();

  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const toast = useToast();

  const handleEmail = async (e) => {
    e.preventDefault();

    if (data.name === "" || data.email === "" || data.message === "") {
      toast({
        title: "Please fill all the fields!",
        description: "Empty spaces cannot be send.",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    } else if (!validateEmail) {
      toast({
        title: "Please enter a valid email!",
        description: "Please &#9997;",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    }
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
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
              }, 1000);
            }}
          >
            {(props) => (
              <Form>
                <Field name="name">
                  {({ field, form }) => (
                    <FormControl
                      isRequired
                      isInvalid={form.errors.name && form.touched.name}
                    >
                      <FormLabel htmlFor="name">You name</FormLabel>
                      <Input {...field} id="name" placeholder="John Doe" />
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>

                      <FormLabel mt={2} htmlFor="email">
                        Email
                      </FormLabel>
                      <Input
                        {...field}
                        id="email"
                        placeholder="user@domain.com"
                      />
                      <FormErrorMessage>{form.errors.email}</FormErrorMessage>

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
