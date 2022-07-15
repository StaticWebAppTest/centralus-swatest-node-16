module.exports = async function (context, req) {
  const date = "2022-07-15T12:22:29.994Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

