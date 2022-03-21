module.exports = async function (context, req) {
  const date = "2022-03-21T04:12:53.617Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

