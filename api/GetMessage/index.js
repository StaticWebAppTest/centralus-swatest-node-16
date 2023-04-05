module.exports = async function (context, req) {
  const date = "2023-04-05T20:10:19.200Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

