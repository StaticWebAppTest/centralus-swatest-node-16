module.exports = async function (context, req) {
  const date = "2024-04-02T05:08:46.316Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

