module.exports = async function (context, req) {
  const date = "2025-02-02T10:10:50.126Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

