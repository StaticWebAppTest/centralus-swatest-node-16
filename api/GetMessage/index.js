module.exports = async function (context, req) {
  const date = "2022-04-03T20:11:30.673Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

