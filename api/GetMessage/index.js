module.exports = async function (context, req) {
  const date = "2023-11-03T16:11:37.842Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

