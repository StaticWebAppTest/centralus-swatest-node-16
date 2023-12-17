module.exports = async function (context, req) {
  const date = "2023-12-17T02:25:14.730Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

