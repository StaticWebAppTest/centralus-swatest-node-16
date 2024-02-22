module.exports = async function (context, req) {
  const date = "2024-02-22T06:12:17.004Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

