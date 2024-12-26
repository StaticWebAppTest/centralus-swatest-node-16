module.exports = async function (context, req) {
  const date = "2024-12-26T15:11:29.944Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

