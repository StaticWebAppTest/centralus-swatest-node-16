module.exports = async function (context, req) {
  const date = "2022-06-29T22:10:15.150Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

