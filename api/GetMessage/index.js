module.exports = async function (context, req) {
  const date = "2025-02-22T00:55:50.120Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

