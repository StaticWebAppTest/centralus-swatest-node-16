module.exports = async function (context, req) {
  const date = "2023-02-03T16:12:37.166Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

