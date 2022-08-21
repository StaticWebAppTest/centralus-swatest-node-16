module.exports = async function (context, req) {
  const date = "2022-08-21T20:11:41.961Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

