module.exports = async function (context, req) {
  const date = "2022-08-14T20:10:43.935Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

