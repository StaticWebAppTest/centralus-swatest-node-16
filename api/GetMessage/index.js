module.exports = async function (context, req) {
  const date = "2022-08-24T05:38:32.212Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

