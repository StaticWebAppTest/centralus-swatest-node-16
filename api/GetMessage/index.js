module.exports = async function (context, req) {
  const date = "2022-09-05T21:10:42.212Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

