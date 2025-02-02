module.exports = async function (context, req) {
  const date = "2025-02-02T06:14:54.263Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

