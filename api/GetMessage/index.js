module.exports = async function (context, req) {
  const date = "2022-06-13T14:09:17.271Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

