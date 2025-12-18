module.exports = async function (context, req) {
  const date = "2025-12-18T14:16:30.271Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

