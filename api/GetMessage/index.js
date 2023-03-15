module.exports = async function (context, req) {
  const date = "2023-03-15T00:52:49.590Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

