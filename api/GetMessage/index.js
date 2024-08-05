module.exports = async function (context, req) {
  const date = "2024-08-05T10:10:39.729Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

