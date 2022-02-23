module.exports = async function (context, req) {
  const date = "2022-02-23T21:09:05.212Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

