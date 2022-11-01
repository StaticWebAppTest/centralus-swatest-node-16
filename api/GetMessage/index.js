module.exports = async function (context, req) {
  const date = "2022-11-01T16:17:29.305Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

