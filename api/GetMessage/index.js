module.exports = async function (context, req) {
  const date = "2022-05-04T21:15:13.884Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

