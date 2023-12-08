module.exports = async function (context, req) {
  const date = "2023-12-08T00:43:57.123Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

