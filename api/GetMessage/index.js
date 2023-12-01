module.exports = async function (context, req) {
  const date = "2023-12-01T21:07:58.025Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

