module.exports = async function (context, req) {
  const date = "2022-08-15T20:11:44.623Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

