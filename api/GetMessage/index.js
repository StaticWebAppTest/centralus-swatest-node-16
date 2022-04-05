module.exports = async function (context, req) {
  const date = "2022-04-05T18:12:28.244Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

