module.exports = async function (context, req) {
  const date = "2025-08-26T10:14:22.245Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

