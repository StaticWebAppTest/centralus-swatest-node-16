module.exports = async function (context, req) {
  const date = "2024-03-02T23:08:58.177Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

