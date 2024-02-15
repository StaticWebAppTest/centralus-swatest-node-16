module.exports = async function (context, req) {
  const date = "2024-02-15T02:15:46.176Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

