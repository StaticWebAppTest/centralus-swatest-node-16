module.exports = async function (context, req) {
  const date = "2022-04-17T22:10:06.150Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

