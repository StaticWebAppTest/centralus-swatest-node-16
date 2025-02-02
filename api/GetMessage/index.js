module.exports = async function (context, req) {
  const date = "2025-02-02T07:10:12.257Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

