module.exports = async function (context, req) {
  const date = "2024-01-31T09:08:39.730Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

