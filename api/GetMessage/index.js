module.exports = async function (context, req) {
  const date = "2022-07-03T12:17:43.160Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

