module.exports = async function (context, req) {
  const date = "2022-07-15T20:12:03.407Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

