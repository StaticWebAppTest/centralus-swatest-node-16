module.exports = async function (context, req) {
  const date = "2022-06-27T22:10:04.813Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

