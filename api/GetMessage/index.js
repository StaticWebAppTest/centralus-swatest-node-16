module.exports = async function (context, req) {
  const date = "2022-07-30T20:10:29.564Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

