module.exports = async function (context, req) {
  const date = "2023-07-05T20:10:57.445Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

