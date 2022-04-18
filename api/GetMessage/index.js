module.exports = async function (context, req) {
  const date = "2022-04-18T21:09:41.740Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

