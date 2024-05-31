import { useState } from "react";
import { Container, VStack, HStack, Input, Button, IconButton, Text, Checkbox, Box, Heading } from "@chakra-ui/react";
import { FaTrash, FaPlus } from "react-icons/fa";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const addTask = () => {
    if (taskInput.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: taskInput, completed: false }]);
      setTaskInput("");
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl" mb={6}>
          Todo App
        </Heading>
        <HStack width="100%">
          <Input placeholder="Add a new task" value={taskInput} onChange={(e) => setTaskInput(e.target.value)} />
          <IconButton aria-label="Add Task" icon={<FaPlus />} onClick={addTask} />
        </HStack>
        <VStack spacing={3} width="100%">
          {tasks.map((task) => (
            <HStack key={task.id} width="100%" p={2} borderWidth={1} borderRadius="md" justifyContent="space-between">
              <Checkbox isChecked={task.completed} onChange={() => toggleTaskCompletion(task.id)}>
                <Text as={task.completed ? "s" : "span"}>{task.text}</Text>
              </Checkbox>
              <IconButton aria-label="Delete Task" icon={<FaTrash />} onClick={() => deleteTask(task.id)} />
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
