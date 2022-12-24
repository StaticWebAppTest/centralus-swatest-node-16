module.exports = async function (context, req) {
  const date = "2022-12-24T15:08:42.884Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

