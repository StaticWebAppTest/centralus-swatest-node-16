module.exports = async function (context, req) {
  const date = "2024-08-17T02:33:35.922Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

