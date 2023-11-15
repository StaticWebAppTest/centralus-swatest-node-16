module.exports = async function (context, req) {
  const date = "2023-11-15T13:12:37.513Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

