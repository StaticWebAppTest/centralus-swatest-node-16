module.exports = async function (context, req) {
  const date = "2022-11-29T04:12:53.014Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

