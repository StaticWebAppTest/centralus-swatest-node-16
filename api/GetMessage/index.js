module.exports = async function (context, req) {
  const date = "2022-11-03T16:18:41.100Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

