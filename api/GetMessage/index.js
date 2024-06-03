module.exports = async function (context, req) {
  const date = "2024-06-03T20:10:26.513Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

