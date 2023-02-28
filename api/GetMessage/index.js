module.exports = async function (context, req) {
  const date = "2023-02-28T19:08:21.591Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

