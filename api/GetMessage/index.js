module.exports = async function (context, req) {
  const date = "2022-06-12T21:08:42.212Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

