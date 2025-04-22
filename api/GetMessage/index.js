module.exports = async function (context, req) {
  const date = "2025-04-22T10:13:48.271Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

