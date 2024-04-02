module.exports = async function (context, req) {
  const date = "2024-04-02T10:10:56.842Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

