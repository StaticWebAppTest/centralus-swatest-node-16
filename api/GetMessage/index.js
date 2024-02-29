module.exports = async function (context, req) {
  const date = "2024-02-29T03:10:16.249Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

