module.exports = async function (context, req) {
  const date = "2024-08-29T10:12:12.782Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

