module.exports = async function (context, req) {
  const date = "2023-08-20T05:07:32.271Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

