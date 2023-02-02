module.exports = async function (context, req) {
  const date = "2023-02-02T00:52:29.337Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

