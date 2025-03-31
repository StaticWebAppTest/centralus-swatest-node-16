module.exports = async function (context, req) {
  const date = "2025-03-31T06:18:56.126Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

