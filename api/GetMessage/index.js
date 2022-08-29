module.exports = async function (context, req) {
  const date = "2022-08-29T22:11:10.184Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

