module.exports = async function (context, req) {
  const date = "2023-02-21T19:08:26.151Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

