module.exports = async function (context, req) {
  const date = "2025-05-04T10:12:37.773Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

