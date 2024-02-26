module.exports = async function (context, req) {
  const date = "2024-02-26T01:42:58.434Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

