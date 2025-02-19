module.exports = async function (context, req) {
  const date = "2025-02-19T17:10:55.861Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

