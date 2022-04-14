module.exports = async function (context, req) {
  const date = "2022-04-14T20:12:19.823Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

