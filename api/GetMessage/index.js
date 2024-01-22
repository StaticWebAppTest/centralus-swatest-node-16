module.exports = async function (context, req) {
  const date = "2024-01-22T16:12:34.329Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

