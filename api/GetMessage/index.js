module.exports = async function (context, req) {
  const date = "2024-02-09T02:14:20.692Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

