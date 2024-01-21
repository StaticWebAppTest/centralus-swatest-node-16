module.exports = async function (context, req) {
  const date = "2024-01-21T05:39:11.271Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

