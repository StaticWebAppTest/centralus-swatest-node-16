module.exports = async function (context, req) {
  const date = "2022-07-14T21:10:46.909Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

