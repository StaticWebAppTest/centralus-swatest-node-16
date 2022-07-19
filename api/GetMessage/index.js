module.exports = async function (context, req) {
  const date = "2022-07-19T10:11:57.271Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

