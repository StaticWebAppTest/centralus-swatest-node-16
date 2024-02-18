module.exports = async function (context, req) {
  const date = "2024-02-18T02:17:16.382Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

