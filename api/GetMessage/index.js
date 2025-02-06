module.exports = async function (context, req) {
  const date = "2025-02-06T08:15:56.208Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

