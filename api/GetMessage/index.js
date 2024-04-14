module.exports = async function (context, req) {
  const date = "2024-04-14T23:57:08.030Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

