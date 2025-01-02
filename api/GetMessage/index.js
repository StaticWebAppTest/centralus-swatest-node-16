module.exports = async function (context, req) {
  const date = "2025-01-02T09:12:27.725Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

