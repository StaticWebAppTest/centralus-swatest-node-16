module.exports = async function (context, req) {
  const date = "2025-01-19T11:08:41.342Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

