module.exports = async function (context, req) {
  const date = "2022-05-31T18:13:41.972Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

