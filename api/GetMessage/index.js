module.exports = async function (context, req) {
  const date = "2024-01-02T17:08:29.453Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

