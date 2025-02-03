module.exports = async function (context, req) {
  const date = "2025-02-03T23:10:56.925Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

