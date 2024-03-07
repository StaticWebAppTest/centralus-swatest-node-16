module.exports = async function (context, req) {
  const date = "2024-03-07T21:08:49.590Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

