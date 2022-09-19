module.exports = async function (context, req) {
  const date = "2022-09-19T04:21:17.155Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

