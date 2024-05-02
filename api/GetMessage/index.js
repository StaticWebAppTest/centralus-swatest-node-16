module.exports = async function (context, req) {
  const date = "2024-05-02T10:10:41.309Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

