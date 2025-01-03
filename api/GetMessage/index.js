module.exports = async function (context, req) {
  const date = "2025-01-03T05:11:24.590Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

