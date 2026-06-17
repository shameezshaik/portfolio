export const profile = {
  name: { first: 'Shameez', last: 'Shaik', full: 'Shameez Shaik' },
  title: 'AI Engineer',
  email: 'shameezsk543@gmail.com',
  phone: '(989) 513-0787',
  location: 'Michigan, USA',
  linkedin: 'https://linkedin.com/in/shameez-shaik',
  bio: 'AI Engineer with 3+ years of experience building production-grade AI applications, RAG systems, ML solutions, and scalable backend platforms. Experienced in designing end-to-end AI workflows using LLMs, vector databases, FastAPI, and cloud-native technologies.',
  available: true,

  stats: [
    { value: '3+', label: 'Years Exp.' },
    { value: '5+', label: 'Companies' },
    { value: '10+', label: 'AI Projects' },
    { value: '1', label: 'Publication' },
  ],

  skills: {
    'AI & MLOps': {
      color: '#8b5cf6',
      items: ['RAG Pipeline', 'LangChain', 'LlamaIndex', 'LLM Integration', 'Prompt Engineering', 'MLflow', 'RAGAS', 'Scikit-learn', 'TensorFlow', 'PyTorch', 'Vector DBs'],
    },
    'Data Engineering': {
      color: '#22d3ee',
      items: ['Apache Spark', 'Kafka', 'Airflow', 'Prefect', 'dbt', 'Snowflake', 'Databricks', 'BigQuery', 'PostgreSQL', 'ETL/ELT', 'Delta Lake'],
    },
    'App Dev & DevOps': {
      color: '#34d399',
      items: ['Python', 'FastAPI', 'REST APIs', 'Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions', 'Pytest', 'Pandas', 'SQL'],
    },
    'Cloud': {
      color: '#f472b6',
      items: ['AWS', 'Azure', 'GCP'],
    },
  },

  experience: [
    {
      company: 'BotAgents LLC',
      role: 'AI Engineer',
      period: 'Feb 2025 – Present',
      type: 'Full-time',
      bullets: [
        'Designed and deployed production AI applications leveraging LLMs, RAG architectures, and workflow orchestration processing millions of records daily',
        'Reduced operational failures by 35% via automated data validation using Great Expectations across structured and unstructured enterprise data',
        'Developed end-to-end RAG platforms with Pinecone vector DBs and FastAPI inference APIs, improving contextual retrieval and enabling low-latency AI experiences',
      ],
    },
    {
      company: 'APTRANSCO',
      role: 'AI Engineer',
      period: 'May 2022 – Sep 2023',
      type: 'Full-time',
      bullets: [
        'Built AI-powered monitoring workflows for transmission network operations across 50+ distribution points',
        'Developed energy monitoring system using Python, Scikit-learn, and vector indexing for anomaly detection and load attribution',
      ],
    },
    {
      company: 'NoobTron Pvt. Ltd.',
      role: 'Data Engineer',
      period: 'Feb 2021 – May 2022',
      type: 'Full-time',
      bullets: [
        'Built automated ETL pipelines using Python and Airflow for real-time battery sensor data ingestion and modeling',
        'Developed anomaly detection pipelines on noisy telemetry reducing reporting errors by 12%',
      ],
    },
  ],

  projects: [
    {
      name: 'Chalo Office',
      subtitle: 'AI Carpooling Platform',
      desc: 'Real-time Kafka & Spark Streaming ETL pipeline with PostGIS geospatial model for sub-second ride matching. Fine-tuned Llama 3.2 (PEFT) for route classification, plus GPT-based self-healing autonomous agents.',
      tech: ['Kafka', 'Spark', 'PostgreSQL', 'PostGIS', 'Llama 3.2', 'PEFT', 'GPT Agents', 'k-d Tree'],
      period: 'April 2026 – Present',
      highlight: '65% faster clustering',
    },
    {
      name: 'LastMinute Cars',
      subtitle: 'AI Fleet Operations Platform',
      desc: 'End-to-end fleet management platform with ML demand-forecasting module. Fine-tuned text-to-SQL model using PEFT to translate natural language queries into SQL, cutting reporting turnaround by 60%.',
      tech: ['Python', 'ML', 'PEFT', 'Text-to-SQL', 'FastAPI', 'PostgreSQL'],
      period: '2025',
      highlight: '60% faster reporting',
    },
  ],

  education: [
    { degree: 'M.S. Information Systems', school: 'Central Michigan University', year: 'Dec 2025' },
    { degree: 'B.Tech — Electrical & Electronics', school: 'JNTUA', year: 'May 2023' },
  ],

  publication: {
    title: 'Neural Network Controlled Nano-Grids',
    journal: 'IJSRST, Vol. 10, Issue 2',
    year: '2023',
  },
}
