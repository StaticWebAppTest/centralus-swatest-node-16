module.exports = async function (context, req) {
  const date = "2023-06-08T22:08:04.625Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

