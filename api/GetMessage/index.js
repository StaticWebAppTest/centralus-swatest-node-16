module.exports = async function (context, req) {
  const date = "2022-03-02T06:12:58.212Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

