module.exports = async function (context, req) {
  const date = "2022-04-15T16:14:02.804Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

