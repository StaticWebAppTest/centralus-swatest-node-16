module.exports = async function (context, req) {
  const date = "2025-05-21T15:14:55.053Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

