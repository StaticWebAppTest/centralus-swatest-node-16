module.exports = async function (context, req) {
  const date = "2022-10-21T07:23:41.717Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

