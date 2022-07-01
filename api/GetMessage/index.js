module.exports = async function (context, req) {
  const date = "2022-07-01T15:12:17.344Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

