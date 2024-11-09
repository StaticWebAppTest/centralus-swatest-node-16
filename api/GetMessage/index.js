module.exports = async function (context, req) {
  const date = "2024-11-09T06:14:29.271Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

