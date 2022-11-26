module.exports = async function (context, req) {
  const date = "2022-11-26T09:09:17.324Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

