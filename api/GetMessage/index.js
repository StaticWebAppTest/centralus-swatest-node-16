module.exports = async function (context, req) {
  const date = "2022-07-22T20:12:03.602Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

