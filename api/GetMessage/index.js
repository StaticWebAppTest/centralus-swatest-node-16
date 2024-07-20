module.exports = async function (context, req) {
  const date = "2024-07-20T19:07:34.253Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

