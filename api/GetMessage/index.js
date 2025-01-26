module.exports = async function (context, req) {
  const date = "2025-01-26T03:13:49.002Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

