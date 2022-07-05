module.exports = async function (context, req) {
  const date = "2022-07-05T22:09:55.406Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

