module.exports = async function (context, req) {
  const date = "2024-09-17T12:21:17.271Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

