module.exports = async function (context, req) {
  const date = "2025-05-02T14:12:39.857Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

