module.exports = async function (context, req) {
  const date = "2024-01-02T00:42:30.591Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

