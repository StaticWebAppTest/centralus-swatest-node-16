module.exports = async function (context, req) {
  const date = "2023-06-05T13:12:56.513Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

