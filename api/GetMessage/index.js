module.exports = async function (context, req) {
  const date = "2023-11-01T10:09:26.513Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

