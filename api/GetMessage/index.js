module.exports = async function (context, req) {
  const date = "2023-09-01T08:11:18.884Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

