module.exports = async function (context, req) {
  const date = "2023-08-16T11:06:59.271Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

