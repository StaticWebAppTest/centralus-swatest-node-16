module.exports = async function (context, req) {
  const date = "2024-04-22T20:10:22.150Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

