module.exports = async function (context, req) {
  const date = "2022-12-09T06:12:58.756Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

