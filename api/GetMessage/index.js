module.exports = async function (context, req) {
  const date = "2022-04-29T23:10:57.221Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

