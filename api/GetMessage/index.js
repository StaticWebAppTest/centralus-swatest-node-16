module.exports = async function (context, req) {
  const date = "2024-05-26T12:16:20.543Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

