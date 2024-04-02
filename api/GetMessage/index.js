module.exports = async function (context, req) {
  const date = "2024-04-02T11:08:26.226Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

