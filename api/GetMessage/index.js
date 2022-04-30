module.exports = async function (context, req) {
  const date = "2022-04-30T03:39:31.842Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

