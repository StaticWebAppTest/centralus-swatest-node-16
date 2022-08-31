module.exports = async function (context, req) {
  const date = "2022-08-31T01:14:33.701Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

