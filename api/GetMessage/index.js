module.exports = async function (context, req) {
  const date = "2024-12-05T03:35:10.771Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

