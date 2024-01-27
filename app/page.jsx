"use client";
import React from "react";
import { Button } from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import Link from "next/link";
export default function HomePage() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 ">
                <h1 className="text-black text-2xl">Introduction</h1>
              </ModalHeader>
              <ModalBody>
                <p className="text-black">
                  Welcome to the Next.js Admin Dashboard project! This project
                  is a result of my learning journey with Next.js, where I have
                  built an admin dashboard with custom tables, pagination ,
                  charts, and server actions to interact with a MongoDB
                  database. The project also utilizes Next UI for creating
                  tables.
                </p>
                <p className="text-black  ">
                  - You can add - delete users & Products.
                </p>
                <p className="text-black  ">
                  - Can also filter data with search & other filters
                </p>
                <p className="text-black font-bold">
                  *Note :- This is not responsive for now so use it in Desktop
                  Only*
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Link href="/dashboard">
                  <Button color="primary" onPress={onClose}>
                    Next
                  </Button>
                </Link>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      <div className="flex flex-wrap gap-4 items-center h-[100vh] justify-center">
        <Button
          color="primary"
          variant="shadow"
          className="bg-white h-16 w-56 text-black font-bold text-lg"
          onPress={onOpen}
        >
          Go to Dashboard
        </Button>
      </div>
    </>
  );
}
