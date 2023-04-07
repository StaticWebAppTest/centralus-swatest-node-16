module.exports = async function (context, req) {
  const date = "2023-04-07T16:11:12.842Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

