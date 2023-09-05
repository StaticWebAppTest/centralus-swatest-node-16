module.exports = async function (context, req) {
  const date = "2023-09-05T16:11:16.271Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

