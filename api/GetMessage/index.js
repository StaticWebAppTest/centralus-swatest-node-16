module.exports = async function (context, req) {
  const date = "2022-04-17T02:27:24.582Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

