module.exports = async function (context, req) {
  const date = "2022-11-26T20:10:01.445Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

