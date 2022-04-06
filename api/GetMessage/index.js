module.exports = async function (context, req) {
  const date = "2022-04-06T22:10:47.284Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

