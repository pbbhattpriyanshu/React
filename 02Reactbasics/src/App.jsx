import Card from "./Components/Card";

function App() {
  return (
    <>
      <h1>Welcome</h1>
      <div className="container">
        <Card pic='https://images.unsplash.com/photo-1588305665522-1c6af1f69b09?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' name='Priyanshu' caption='This my beatifull uk'/>
        <Card pic='https://images.unsplash.com/photo-1601821139990-9fc929db79ce?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' name='Jenifer' caption='Hello i am jenny'/>
      </div>
    </>
  );
}

export default App; // Exporting the App component so it can be used in other files
