module.exports = async function (context, req) {
  const date = "2022-11-17T07:10:29.537Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

