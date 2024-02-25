module.exports = async function (context, req) {
  const date = "2024-02-25T02:17:49.662Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

