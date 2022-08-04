module.exports = async function (context, req) {
  const date = "2022-08-04T20:12:32.673Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

