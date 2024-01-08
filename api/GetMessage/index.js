module.exports = async function (context, req) {
  const date = "2024-01-08T15:09:47.249Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

