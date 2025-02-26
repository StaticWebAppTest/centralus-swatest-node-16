module.exports = async function (context, req) {
  const date = "2025-02-26T09:13:14.780Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

