module.exports = async function (context, req) {
  const date = "2023-07-21T12:16:53.791Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

