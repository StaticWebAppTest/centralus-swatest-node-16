module.exports = async function (context, req) {
  const date = "2025-02-22T20:11:32.048Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

