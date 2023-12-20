module.exports = async function (context, req) {
  const date = "2023-12-20T08:09:57.166Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

