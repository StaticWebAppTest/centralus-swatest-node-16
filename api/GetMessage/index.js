module.exports = async function (context, req) {
  const date = "2025-01-08T11:09:46.630Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

