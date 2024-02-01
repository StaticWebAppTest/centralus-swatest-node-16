module.exports = async function (context, req) {
  const date = "2024-02-01T23:08:56.263Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

