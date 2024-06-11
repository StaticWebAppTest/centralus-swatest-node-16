module.exports = async function (context, req) {
  const date = "2024-06-11T08:13:42.271Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

