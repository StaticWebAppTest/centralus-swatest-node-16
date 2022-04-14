module.exports = async function (context, req) {
  const date = "2022-04-14T02:43:53.959Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

