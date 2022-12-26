module.exports = async function (context, req) {
  const date = "2022-12-26T23:09:25.804Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

