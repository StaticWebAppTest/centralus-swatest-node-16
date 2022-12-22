module.exports = async function (context, req) {
  const date = "2022-12-22T18:11:45.271Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

