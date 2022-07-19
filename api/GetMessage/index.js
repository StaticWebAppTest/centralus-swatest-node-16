module.exports = async function (context, req) {
  const date = "2022-07-19T23:11:05.673Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

