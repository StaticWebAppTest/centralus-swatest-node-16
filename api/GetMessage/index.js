module.exports = async function (context, req) {
  const date = "2023-02-26T20:10:06.212Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

