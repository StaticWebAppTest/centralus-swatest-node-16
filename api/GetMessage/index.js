module.exports = async function (context, req) {
  const date = "2023-01-31T22:08:55.052Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

