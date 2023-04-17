module.exports = async function (context, req) {
  const date = "2023-04-17T13:12:51.801Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

