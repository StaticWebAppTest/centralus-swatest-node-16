module.exports = async function (context, req) {
  const date = "2024-02-26T08:12:01.009Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

