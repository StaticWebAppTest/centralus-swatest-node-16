module.exports = async function (context, req) {
  const date = "2024-04-02T16:12:13.315Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

