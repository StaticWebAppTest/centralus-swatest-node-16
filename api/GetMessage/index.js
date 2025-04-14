module.exports = async function (context, req) {
  const date = "2025-04-14T09:14:54.590Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

