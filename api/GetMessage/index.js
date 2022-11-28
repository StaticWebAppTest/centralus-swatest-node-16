module.exports = async function (context, req) {
  const date = "2022-11-28T20:10:51.782Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

