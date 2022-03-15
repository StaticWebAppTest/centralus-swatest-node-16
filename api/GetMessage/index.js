module.exports = async function (context, req) {
  const date = "2022-03-15T22:11:15.212Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

