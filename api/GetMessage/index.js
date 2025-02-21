module.exports = async function (context, req) {
  const date = "2025-02-21T02:15:58.584Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

