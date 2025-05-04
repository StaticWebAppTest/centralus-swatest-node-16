module.exports = async function (context, req) {
  const date = "2025-05-04T12:23:25.575Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

