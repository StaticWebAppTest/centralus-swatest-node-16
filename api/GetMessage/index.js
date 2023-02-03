module.exports = async function (context, req) {
  const date = "2023-02-03T06:12:41.009Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

