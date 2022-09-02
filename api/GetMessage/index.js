module.exports = async function (context, req) {
  const date = "2022-09-02T06:37:42.884Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

