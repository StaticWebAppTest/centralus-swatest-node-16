module.exports = async function (context, req) {
  const date = "2022-12-07T02:21:02.295Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

