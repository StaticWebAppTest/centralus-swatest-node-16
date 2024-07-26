module.exports = async function (context, req) {
  const date = "2024-07-26T10:11:26.127Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

