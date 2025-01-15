module.exports = async function (context, req) {
  const date = "2025-01-15T16:13:53.332Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

