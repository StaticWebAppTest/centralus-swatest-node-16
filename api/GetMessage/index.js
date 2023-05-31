module.exports = async function (context, req) {
  const date = "2023-05-31T19:06:55.044Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

