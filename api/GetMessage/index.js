module.exports = async function (context, req) {
  const date = "2024-01-14T16:10:43.166Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

