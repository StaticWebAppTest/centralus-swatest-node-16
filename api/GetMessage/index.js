module.exports = async function (context, req) {
  const date = "2025-05-13T23:12:42.513Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

