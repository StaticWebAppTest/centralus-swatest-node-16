module.exports = async function (context, req) {
  const date = "2024-12-26T13:17:56.253Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

