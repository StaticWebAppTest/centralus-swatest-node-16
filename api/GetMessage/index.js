module.exports = async function (context, req) {
  const date = "2024-04-02T01:49:26.685Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

