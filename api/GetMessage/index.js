module.exports = async function (context, req) {
  const date = "2025-01-26T07:10:03.729Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

