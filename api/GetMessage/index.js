module.exports = async function (context, req) {
  const date = "2025-02-22T23:10:15.306Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

