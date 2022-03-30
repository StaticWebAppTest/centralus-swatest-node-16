module.exports = async function (context, req) {
  const date = "2022-03-30T05:09:40.271Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

