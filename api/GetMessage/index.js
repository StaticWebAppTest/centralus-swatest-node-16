module.exports = async function (context, req) {
  const date = "2025-10-06T08:17:55.857Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

