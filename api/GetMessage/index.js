module.exports = async function (context, req) {
  const date = "2022-12-05T21:08:51.976Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

