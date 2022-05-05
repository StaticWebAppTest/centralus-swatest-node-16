module.exports = async function (context, req) {
  const date = "2022-05-05T05:16:53.371Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

