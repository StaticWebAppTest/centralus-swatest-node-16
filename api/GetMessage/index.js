module.exports = async function (context, req) {
  const date = "2022-08-26T15:13:05.804Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

