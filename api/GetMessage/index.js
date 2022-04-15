module.exports = async function (context, req) {
  const date = "2022-04-15T22:10:20.534Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

