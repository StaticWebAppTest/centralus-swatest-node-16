module.exports = async function (context, req) {
  const date = "2024-01-28T11:06:29.513Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

