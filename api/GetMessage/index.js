module.exports = async function (context, req) {
  const date = "2022-06-13T16:13:29.271Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

