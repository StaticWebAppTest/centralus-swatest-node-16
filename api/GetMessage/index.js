module.exports = async function (context, req) {
  const date = "2023-04-04T16:11:39.842Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

