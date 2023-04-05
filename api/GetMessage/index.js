module.exports = async function (context, req) {
  const date = "2023-04-05T12:21:14.353Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

