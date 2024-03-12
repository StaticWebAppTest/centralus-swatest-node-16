module.exports = async function (context, req) {
  const date = "2024-03-12T19:08:36.513Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

