module.exports = async function (context, req) {
  const date = "2023-08-24T21:07:29.599Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

