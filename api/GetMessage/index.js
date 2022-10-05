module.exports = async function (context, req) {
  const date = "2022-10-05T10:14:41.768Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

