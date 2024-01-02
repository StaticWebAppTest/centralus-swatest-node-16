module.exports = async function (context, req) {
  const date = "2024-01-02T07:08:34.746Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

