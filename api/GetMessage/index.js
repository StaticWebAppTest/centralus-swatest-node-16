module.exports = async function (context, req) {
  const date = "2022-12-13T02:21:53.262Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

