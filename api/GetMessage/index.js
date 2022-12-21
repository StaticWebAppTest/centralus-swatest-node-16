module.exports = async function (context, req) {
  const date = "2022-12-21T21:08:36.692Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

