module.exports = async function (context, req) {
  const date = "2022-07-22T22:10:42.992Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

