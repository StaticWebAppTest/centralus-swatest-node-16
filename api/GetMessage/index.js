module.exports = async function (context, req) {
  const date = "2025-02-20T23:11:49.301Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

