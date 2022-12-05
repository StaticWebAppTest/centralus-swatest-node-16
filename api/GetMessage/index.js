module.exports = async function (context, req) {
  const date = "2022-12-05T04:12:26.013Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

