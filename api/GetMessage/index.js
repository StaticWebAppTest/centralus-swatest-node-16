module.exports = async function (context, req) {
  const date = "2023-01-07T10:08:49.225Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

