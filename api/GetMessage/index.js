module.exports = async function (context, req) {
  const date = "2022-08-20T00:58:18.271Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

