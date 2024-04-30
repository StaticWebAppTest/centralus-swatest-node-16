module.exports = async function (context, req) {
  const date = "2024-04-30T03:10:10.324Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

