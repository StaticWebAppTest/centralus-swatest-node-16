module.exports = async function (context, req) {
  const date = "2022-04-17T20:10:33.145Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

