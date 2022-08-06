module.exports = async function (context, req) {
  const date = "2022-08-06T20:10:47.878Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

