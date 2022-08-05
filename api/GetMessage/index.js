module.exports = async function (context, req) {
  const date = "2022-08-05T20:11:28.155Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

