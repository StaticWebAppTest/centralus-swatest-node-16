module.exports = async function (context, req) {
  const date = "2025-01-26T09:10:54.295Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

