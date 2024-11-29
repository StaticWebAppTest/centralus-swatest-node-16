module.exports = async function (context, req) {
  const date = "2024-11-29T02:55:45.166Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

