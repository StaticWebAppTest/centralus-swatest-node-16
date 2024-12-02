module.exports = async function (context, req) {
  const date = "2024-12-02T08:17:51.456Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

