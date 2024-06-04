module.exports = async function (context, req) {
  const date = "2024-06-04T00:46:29.237Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

