module.exports = async function (context, req) {
  const date = "2025-06-23T14:14:02.271Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

